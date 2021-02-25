const { io } = require("../server");

// Se detecta una conexión emitida por parte del usuario
io.on("connection", (client) => {
  console.log("Usuario conectado");
  //   Se emite un mensaje de bienvenida en función del evento personalizado
  client.emit("enviarMensaje", {
    usuario: "Admin",
    mensaje: "Bienvenido a esta app",
  });
  //   Se detecha la desconexión del usuario
  client.on("disconnect", () => {
    console.log("Usuario desconectado");
  });

  // Se escucha un evento personalizado
  client.on("enviarMensaje", (data, callback) => {
    console.log(data);
    client.broadcast.emit("enviarMensaje", data);
    // if (mensaje.usuario) {
    //   callback({
    //     resp: " Todo bien!",
    //   });
    // } else {
    //   callback({
    //     resp: "Todo mal :(",
    //   });
    // }
  });
});
