package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os/exec"

	resp "searchService/internal/responses"
	openSearchTypes "searchService/internal/types"

	"github.com/aws/aws-lambda-go/events"
	gh "github.com/mmcloughlin/geohash"
)

type Handler struct{}

func (h *Handler) HandleRequest(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	var requestBody map[string]any

	if request.Body == "" {
		log.Println("No request body provided")
		response := resp.CreateMsgResp(400, "No request body provided")
		return response, nil
	}
	json.Unmarshal([]byte(request.Body), &requestBody)

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
				"geohash": geohash,
			},
		},
	}

	reqBody, err := json.Marshal(query)
	if err != nil {
		log.Println("Error marshalling request body: ", err)
		response := resp.CreateMsgResp(400, "Error marshalling request body")
		return response, nil
	}
	payload := string(reqBody)
	curl := fmt.Sprintf("curl -XGET --insecure -u 'master:$Master1' 'https://search-opengym-os-jic4j2he6yjwp6oajo7xzbf6hm.us-east-1.es.amazonaws.com/gymlocation/_search/' -H 'Content-Type: application/json' -d '%s'", payload)
	log.Println("cURL command: ", curl)
	output, err := exec.Command("sh", "-c", curl).Output()

	if err != nil {
		fmt.Println("Error executing cURL command:", err)
		response := resp.CreateMsgResp(400, "Error executing cURL command")
		return response, nil
	}

	fmt.Println("cURL output:", string(output))

	var searchResponse openSearchTypes.Response

	err = json.Unmarshal(output, &searchResponse)

	if err != nil {
		fmt.Println("Error unmarshalling search response:", err)
		response := resp.CreateMsgResp(400, "Error unmarshalling search response")
		return response, nil
	}

	hits, err := json.Marshal(searchResponse.Hits.Hits)
	if err != nil {
		fmt.Println("Error marshalling hits:", err)
		response := resp.CreateMsgResp(400, "Error marshalling hits")
		return response, nil
	}

	return resp.CreateMsgResp(200, string(hits)), nil
}
