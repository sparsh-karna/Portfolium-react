const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const LoginData = require("../models/LoginData");
const UserInfo = require("../models/UserInfo");

const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    const existingUser = await LoginData.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const loginData = new LoginData({ email, password: hashedPassword });
    await loginData.save();

    const userInfo = new UserInfo({ userId: loginData._id, fullName, email });
    await userInfo.save();

    const token = jwt.sign({ id: loginData._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Signup failed", error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await LoginData.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
};

module.exports = { signup, login };