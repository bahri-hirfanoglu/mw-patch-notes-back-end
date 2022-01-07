require('dotenv').config()
const jwt = require("jsonwebtoken");

const maxAge = 60 * 60 * 24;

const createdToken = (username) => {
  return jwt.sign({ username }, process.env.SEC_KEY, { expiresIn: maxAge });
};

const post = (req, res) => {
  const { username, password } = req.body;
  console.log(process.env.USERNAME)
  if (username == process.env.USERNAME && password == process.env.PASSWORD) {
    res.status(200).json({ token: createdToken(username) });
  } else {
    res.status(401).send("username or password invalid!");
  }
};

module.exports = {
  post,
};
