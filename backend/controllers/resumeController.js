const { extractResumeData } = require("../services/resumeService");
const UserInfo = require("../models/UserInfo");

const processResume = async (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });

  try {
    const pdfPath = req.file.path;
    const resumeData = await extractResumeData(pdfPath);

    // Get the authenticated user's ID from the JWT token (set by authMiddleware)
    const userId = req.user.id;

    // Find the UserInfo document for the authenticated user
    const userInfo = await UserInfo.findOne({ userId });
    if (!userInfo) {
      return res.status(404).json({ message: "User info not found" });
    }

    // Update the resumeData field in the UserInfo document
    userInfo.resumeData = resumeData;
    await userInfo.save();

    // Return the extracted resume data
    res.json(resumeData);
  } catch (error) {
    res.status(500).json({ message: "Failed to process resume", error: error.message });
  }
};

module.exports = { processResume };