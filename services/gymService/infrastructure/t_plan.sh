accId=$(grep accId ../lambdas/.env | cut -d '=' -f2)

terraform plan -var="accountID=$accId" 
