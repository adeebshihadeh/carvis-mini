import time
import re
import os

def build():
  base = open("template.html").read()
  
  links = re.findall('{(.*?)}', base)

  for link in links:
    base = base.replace("{" + link + "}", getFile(link))

  out = open("index.html", "w")
  out.write(base)
  out.close()

def getFile(filename):
  file = open(filename).read()
  refs = re.findall('href="(.*?)"', file)
  refs += re.findall('src="(.*?)"', file)
  for ref in refs:
    file = file.replace(ref, os.path.dirname(filename) + "/" + ref)
  return file

while True:
  build()
  time.sleep(0.1)