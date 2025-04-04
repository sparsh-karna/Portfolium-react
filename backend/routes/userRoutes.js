const express = require("express");
const { getUserInfo } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/info", authMiddleware, getUserInfo);

module.exports = router;