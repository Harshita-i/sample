const Attendance = require('../models/Attendance');

exports.submitAttendance = async (req, res) => {
  try {
    const { attendance } = req.body; // [{ studentId, status }]
    const records = await Attendance.insertMany(
      attendance.map(a => ({
        student: a.studentId,
        status: a.status,
        date: new Date(),
      }))
    );
    res.status(201).json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAttendanceSummary = async (req, res) => {
  try {
    const summary = await Attendance.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);
    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};