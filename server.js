const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

const usersRouter = require("./routes/userRoutes");
const companyRouter = require("./routes/companyRoutes");

server.get("/", (req, res) => {
  res.send("API Connected");
});

server.use("/api/users", usersRouter);
server.use("/api/company", companyRouter);

module.exports = server;
