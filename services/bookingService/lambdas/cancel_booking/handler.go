package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"

	config "bookingService/internal/config"
	response "bookingService/internal/responses"

	"github.com/aws/aws-lambda-go/events"
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

	booking_id := requestBody["booking_id"]
	f_booking_id := booking_id.(float64)
	booking_id = int(f_booking_id)

	sqlReq := fmt.Sprintf("UPDATE Bookings SET Status=2 WHERE BookingId='%d'", booking_id)
	_, err := db.Exec(sqlReq)
	if err != nil {
		log.Println("Error cancelling booking: ", err)
		return response.CreateMsgResp(400, fmt.Sprintf("Error cancelling booking: %s", err)), nil
	}

	sqlReq = fmt.Sprintf("UPDATE TimeSlots SET AvailableSlots=AvailableSlots-1 WHERE SlotId=(SELECT SlotId FROM Bookings WHERE BookingId='%d')", booking_id)
	_, err = db.Exec(sqlReq)
	if err != nil {
		log.Println("Error updating available slots: ", err)
		return response.CreateMsgResp(400, fmt.Sprintf("Error updating available slots: %s", err)), nil
	}

	return response.CreateMsgResp(200, "Booking cancelled successfully"), nil
}
