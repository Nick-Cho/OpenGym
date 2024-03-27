accId=$(grep accId ../.env | cut -d '=' -f2)

terraform apply -var="accountID=$accId" 
