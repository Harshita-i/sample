const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  status: { type: String, enum: ['Present', 'Absent', 'Given'], required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Attendance', AttendanceSchema);