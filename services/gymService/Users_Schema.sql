CREATE table Users (
	user_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    email VARCHAR(100),
    phone_num VARCHAR(20),
    password VARCHAR(255),
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT at_least_one_not_null CHECK (COALESCE(email, phone_number) IS NOT NULL) 
);
    
