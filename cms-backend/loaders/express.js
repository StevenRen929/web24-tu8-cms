const express = require("express");
const cors = require("cors");
const limiter = require("../app/middleware/rateLimiter")
//comments out two lines below
const apiRouter = require("../app/routes/v1/api");
const config = require("../app/config");

const startServer = () => {
  const expressApplication = express()
  expressApplication.listen(8000, (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log("SERVER STARTED:", config.port);
  });
  return expressApplication;
};

module.exports = () => {
  const app = startServer();
  app.use(cors());
  app.use(limiter);
  app.use(express.json());
  //api/v1 + route name
  app.use('/api/v1', apiRouter); // this get code from app/route/api/v1/api.js code
  return app;
};
