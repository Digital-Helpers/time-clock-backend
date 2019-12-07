const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const BodyParser = require('body-parser');
const server = express();

// import Routes for API.
const authRouter = require('./Auth');
const usersRouter = require('./User');
const companyRouter = require('./Company');

// Middleware
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(BodyParser.urlencoded({extended: true}));
server.use(BodyParser.json());

// Setup Routes
server.use('/auth', authRouter);
server.use("/api/users", usersRouter);
server.use("/api/company", companyRouter);

// Test API connection
server.get("/", (req, res) => {
  res.send("API Connected");
});

module.exports = server;
