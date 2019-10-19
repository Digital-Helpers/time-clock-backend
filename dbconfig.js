const mongoose = require("mongoose");

const username = process.env.MONGO_DB_USERNAME;
const password = process.env.MONGO_DB_PW;

mongoose.connect(
  `mongodb+srv://${username}:${password}@timeclock-08k3l.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected to database");
});
