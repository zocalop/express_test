
const express = require("express");
const myapp = express();
const jsonwebtoken = require("jsonwebtoken");
const JWT_SECRET = "aVerySecretString";

myapp.use(express.json());

myapp.post("/signin", (req, res) => {
  const { uname, pwd} = req.body;
  if (uname === "user" && pwd === "password") {
    return res.json({
      token: jsonwebtoken.sign({ user: "user" }, JWT_SECRET),
    });
  }
  return res
    .status(401)
    .json({ message: "Invalid username and/or password"});
});

myapp.get("/employees", (req, res) => {
  let tkn = req.header("authorization");
  if (! tkn) return
    res.status(401).send("No Token");
    if (tkn.startsWith("Bearer ")) {
      tokenValue = tkn.slice(7, tkn.length).trimLeft();
    }
});

myapp.listen(5000, () => {
  console.log("API Server is localhost:5000");
});
