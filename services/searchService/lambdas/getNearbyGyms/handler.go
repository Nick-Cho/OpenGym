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

type Handler struct{}

func (h *Handler) HandleRequest(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	var requestBody map[string]any

	if request.Body == "" {
		log.Println("No request body provided")
		response := response.CreateMsgResp(400, "No request body provided")
		return response, nil
	}

	lat := requestBody["lat"]
	lng := requestBody["lng"]
	f_lat := lat.(float64)
	f_lng := lng.(float64)
	geohash := gh.Encode(f_lat, f_lng)
	geohash = geohash[:4]
	geohash += ".*"
	query := map[string]interface{}{
		"query": map[string]interface{}{
			"regexp": map[string]string{
				"field_name": geohash,
			},
		},
	}
	reqBody, err := json.Marshal(query)
	if err != nil {
		log.Println("Error marshalling request body: ", err)
		response := response.CreateMsgResp(400, "Error marshalling request body")
		return response, nil
	}
	payload := string(reqBody)
	curl := fmt.Sprintf("curl -XGET -u 'master:master' 'https://search-opengym-os-jic4j2he6yjwp6oajo7xzbf6hm.us-east-1.es.amazonaws.com/gymLocation/_doc/%s'", payload)
	output, err := exec.Command("sh", "-c", curl).Output()

	if err != nil {
		fmt.Println("Error executing cURL command:", err)
		response := response.CreateMsgResp(400, "Error executing cURL command")
		return response, nil
	}

	fmt.Println("cURL output:", string(output))
	response := response.CreateMsgResp(200, "Gyms searched succesfully")
	return response, nil
}
