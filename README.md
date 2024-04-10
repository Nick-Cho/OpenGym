# OpenGym

OpenGym is an application that seeks to provide a platform for homegym owners to make their homegym available for commercial use in both a normal commercial gym format and a booking format similar to that of a hotel.

## How It was Built
### Technologies
- Frontend: React, Next.JS, Bootstrap
- Backend: Golang and Docker
- Other Tools: AWS tools (API Gateway, Lambda, MSK, ElasticSearch, Cloudfront, Cognito, RDS and S3)

## App Architecture
### Overall Architecture: 
<img width="729" alt="image" src="https://github.com/Nick-Cho/OpenGym/assets/65980644/b802eb45-3927-46ba-972b-9ef56110c6a5">

### Design
**Primary Goals:**
1) High Consistency
2) Latency
3) Security
4) Scalability

### Storage Requirements

The main concern I had for storage requirements were the **TimeSlots** and **Bookings** data that would store the booking information. As there will only be ~1-3 Gyms per user and upwards of ~100 000 users these User and Gym tables shouldn't 
be an issue to maintain. However, each day could have multiple time slots and each of these slots, multiple bookings I estimated the load to be: <br/>

~8 slots/day * 60 days (at least 2 months of slots should be available for booking) * ~32bytes * ~10000 Gyms = ~150 million <br /> 

This would become a big issue if attached to the gyms and their location information so I separated them for this purpose and chose to move the rows for previous month's booking into an s3 bucket. In the future, I would want to add 
**sharding** to improve scalability of the dataabse or potentially, migrate the data into a time scaled db.


<img width="913" alt="image" src="https://github.com/Nick-Cho/OpenGym/assets/65980644/915a3da0-7999-4cd2-8b33-e5127cbe8634">

