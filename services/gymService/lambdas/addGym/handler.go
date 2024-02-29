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
	// sDec, _ := b64.StdEncoding.DecodeString(request.Body)
	json.Unmarshal([]byte(request.Body), &requestBody)

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

	sqlRequest := fmt.Sprintf("INSERT INTO Gym (owner_id, name, address,  is_commercial, fee, lat, lng) VALUES ('%d', ?, '%s', '%d', '%f', '%s', '%s')", owner_id, address, is_commercial, fee, lat, lng)
	stmt, err := db.Prepare(sqlRequest)
	if err != nil {
		log.Printf("Error %s when preparing sql statement \n", err)
		response := response.CreateMsgResp(400, fmt.Sprintf("Error preparing sql statement: %s", err))
		return response, nil
	}
	defer stmt.Close()
	// fmt.Printf("sql post request from addGym: %s", stmt)
	res, err := stmt.Exec(name)
	if err != nil {
		log.Printf("Error %s when executing sql statement \n", err)
		response := response.CreateMsgResp(400, fmt.Sprintf("Error executing sql statement: %s", err))
		return response, nil
	}

	// res, err := db.Exec(sqlRequest)
	// if err != nil {
	// 	log.Printf("Error %s when inserting into Gym table \n", err)
	// 	response := response.CreateMsgResp(400, fmt.Sprintf("Error inserting new entry into Gym table: %s", err))
	// 	return response, nil
	// }
	defer db.Close()
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
