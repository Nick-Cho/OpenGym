CREATE TABLE Gyms (
	gym_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    owner_id INT NOT NULL,
	name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    is_commercial TINYINT(1) NOT NULL,
    fee INT NOT NULL,
    lat VARCHAR(100) NOT NULL,
    lng VARCHAR(100) NOT NULL,
    FOREIGN KEY (owner_id) REFERENCES Users(user_id)
);