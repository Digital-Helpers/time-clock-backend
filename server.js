const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
const usersRouter = require("./routes/userRoutes");
server.use(express.json());
server.use(cors());
server.use(helmet());

server.get("/", (req, res) => {
  res.send("API Connected");
});

server.use("/users", usersRouter);

module.exports = server;
