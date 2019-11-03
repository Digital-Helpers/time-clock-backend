const server = require("./server");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 5001;
const dbase = 'mongodb://localhost:27017/time-clock' || process.env.MONGO_DB_CONNECTION;

mongoose.connect(dbase, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected to database");
});

server.listen(port, () => {
  console.log("<<<SERVER ON 5K1>>>");
});
