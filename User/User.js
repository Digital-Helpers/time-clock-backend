const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  companyName: { type: String, required: false },
  userRole: { type: String, required: true, default: "Employee" },
  companyId: { type: Schema.Types.ObjectId, ref: "Company" }
});

module.exports = mongoose.model("User", userSchema);
