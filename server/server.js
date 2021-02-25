const express = require("express");
const socketIo = require("socket.io");
const http = require("http");
const path = require("path");

const app = express();
server = http.createServer(app);

const publicPath = path.resolve(__dirname, "../public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = esta es la comunicación del backend
// Se exporta la let io , ahora es module.expports
module.exports.io = socketIo(server);
// Se importa el archivo socket para usar su logica
require("./sockets/socket");

server.listen(port, (err) => {
  if (err) throw new Error(err);

  console.log(`Servidor corriendo en puerto ${port}`);
});
