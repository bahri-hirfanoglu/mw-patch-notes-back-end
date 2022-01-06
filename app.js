const express = require("express");
const cors = require("cors");
const {graphqlHTTP} = require("express-graphql");
const app = express();
const mongoose = require("mongoose");
const schema = require("./schema");

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}))
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
  "/api",
  graphqlHTTP({
    schema: schema,
    rootValue: schema.query,
    graphiql: true
  })
);


app.listen(serverPort, () => {
  console.log(`Node server is started! Listening port ${serverPort}`);
});
