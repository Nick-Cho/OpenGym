package main

import (
	"fmt"
	config "gymService/internal/config"
	resp "gymService/internal/responses"
	"log"

	"github.com/aws/aws-lambda-go/events"
)

type Handler struct{}

func (h *Handler) HandleRequest(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	db := config.Connect()
	defer db.Close()

	gym_id := request.QueryStringParameters["id"]
	if gym_id == "" {
		return resp.CreateMsgResp(400, "No gym id provided"), nil
	}
	sqlRequest := fmt.Sprintf("DELETE FROM Gym WHERE id = %s", gym_id)
	_, err := db.Exec(sqlRequest)
	if err != nil {
		log.Printf("Error deleting from Gym table: %s", err)
		response := resp.CreateMsgResp(400, fmt.Sprintf("Error deleting from Gym table: %s", err))
		return response, err
	}
	response := resp.CreateMsgResp(200, fmt.Sprintf("Gym succesfully deleted"))
	return response, nil

}
