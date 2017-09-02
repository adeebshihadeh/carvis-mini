import time

def build():
  base = open("template.html").read()
  topbar = open("topbar.html").read()
  navbar = open("navbar.html").read()
  content = open("content.html").read()
  
  out = open("index.html", "w")
  out.write(base.format(topbar = topbar, navbar = navbar, content = content))
  out.close()


while True:
  build()
  time.sleep(0.1)