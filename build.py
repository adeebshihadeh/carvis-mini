import time
import re
import os

base_ = "template.html"
out_ = "index.html"

def build(basefile, outfile):
  base = open(basefile).read()
  
  links = re.findall('{(.*?)}', base)

  for link in links:
    link_ = os.path.join(os.path.dirname(basefile), os.path.dirname(link)) + "/" + os.path.basename(link)
    build(link_, link_ + "__TEMP")
    base = base.replace("{" + link + "}", getFile(link_ + "__TEMP"))
    os.remove(link_ + "__TEMP")

  out = open(outfile, "w")
  out.write(base)
  out.close()

def getFile(filename):
  file = open(filename).read()
  refs = re.findall('href="(.*?)"', file)
  refs += re.findall('src="(.*?)"', file)
  for ref in refs:
    if not os.path.isfile(ref):
      file = file.replace(ref, os.path.dirname(filename) + "/" + ref)
  return file

while True:
  build(base_, out_)
  time.sleep(0.1)
