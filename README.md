# OpenGym

OpenGym is an application that seeks to provide a platform for homegym owners to make their homegym available for commercial use in both a normal commercial gym format and a booking format similar to that of a hotel. <br />
- App not hosted due to high cost of AWS services
## How It was Built
### Technologies
- Frontend: React, Next.JS, Bootstrap
- Backend: Golang and Docker
- Other Tools: AWS tools (API Gateway, Lambda, MSK, ElasticSearch, Cloudfront, Cognito, RDS and S3)

## App Architecture
### Overall Architecture: 
<img width="729" alt="image" src="https://github.com/Nick-Cho/OpenGym/assets/65980644/b802eb45-3927-46ba-972b-9ef56110c6a5">

## Design
**Primary Goals:**
1) High Consistency
2) Latency
3) Security
4) Scalability

## Storage Requirements

The main concern I had for storage requirements were the **TimeSlots** and **Bookings** data that would store the booking information. As there will only be ~1-3 Gyms per user and upwards of ~100 000 users these User and Gym tables shouldn't 
be an issue to maintain. However, each day could have multiple time slots and each of these slots, multiple bookings I estimated the load to be: <br/>

~8 slots/day * 60 days (at least 2 months of slots should be available for booking) * ~32bytes * ~10000 Gyms = ~150 million <br /> 

This would become a big issue if attached to the gyms and their location information so I separated them for this purpose and chose to move the rows for previous month's booking into an s3 bucket. In the future, I would want to add 
**sharding** to improve scalability of the dataabse or potentially, migrate the data into a time scaled db.

The tables below are connected as such but, housed in different databases to allow for better scalability to address specific concerns with each table. DB design follows **3NF**


<img width="913" alt="image" src="https://github.com/Nick-Cho/OpenGym/assets/65980644/915a3da0-7999-4cd2-8b33-e5127cbe8634">

## Backend Services
### Search Service
This service provides the user a tool to look for locations close to an enterred address or postal code. The main focusses for this service are:
- Low latency searches
- High availability <br />

Querying a DB with multiple rows and 2 columns to sort on (latitude and longitude) is a very slow process that wouldn't see improvements from indexing. To solve this I used **Geohashing**, a method of representing locations by recursively splitting the world up into 2 divisions appending a bit to represent which half of the world the location resides in, and then further splitting that division in half again until your division is as small as desired. This bit string is then encoded into a string which is known as the **Geohash**

<img width="613" alt="image" src="https://github.com/Nick-Cho/OpenGym/assets/65980644/f5b88534-f749-4d0a-a7c3-51466b836167"> <br />
<!-- ![image](https://github.com/Nick-Cho/OpenGym/assets/65980644/f5b88534-f749-4d0a-a7c3-51466b836167) <br /> -->
<span style="font-size:0.5em;"> image from: https://www.pubnub.com/guides/what-is-geohashing/ </span> <br />

The smaller the division, the more accurate your search will be. For my search I used **level 6 Geohashing**, coupled with **ElasticSearch**, a distributed search tool which further sped up my queries.

### Booking Service
This service provides the user a tool to book a time slot to use a homegym (owners have the option to allow users to come in at any time, representing by the **Is_Commercial** field in the Gym Table. The main focusses for this service are:
- High Consistency (avoid overbooking)
- Security (for payments in the future) <br />

Consistency is important to avoid the problem of an overbooked time slots if both users happen to book at the same time. At first, I was considering the use of isolation DB levels however, my use case would require a serializable level which would bottleneck the DB transactions severely. Instead I opted for **optimistic concurrency** as these write consistency issues wouldn't be frequent enough to require **pessimistic concurrency** and using pessimistic concurrency would also prove slower than optimistic concurrency.

## Todo
- Finish MSK broker configuration
- Payment system for in app transactions
- Webjob to automate timeslot writing

  





