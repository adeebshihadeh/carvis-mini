// audio screen handling

var audio = {
  handle_msg: function(msg) {
    if (msg.Audio) {
      $("#audio-not-connected").toggle(!msg.Audio.connected);
      $("#audio-player").toggle(msg.Audio.connected);
      
      $("#audio-song-title").text(msg.Audio.song.title);
      $("#audio-song-artist").text(msg.Audio.song.artist);
    }
  }
};

registerModule(audio);

$("#audio-playpause-btn").click(function() {
  sendMsg({
    "audio": {
      "cmd": "playpause"
    }
  });
});

$("#audio-next-btn").click(function() {
  sendMsg({
    "audio": {
      "cmd": "next"
    }
  });
});

$("#audio-prev-btn").click(function() {
  sendMsg({
    "audio": {
      "cmd": "prev"
    }
  });
});