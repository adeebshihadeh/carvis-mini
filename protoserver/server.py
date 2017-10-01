# import logging
from websocket_server import WebsocketServer

import json
import threading

import audio

modules = []


def new_client(client, server):
  print "new client"

def client_disconnect(client, server):
  print "client disconnected"

def new_msg(client, server, message):
  print message


server = WebsocketServer(13254, host='127.0.0.1')
server.set_fn_new_client(new_client)
server.set_fn_client_left(client_disconnect)
server.set_fn_message_received(new_msg)


def update():
  threading.Timer(0.1, update).start()
  state = {}
  for module in modules:
    state[module.__class__.__name__] = module.get_state()
  print state
  server.send_message_to_all(json.dumps(state))
update()


# register modules
modules.append(audio.Audio())


server.run_forever()