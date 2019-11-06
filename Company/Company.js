const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  owner: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  employees: [{ type: Schema.Types.ObjectId, ref: "User" }]
});

module.exports = mongoose.model("Company", companySchema);
