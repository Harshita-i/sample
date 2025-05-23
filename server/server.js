require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const studentRoutes = require('./routes/studentRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/students', studentRoutes);
app.use('/api/attendance', attendanceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

