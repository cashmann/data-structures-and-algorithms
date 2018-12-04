def generateNewGen(gen, rows=1, cols=None):
  if cols is None:
    cols = len(gen)
  newGen = []
  mod = 1
  while mod <= rows:
    row = buildRows(gen, cols, mod)
    newGen.append(row)
    mod += 1
  newGen[0][0] = '*'
  newGen[0][-1] = '*'
  return newGen
  
def buildRows(gen, cols, modifier):
  row = []
  cols *= modifier
  while cols >= 1:
    row.append(gen[cols-1])
    cols -= 1
  return list(reversed(row))