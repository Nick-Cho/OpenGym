package main

import "github.com/aws/aws-lambda-go/lambda"

func main() {
	handler = Handler{}
	lambda.Start(handler.HandleRequest)
}
