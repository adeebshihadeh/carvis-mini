import json


class Audio:
  def get_state(self):
    state = {
      "connected": True,
      "paused": False,
      "song": {
        "title": "title",
        "artist": "artist"
      }
    }
    return state

  def handle_msg(self, msg):
    cmd = msg["audio"]["cmd"]
    if cmd == "playpause":
      print "playpause"
    elif cmd == "next":
      print "next track"
    elif cmd == "prev":
      print "prev track"
