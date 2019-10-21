const server = require("./server");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 5001;

mongoose.connect(process.env.MONGO_DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected to database");
});

server.listen(port, () => {
  console.log("<<<SERVER ON 5K>>>");
});
