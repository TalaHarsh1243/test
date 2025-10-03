require('dotenv').config(); // Must be at the very top

const express = require("express");
const mongoose = require("mongoose");
const studentRoute = require("./Routes/studentRoutes");

const app = express();
const PORT = process.env.PORT || 80;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use("/song", studentRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
