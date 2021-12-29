const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/blogmw-2021", { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB connection successful!");
  })
  .catch((err) => {
    console.err(err);
  });

const serverPort = process.env.PORT || 6650;

app.listen(serverPort, () => {
  console.log(`Node server is started! Listening port ${serverPort}`);
});
