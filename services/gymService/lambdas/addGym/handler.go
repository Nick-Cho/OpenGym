package main

import (
	b64 "encoding/base64"
	"encoding/json"
	"fmt"
	"log"

	config "gymService/internal/config"
	response "gymService/internal/responses"

	"github.com/aws/aws-lambda-go/events"
)

type Handler struct{}

func (h *Handler) HandleRequest(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	var requestBody map[string]string
	if request.Body == "" {
		log.Println("No request body provided")
		response := response.CreateMsgResp(400, "No request body provided")
		return response, nil
	}
	db := config.Connect()
	defer db.Close()

	sDec, _ := b64.StdEncoding.DecodeString(request.Body)
	json.Unmarshal([]byte(sDec), &requestBody)
	name := requestBody["name"]
	address := requestBody["address"]
	owner_id := requestBody["owner_id"]
	gym_type := requestBody["gym_type"]
	is_commericial := requestBody["is_commericial"]
	fee := requestBody["fee"]

	fmt.Printf("name: %s, address: %s, owner_id: %s, gym_type: %s, is_commericial: %s, fee: %s", name, address, owner_id, gym_type, is_commericial, fee)
	sqlRequest := fmt.Sprintf("INSERT INTO gym (name, address, owner_id, gym_type, is_commericial, fee) VALUES ('%s', '%s', '%s', '%s', '%s', '%s')", name, address, owner_id, gym_type, is_commericial, fee)
	fmt.Printf("sql post request from addGym: %s", sqlRequest)
	res, err := db.Exec(sqlRequest)
	if err != nil {
		log.Printf("Error %s when inserting into gym table \n", err)

		response := response.CreateMsgResp(400, fmt.Sprintf("Error inserting new entry into gym table: %s", err))
		return response, nil
	}

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
