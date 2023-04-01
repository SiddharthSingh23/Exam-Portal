const express = require("express");
const app = express();
const dotenv = require("dotenv");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
  next();
});

dotenv.config({ path: "./.env" });
const port = process.env.PORT || 5399;
require("./db/connection");

// to understand the json request
app.use(express.json());

// get all routes from the routes folder and the its file
app.use(require("./routes/userRoutes"));
app.use(require("./routes/paperRoutes"));

app.listen(port, () => {
  console.log("server is running on port :", port);
});
