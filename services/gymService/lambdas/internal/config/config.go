package config

import (
	"database/sql"
	"log"
	"os"
	"time"

	"github.com/joho/godotenv"
)

var (
	db  *sql.DB
	err error
)

func Connect() *sql.DB {
	err := godotenv.Load("../../.env")

	if err != nil {
		log.Fatalf("Error getting env in config.go, not coming through %v \n", err)
	}

	dbDriver := "mysql"
	dbUser := "admin"
	dbPass := os.Getenv("DB_PASS")
	dbName := "gym"
	dbIp := os.Getenv("DB_IP")

	db, err = sql.Open(dbDriver, dbUser+":"+dbPass+"@tcp("+dbIp+")/"+dbName)

	if err != nil {
		log.Printf("Error %s when connecting to DB\n", err)
	}
	db.SetMaxOpenConns(20)
	db.SetMaxIdleConns(20)
	db.SetConnMaxLifetime(time.Minute * 5)

	return db
}
