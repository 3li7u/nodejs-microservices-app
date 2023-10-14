const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
const { PORT } = require("./conf");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.use("/users", proxy("http://localhost:8001"));
app.use("/orders", proxy("http://localhost:8002"));

app.listen(PORT, () =>
  console.log(`Server is running on https://localhost:${PORT}`)
);
