import time
import requests
import os

from flask import Flask, render_template, request, jsonify
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app)

# @app.route('/', methods=['GET', 'POST'])
# def home():
#   return render_template('index.html')

@socketio.on('system')
def handle_system_msg(message):
  print "system message: " + message


if __name__ == '__main__':
  socketio.run(app, host='localhost', debug=True, port=8080)