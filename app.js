const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const app = express();
const mongoose = require("mongoose");
const schema = require("./schema");

mongoose
  .connect("mongodb://localhost/blogmw-2021", { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB connection successful!");
  })
  .catch((err) => {
    console.err(err);
  });

const serverPort = process.env.PORT || 6650;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: schema.query,
    graphiql: true
  })
);


app.listen(serverPort, () => {
  console.log(`Node server is started! Listening port ${serverPort}`);
});
