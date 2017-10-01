// server stuff goes here

var socket = new WebSocket("ws://127.0.0.1:13254");

socket.addEventListener("open", function (event) {
  console.log("ws open");
  for (var module in modules) {
    if (modules[module].on_connect) {
      modules[module].on_connect();
    }
  }
});

socket.addEventListener("close", function (event) {
  console.log("ws closed");
  for (var module in modules) {
    if (modules[module].on_disconnect) {
      modules[module].on_disconnect();
    }
  }
});

socket.addEventListener("message", function (event) {
  // console.log(JSON.parse(event.data))
  for (var module in modules) {
    modules[module].handle_msg(JSON.parse(event.data));
  }
});

var modules = [];

function sendMsg(msg) {
  socket.send(JSON.stringify(msg));
}

function registerModule(module) {
  modules.push(module);
}