const addPaperMiddleware = async (req, res, next) => {
  const { details, questions } = req.body;

  if (Object.keys(details).length === 0 || Object.keys(questions).length === 0) {
    return res.json({ error: "Invalid input!" });
  } else next();
};

module.exports = {
  addPaperMiddleware,
};
