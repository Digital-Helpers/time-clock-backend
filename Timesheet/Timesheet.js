const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timesheetSchema = new Schema({
  employeeId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  date: { type: Date, required: true },
  clockIn: [{ type: Date }],
  breakIn: [{ type: Date }],
  breakOut: [{ type: Date }],
  clockOut: [{ type: Date }]
});

module.exports = mongoose.model("Timesheet", timesheetSchema);
