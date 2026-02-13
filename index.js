const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hola Docker!");
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
  });
}