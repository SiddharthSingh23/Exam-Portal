const express = require("express");
const app = express();

const paperMiddleware = require("../middleware/paperMiddleware");
const paperController = require("../controller/paperController");

const { addPaperMiddleware } = paperMiddleware;
const { allPapers, addPaper } = paperController;

app.get("/all-papers", allPapers);
app.post("/add-paper", addPaperMiddleware, addPaper);

module.exports = app;
