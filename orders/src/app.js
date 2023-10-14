const express = require("express");
const cors = require("cors");
const { errorHandler, unknownEndPoint } = require("./middlewares");
const DBConnect = require("./database");
const { orderRouter } = require("./routes");

const app = express();

DBConnect();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.use("/api/orders", orderRouter);

app.use(unknownEndPoint);
app.use(errorHandler);

module.exports = app;
