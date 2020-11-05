const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const data = require("./dbhelper");

const server = express();

server.use(express.json(), helmet(), morgan("tiny"));

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hi" });
});

server.get("/recipes", (req, res) => {
  data
    .getRecipes()
    .then((results) => {
      if (results.length) {
        res.status(200).json(results).end();
      } else {
        res.status(404).json(results).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err).end();
    });
});

server.get("/recipes/:id/ingredients", (req, res) => {
  data
    .getShoppingList()
    .then((results) => {
      if (results.length) {
        res.status(200).json(results).end();
      } else {
        res.status(404).json({ message: "results not found" }).end();
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "server error" }).end();
    });
});

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Server listening on ${port}`));