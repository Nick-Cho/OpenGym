accId=$(grep accId ./.env | cut -d '=' -f2)

terraform plan -var="accountID=$accId" 
