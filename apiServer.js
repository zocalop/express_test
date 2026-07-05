
const express = require("express");
const myapp = express();
const jsonwebtoken = require("jsonwebtoken");
const JWT_SECRET = "aVerySecretString");



myapp.get("/employees", (req, res) => {
  return res
    .status(401)
    .json({ message: "Please login to access this resource" });
});

myapp.listen(5000, () => {
  console.log("API Server is localhost:5000");
});
