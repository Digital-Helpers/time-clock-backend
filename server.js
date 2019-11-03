const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const BodyParser = require('body-parser');
const server = express();


server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(BodyParser.urlencoded({extended: true}));
server.use(BodyParser.json());

const usersRouter = require("./User");
const companyRouter = require("./Company/companyRoutes");

server.get("/", (req, res) => {
  res.send("API Connected");
});

server.use("/api/users", usersRouter);
server.use("/api/company", companyRouter);

module.exports = server;
