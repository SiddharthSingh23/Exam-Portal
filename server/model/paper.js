const mongoose = require("mongoose");

const paperSchema = new mongoose.Schema({
  details: {
    type: Object,
    required: true,
  },
  questions: {
    type: Object,
    required: true,
  },
});

const Paper = mongoose.model("PAPER", paperSchema);

module.exports = Paper;
