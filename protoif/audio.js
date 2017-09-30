// audio screen handling

var audio = {
  handle_msg: function(msg) {
    $("#audio-not-connected").toggle(!msg.audio.connected);
    $("#audio-player").toggle(msg.audio.connected);
  }
};

registerModule(audio);

$("#audio-playpause-btn").click(function() {
  // send play/pause to server
  console.log("playpause");
  sendMsg("audio-cmd", "playpause");
});

$("#audio-next-btn").click(function() {
  // send next to server
  console.log("next");
  sendMsg("audio-cmd", "next");
});

$("#audio-prev-btn").click(function() {
  // send prev to server
  console.log("prev");
  sendMsg("audio-cmd", "prev");
});