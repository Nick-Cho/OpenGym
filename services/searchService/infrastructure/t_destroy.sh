accId=$(grep accId ../.env | cut -d '=' -f2)

terraform destroy -var="accountID=$accId" 