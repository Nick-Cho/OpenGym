package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"

	config "gymService/internal/config"
	response "gymService/internal/responses"

	"github.com/aws/aws-lambda-go/events"
	_ "github.com/go-sql-driver/mysql"
)

type Handler struct{}

type TimeSlotsInfo struct {
	SlotId         int    `json:"SlotId"`
	GymId          int    `json:"GymId"`
	StartTime      string `json:"StartTime"`
	EndTime        string `json:"EndTime"`
	Date           string `json:"Date"`
	MaxSlots       int    `json:"MaxSlots"`
	AvailableSlots int    `json:"AvailableSlots"`
	Version        int    `json:"Version"`
}

type Bookings struct {
	BookingId int `json:"BookingId"`
	SlotId    int `json:"SlotId"`
	Status    int `json:"Status"`
}

func (h *Handler) HandleRequest(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	var requestBody map[string]any
	if request.Body == "" {
		log.Println("No request body provided")
		response := response.CreateMsgResp(400, "No request body provided")
		return response, nil
	}
	db := config.Connect()

	json.Unmarshal([]byte(request.Body), &requestBody)
	slot_id := requestBody["slot_id"]

	slot_id = slot_id.(float64)
	slot_id = int(slot_id)
	// Optimistic Concurrency
	sqlReq := fmt.Sprintf("SELECT * FROM TimeSlots WHERE SlotId='%d", slot_id)
	res, err := db.Query(sqlReq)

	if err != nil {
		log.Println("Error querying booking info: ", err)
		return response.CreateMsgResp(400, fmt.Sprintf("Error querying booking info: %s", err)), nil
	}

	var timeSlots TimeSlotsInfo
	res.Next()

	err = res.Scan(&timeSlots.SlotId, &timeSlots.GymId, &timeSlots.StartTime, &timeSlots.EndTime, &timeSlots.Date, &timeSlots.MaxSlots, &timeSlots.AvailableSlots, &timeSlots.Version)
	if err != nil {
		log.Println("Error scanning booking info: ", err)
		return response.CreateMsgResp(400, fmt.Sprintf("Error getting last inserted id: %s", err)), nil
	}

	if timeSlots.AvailableSlots == 0 {
		log.Println("No available slots")
		return response.CreateMsgResp(400, "No available slots"), nil
	}

	var currentVersion int = timeSlots.Version

	// Update available slots
	timeSlots.AvailableSlots--
	timeSlots.Version++

	// Check for TimeSlots Optimistic Concurrency
	sqlReq = fmt.Sprintf("SELECT Version FROM TimeSlots WHERE SlotId='%d", slot_id)
	res, err = db.Query(sqlReq)

	if err != nil {
		log.Println("Error querying booking info for checking version: ", err)
		return response.CreateMsgResp(400, fmt.Sprintf("Error querying booking info: %s", err)), nil
	}
	var compareVersion int
	res.Next()

	err = res.Scan(&compareVersion)
	if err != nil {
		log.Println("Error scanning booking info: ", err)
		return response.CreateMsgResp(400, fmt.Sprintf("Error getting last inserted id: %s", err)), nil
	}

	if compareVersion != currentVersion {
		log.Println("Version mismatch")
		return response.CreateMsgResp(400, "Version mismatch"), nil
	} else {
		sqlReq = fmt.Sprintf("UPDATE TimeSlots SET AvailableSlots = '%d', Version = '%d' WHERE SlotId = '%d'", timeSlots.AvailableSlots, timeSlots.Version, timeSlots.SlotId)
		stmt, err := db.Prepare(sqlReq)

		if err != nil {
			log.Printf("Error %s when preparing sql statement \n", err)
			response := response.CreateMsgResp(400, fmt.Sprintf("Error preparing sql statement: %s", err))
			return response, nil
		}

		defer stmt.Close()

		_, err = stmt.Exec()

		if err != nil {
			log.Printf("Error %s when executing sql statement \n", err)
			response := response.CreateMsgResp(400, fmt.Sprintf("Error executing sql statement: %s", err))
			return response, nil
		} else {
			sqlReq = fmt.Sprintf("INSERT INTO Bookings (SlotId, Status) VALUES (%d, 1)", timeSlots.SlotId)
			stmt, err = db.Prepare(sqlReq)
			if err != nil {
				log.Printf("Error %s when preparing sql statement \n", err)
				response := response.CreateMsgResp(400, fmt.Sprintf("Error preparing sql statement: %s", err))
				return response, nil
			}

			defer stmt.Close()

			_, err = stmt.Exec()

			if err != nil {
				log.Printf("Error %s when executing sql statement \n", err)
				response := response.CreateMsgResp(400, fmt.Sprintf("Error executing sql statement: %s", err))
				return response, nil
			} else {
				defer db.Close()
				return response.CreateMsgResp(200, "Slot booked successfully"), nil
			}

		}

	}
}
