// server stuff goes here

var socket = new WebSocket("ws://127.0.0.1:13254");

socket.addEventListener("open", function (event) {
  console.log("ws open");
});

socket.addEventListener("message", function (event) {
  console.log(JSON.parse(event.data))
});

var modules = [];

function sendMsg(msg) {
  // send to ws server
  
}

function registerModule(module) {
  modules.push(module);
}