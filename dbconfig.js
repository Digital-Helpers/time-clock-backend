const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGO_DB_CONNECTION,
  { useNewUrlParser: true },
  () => console.log("DB Connected")
);

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function() {
//   console.log("connected to database");
// });
