const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: { type: Boolean, required: true },
  email: { type: String, required: true, unique: true },
  companyName: { type: String, required: true }
});

module.exports = mongoose.model("User", userSchema);
