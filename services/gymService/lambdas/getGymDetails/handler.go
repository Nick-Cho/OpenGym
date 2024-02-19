package main

import (
	"encoding/json"
	"fmt"
	"log"

	"github.com/aws/aws-lambda-go/events"

	config "gymService/internal/config"
	resp "gymService/internal/responses"
)

type Handler struct{}

type GymInfo struct {
	OwnerId      int    `json:"gym_id"`
	Name         string `json:"name"`
	IsCommercial bool   `json:"is_commercial"`
	Fee          int    `json:"fee"`
	Lat          string `json:"lat"`
	Lng          string `json:"lng"`
}

func (h *Handler) HandleRequest(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	db := config.Connect()
	gym_id := request.QueryStringParameters["id"]
	fmt.Printf("Request gym id : %s\n", gym_id) //temp

	sqlRequest := fmt.Sprintf("SELECT * FROM Gym WHERE id = %s", gym_id)
	res, err := db.Query(sqlRequest)

	// Formatting MySQL response to JSON
	var gymInfo GymInfo
	res.Next()

	err = res.Scan(&gymInfo.OwnerId, &gymInfo.IsCommercial, &gymInfo.Fee, &gymInfo.Lat, &gymInfo.Lng, &gymInfo.Name)
	if err != nil {
		log.Println("Error scanning gym info: ", err)
		return resp.CreateMsgResp(400, fmt.Sprintf("Error getting last inserted id: %s", err)), nil
	}

	defer db.Close()

	response, err := json.Marshal(gymInfo)
	if err != nil {
		log.Println("ERROR MARSHALLING RESPONSE BODY TO JSON", err)
		return resp.CreateMsgResp(400, fmt.Sprintf("Error marshalling response body to JSON: %s", err)), nil
	}

	return resp.CreateMsgResp(200, string(response)), nil
}
