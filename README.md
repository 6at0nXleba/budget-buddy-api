# budget-buddy-api

* [[#How to start all API's]]
* [[#gateway]]
* [[#db-starter]]
* [[#transaction-service]]
* [[#auth-service]]

## How to start all API's
First, we need to create all the Docker images. To do this, open the terminal in each folder and run the command `npm run build-docker`. 

Once our images are ready, we can assemble our Docker Compose. To do this, navigate to the `docker-compose` folder, open the terminal, and run the command `docker-compose up -d`.

>[!WARNING]
> Don't forget to start Docker itself!

## gateway

>[!WARNING]
>This API is still under development and does not have a Dockerfile for its build yet.

The primary task of the API Gateway will be to proxy user requests further along the service chain with a check of the user's authorization token.

## db-starter
The primary function of this service is to create databases for other services, as well as create tables within these databases. In the Compose setup, it automatically shuts down after creating all the databases and tables.

## transaction-service
This service will be responsible for all user transactions and financial interactions in the future. It will interact with the `Transactions` database.


## auth-service
This service is responsible for user authentication and works in conjunction with the API Gateway.

More detailed documentation will be added to the `README.md` file for each service separately.