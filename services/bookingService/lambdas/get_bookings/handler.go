package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"

	config "bookingService/internal/config"
	response "bookingService/internal/responses"

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

func (h *Handler) HandleRequest(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	var requestBody map[string]any
	if request.Body == "" {
		log.Println("No request body provided")
		response := response.CreateMsgResp(400, "No request body provided")
		return response, nil
	}

	db := config.Connect()
	json.Unmarshal([]byte(request.Body), &requestBody)

	date := requestBody["date"]
	gym_id := requestBody["gym_id"]
	start_time := requestBody["start_time"]
	end_time := requestBody["end_time"]

	f_gym_id := gym_id.(float64)
	gym_id = int(f_gym_id)

	sqlReq := fmt.Sprintf("SELECT * FROM TimeSlots WHERE GymId='%d' AND Date='%s' AND StartTime='%s' AND EndTime='%s'", gym_id, date, start_time, end_time)
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
		return response.CreateMsgResp(400, fmt.Sprintf("Error scanning booking info: %s", err)), nil
	}

	output, err := json.Marshal(timeSlots)
	if err != nil {
		log.Println("ERROR MARSHALLING RESPONSE BODY TO JSON", err)
		return response.CreateMsgResp(400, fmt.Sprintf("Error marshalling response body to JSON: %s", err)), nil
	}

	return response.CreateMsgResp(200, string(output)), nil

}
