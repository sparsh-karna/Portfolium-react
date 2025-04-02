const UserInfo = require("../models/UserInfo");

const getUserInfo = async (req, res) => {
  try {
    // Get the authenticated user's ID from the JWT token
    const userId = req.user.id;

    // Find the UserInfo document for the authenticated user
    const userInfo = await UserInfo.findOne({ userId }).select("-__v");
    if (!userInfo) {
      return res.status(404).json({ message: "User info not found" });
    }

    res.json(userInfo);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve user info", error: error.message });
  }
};

module.exports = { getUserInfo };