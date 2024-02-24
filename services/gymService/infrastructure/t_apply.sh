accId=$(grep accId ../lambdas/.env | cut -d '=' -f2)

terraform apply -var="accountID=$accoId" 
