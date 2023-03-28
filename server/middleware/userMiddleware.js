const createUserMiddleware = async (req, res, next) => {
  const {
    name,
    email,
    phone,
    password,
    confirmPassword,
    studentClass,
    studentId,
  } = req.body;

  if (
    !name.trim() ||
    !email.trim() ||
    !phone.trim() ||
    !password.trim() ||
    !confirmPassword.trim() ||
    !studentClass.trim() ||
    !studentId.trim()
  ) {
    return res.json({ error: "Invalid input!" });
  } else next();
};

const loginUserMiddleware = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username.trim() || !password.trim()) {
    res.json({ error: "Invalid inputs provided!" });
  } else next();
};

module.exports = {
  createUserMiddleware,
  loginUserMiddleware,
};
