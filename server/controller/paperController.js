const Paper = require("../model/paper");

const allPapers = async (req, res) => {
  try {
    const papers = await Paper.find({});
    res.json(papers);
  } catch (error) {
    console.error(error);
  }
};

const addPaper = async (req, res) => {
  try {
    const { details, questions } = req.body;

    const paperData = new Paper({
      details,
      questions,
    });
    await paperData.save();
    res.send("Paper added successfully!");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  allPapers,
  addPaper,
};
