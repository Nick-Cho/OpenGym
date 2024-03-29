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

func (h *Handler) HandleRequest(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	var requestBody map[string]any
	if request.Body == "" {
		log.Println("No request body provided")
		response := response.CreateMsgResp(400, "No request body provided")
		return response, nil
	}
	db := config.Connect()

	json.Unmarshal([]byte(request.Body), &requestBody)
	gym_id := requestBody["gym_id"]
	start_time := requestBody["start_time"] // Time will have military time format: "HH:MM"
	end_time := requestBody["end_time"]
	date := requestBody["date"] // Format: "YYYY-MM-DD"
	max_slots := requestBody["max_slots"]

	f_gym_id, _ := gym_id.(float64)
	gym_id = int(f_gym_id)
	f_max_slots, _ := max_slots.(float64)
	max_slots = int(f_max_slots)

	available_slots := max_slots // Not necessary, just to make code more readable

	sqlRequest := fmt.Sprintf("INSERT INTO TimeSlots (GymId, StartTime, EndTime, Date, MaxSlots, AvailableSlots, Version) VALUES (%d, %s, %s, %s, %d, %d, 0)", gym_id, start_time, end_time, date, max_slots, available_slots)
	stmt, err := db.Prepare(sqlRequest)
	if err != nil {
		log.Printf("Error %s when preparing sql statement \n", err)
		response := response.CreateMsgResp(400, fmt.Sprintf("Error preparing sql statement: %s", err))
		return response, nil
	}
	defer stmt.Close()
	res, err := stmt.Exec()
	if err != nil {
		log.Printf("Error %s when executing sql statement \n", err)
		response := response.CreateMsgResp(400, fmt.Sprintf("Error executing sql statement: %s", err))
		return response, nil
	}
	defer db.close()
	id, err := res.LastInsertId()
	if err != nil {
		log.Printf("Error %s when getting last inserted id \n", err)

		response := response.CreateMsgResp(400, fmt.Sprintf("Error getting last inserted id: %s", err))
		return response, nil
	}
	fmt.Printf("Last inserted id: %d", id)
	response := response.CreateMsgResp(202, fmt.Sprintf("%d", id))
	return response, nil
}
