package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os/exec"

	response "searchService/internal/responses"

	"github.com/aws/aws-lambda-go/events"
	gh "github.com/mmcloughlin/geohash"
)

type osGymObj struct {
	// Id 		 	 int     `json:"id"`
	Name         string  `json:"name"`
	Address      string  `json:"address"`
	OwnerId      int     `json:"owner_id"`
	IsCommercial int     `json:"is_commercial"`
	Fee          string  `json:"fee"`
	Lat          float64 `json:"lat"`
	Lng          float64 `json:"lng"`
	GeoHash      string  `json:"geohash"`
}

type Handler struct{}

func (h *Handler) HandleRequest(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	var requestBody map[string]any

	if request.Body == "" {
		log.Println("No request body provided")
		response := response.CreateMsgResp(400, "No request body provided")
		return response, nil
	}

	name := requestBody["name"]
	address := requestBody["address"]
	owner_id := requestBody["owner_id"]
	is_commercial := requestBody["is_commercial"]
	fee := requestBody["fee"]
	lat := requestBody["lat"]
	lng := requestBody["lng"]

	f_owner_id, _ := owner_id.(float64)
	owner_id = int(f_owner_id)
	f_is_commercial, _ := is_commercial.(float64)
	is_commercial = int(f_is_commercial)

	geohash := gh.Encode(lat.(float64), lng.(float64))

	gym := osGymObj{
		Name:         name.(string),
		Address:      address.(string),
		OwnerId:      owner_id.(int),
		IsCommercial: is_commercial.(int),
		Fee:          fee.(string),
		Lat:          lat.(float64),
		Lng:          lng.(float64),
		GeoHash:      geohash,
	}
	gymJson, err := json.Marshal(gym)
	if err != nil {
		log.Println("Error marshalling gym object", err)
		response := response.CreateMsgResp(400, "Error marshalling gym object")
		return response, nil
	}
	payload := string(gymJson)
	curl := fmt.Sprintf("curl -XPOST -u 'master:master' 'https://search-opengym-os-jic4j2he6yjwp6oajo7xzbf6hm.us-east-1.es.amazonaws.com/gymLocation/_doc' -d %s -H 'Content-Type: application/json'", payload)
	output, err := exec.Command("sh", "-c", curl).Output()

	if err != nil {
		fmt.Println("Error executing cURL command:", err)
		response := response.CreateMsgResp(400, "Error executing cURL command")
		return response, nil
	}

	fmt.Println("cURL output:", string(output))
	response := response.CreateMsgResp(200, "Gym added to OpenSearch successfully")
	return response, nil
}
