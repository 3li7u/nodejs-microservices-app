# MicroServices Node.js Application

Here is a simple microservices architecture express.js app containing two services Users and Orders as well as the API Gateway that acts as a centralized entry point for all clients into the other two services.

## Usage

Clone this repo and then enter each service folder and install the dependencies and run the server as well as the API gateway service.

Terminal #1
```bash
$ git clone 
$ cd gateway
$ npm install
$ npm start
```
from another terminal #2

```bash
$ cd users
$ npm install
$ npm start
```
from another terminal #3

```bash
$ cd orders
$ npm install
$ npm start
```