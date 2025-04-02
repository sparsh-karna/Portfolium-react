const mongoose = require("mongoose");

const userInfoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "LoginData", required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  resumeData: {
    profileImage: { type: String, default: "" },
    fullName: { type: String, default: "" },
    title: { type: String, default: "" },
    bio: { type: String, default: "" },
    email: { type: String, default: "" },
    phone: { type: String, default: "" },
    location: { type: String, default: "" },
    languages: [{ type: String, default: "" }], // Changed to array of strings
    website: { type: String, default: "" },
    linkedin: { type: String, default: "" },
    github: { type: String, default: "" },
    twitter: { type: String, default: "" },
    skills: [{ type: String, default: "" }], // Changed to array of strings
    interests: [{ type: String, default: "" }], // Changed to array of strings
    workExperience: [
      {
        company: { type: String, default: "" },
        role: { type: String, default: "" },
        duration: { type: String, default: "" },
        description: { type: String, default: "" },
      },
    ],
    education: [
      {
        institution: { type: String, default: "" },
        degree: { type: String, default: "" },
        duration: { type: String, default: "" },
      },
    ],
    projects: [
      {
        name: { type: String, default: "" },
        description: { type: String, default: "" },
      },
    ],
    achievements: [{ type: String, default: "" }], // Changed to array of strings
    certifications: [{ type: String, default: "" }], // Changed to array of strings
  },
});

module.exports = mongoose.model("UserInfo", userInfoSchema);