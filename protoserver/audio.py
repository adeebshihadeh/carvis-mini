import json


class Audio:
  def get_state(self):
    state = {
      "paused": False,
      "song": {
        "title": "title",
        "artist": "artist"
      }
    }
    return state

  def handle_msg(self, msg):
    if msg.audio.cmd == "playpause":
      print "playpause"
    elif msg.audio.cmd == "next":
      print "next track"
    elif msg.audio.cmd == "prev":
      print "prev track"
