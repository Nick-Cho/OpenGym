package main

import (
	"encoding/json"
	"fmt"
	"gymService/internal/config"
	"log"

	b64 "encoding/base64"
	resp "gymService/internal/responses"

	"github.com/aws/aws-lambda-go/events"
)

type Handler struct{}

func (h *Handler) HandleRequest(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	var requestBody map[string]string
	if request.Body == "" {
		log.Println("No request body provided")
		response := resp.CreateMsgResp(400, "No request body provided")
		return response, nil
	}
	db := config.Connect()
	defer db.Close()

	sDec, _ := b64.StdEncoding.DecodeString(request.Body)
	json.Unmarshal([]byte(sDec), &requestBody)
	gym_id := requestBody["gym_id"]
	name := requestBody["name"]
	address := requestBody["address"]
	is_commericial := requestBody["is_commericial"]
	fee := requestBody["fee"]
	lat := requestBody["lat"]
	lng := requestBody["lng"]

	sqlRequest := fmt.Sprintf("UPDATE Gym SET name='%s', address='%s', is_commericial=%s, fee='%s', lat='%s', lng='%s' WHERE gym_id = '%s", name, address, is_commericial, fee, lat, lng, gym_id)
	fmt.Printf("sql put request from updateGym: %s", sqlRequest)
	_, err := db.Exec(sqlRequest)
	if err != nil {
		log.Printf("Error %s when updating Gym table \n", err)
		response := resp.CreateMsgResp(400, fmt.Sprintf("Error updating Gym table: %s", err))
		return response, nil
	} else {
		response := resp.CreateMsgResp(202, "Gym updated successfully")
		return response, nil
	}

}
