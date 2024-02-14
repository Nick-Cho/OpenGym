package main

import (
	b64 "encoding/base64"
	"encoding/json"

	"log"

	config "github.com/Nick-Cho/OpenGym/internal/config"
	"github.com/aws/aws-lambda-go/events"
)

type Handler struct{}

func (h *Handler) HandleRequest(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	var requestBody map[string]string
	if request.Body == "" {
		log.Println("No request body provided")
		response := events.APIGatewayProxyResponse{
			StatusCode: 400,
			Headers: map[string]string{
				"Access-Control-Allow-Origin":      "*",
				"Access-Control-Allow-Headers":     "*",
				"Access-Control-Allow-Credentials": "true",
			},
			Body: string("No request body provided"),
		}
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

	log.Printf("name: %s, address: %s, owner_id: %s, gym_type: %s, is_commericial: %s, fee: %s", name, address, owner_id, gym_type, is_commericial, fee)
}
