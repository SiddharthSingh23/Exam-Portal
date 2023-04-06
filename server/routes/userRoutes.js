const express = require("express");
const app = express();

const userMiddleware = require("../middleware/userMiddleware");
const userController = require("../controller/userController");

const { createUserMiddleware, loginUserMiddleware } = userMiddleware;
const { createUser, loginUser } = userController;

app.get("/get", async (req, res) => {
    res.send("Hello") 
});

app.post("/signup", createUserMiddleware, createUser);
app.post("/login", loginUserMiddleware, loginUser);

module.exports = app;
