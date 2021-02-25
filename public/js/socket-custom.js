var socket = io();
// Los on son para escuchar informacioin
// Se hace el log por parte del usuario de que se ha conectado al servidor
socket.on("connect", function () {
  console.log("Conectado al servidor");
});
// Se hace el log por parte del usuario de que se ha desconectado del servidor
socket.on("disconnect", function () {
  console.log("Perdimos conexión con el servidor");
});

// Los emit son para enviar informacion

socket.emit(
  "enviarMensaje",
  {
    usuario: "Kelvin",
    mensaje: "Hola mundo",
  },
  function (resp) {
    console.log("Respuesta del servidor: ", resp);
  }
);

// Escuchar información
socket.on("enviarMensaje", function (resp) {
  console.log("Servidor:", resp);
});
