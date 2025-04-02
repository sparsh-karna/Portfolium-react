const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./utils/db");
const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const userRoutes = require("./routes/userRoutes"); // Add this line
const multer = require("multer");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Multer setup for file uploads
const upload = multer({ dest: "uploads/" });

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes(upload));
app.use("/api/user", userRoutes); // Add this line

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));