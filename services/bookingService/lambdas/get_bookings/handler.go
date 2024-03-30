package main

import (
	"context"
	"encoding/json"
	"log"

	config "bookingService/internal/config"
	response "bookingService/internal/responses"

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
}
