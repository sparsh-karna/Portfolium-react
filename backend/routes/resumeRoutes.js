const express = require("express");
const { processResume } = require("../controllers/resumeController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

module.exports = (upload) => {
  router.post("/upload", authMiddleware, upload.single("resume"), processResume);
  return router;
};