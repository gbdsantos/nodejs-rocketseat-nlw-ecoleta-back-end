import express = require("express");

const app = express();

app.get("/users", (request, response) => {
  console.log("Listagem de usuaŕios");

  response.json(["Guilherme", "Andre", "João"]);
});

app.listen(3333);
