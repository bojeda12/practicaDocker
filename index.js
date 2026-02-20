const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hola esta es la nueva configuracion para las comprobaciones de docker");
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
  });
}