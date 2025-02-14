const dotenv = require("dotenv");
dotenv.config(); //This load the .env file to our env
process.env.NODE_ENV = process.env.NODE_ENV ?? "dev";

module.exports = {
  port: process.env.PORT || 8000,
  api: {
    prefix: process.env.API_PREFIX || "/api/v1",
  },
  //weatherAPIKey: process.env.WEATHER_API_KEY,
dbConnection: "mongodb://127.0.0.1:27017/CMSTu8",
jwtsec : process.env.JWT_SECRECT
};
