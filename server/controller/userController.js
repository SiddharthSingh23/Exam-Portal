const User = require("../model/user");
const bcrypt = require("bcryptjs");

const createUser = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      password,
      confirmPassword,
      studentClass,
      studentId,
    } = req.body;

    const checkIfUserExist = await User.findOne({ email, phone });
    console.log(checkIfUserExist);
    if (checkIfUserExist) {
      return res.json({ error: "User with this email already exists!" });
    }
    const userData = new User({
      name,
      email,
      phone,
      password,
      confirmPassword,
      studentClass,
      studentId,
    });
    await userData.save();
    res.send("Data stored successfully!");
  } catch (error) {
    console.error(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const checkIfUserExist = await (User.findOne({ email: username }) ||
      User.findOne({ phone: username }));

    if (!checkIfUserExist) {
      res.json({ message: "Invalid credentials!" });
    }

    const checkPassword = await bcrypt.compare(
      password,
      checkIfUserExist?.password
    );

    if (!checkPassword) {
      res.json({ message: "Invalid credentials!" });
    }
    res.send("User login successfully!");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createUser,
  loginUser,
};
