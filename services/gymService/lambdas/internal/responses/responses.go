package responses

import (
	"github.com/aws/aws-lambda-go/events"
)

func CreateMsgResp(statusCode int, resMsg string) events.APIGatewayProxyResponse {
	// StatusOk = 200
	// StatusCreated = 201
	// StatusAccepted = 202
	// StatusNoContent = 204
	// StatusBadRequest = 400
	// StatusUnauthorized = 401
	// StatusPayMentRequired = 402
	// StatusForbidden = 403

	response := events.APIGatewayProxyResponse{
		StatusCode: statusCode,
		Headers: map[string]string{
			"Access-Control-Allow-Origin":      "*",
			"Access-Control-Allow-Headers":     "*",
			"Access-Control-Allow-Credentials": "true",
		},
		Body: resMsg,
	}
	return response
}
