import eel

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

# Set web files folder and optionally specify which file types to check for eel.expose()


#   *Default allowed_extensions are: ['.js', '.html', '.txt', '.htm', '.xhtml']
eel.init('web', allowed_extensions=['.js', '.html'])
@eel.expose                         # Expose this function to Javascript
def passlist():
  print(DB)
  return DB
DB = []
@eel.expose
def acceptlist(inputList):
  print(DB)
  DB.append(inputList[0])
  DB.append(inputList[1])
  print(DB)

eel.start('index.html')             # Start (this blocks and enters loop)

