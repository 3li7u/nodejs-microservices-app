const path = require("path");

require("dotenv").config({
  path: path.resolve(process.cwd(), ".env.local"), // create .env.local file or omit this line.
});

module.exports = {
  PORT: process.env.PORT,
};
