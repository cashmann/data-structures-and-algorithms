import unittest
import random
from gameoflife import generateNewGen as generate

class TestGame(unittest.TestCase):
  def setUp(self):
    pass
  def test1(self):
    """ Cells with two live neighbors will live  """
    print(self.shortDescription())
    num = random.randint(3,10)
    i = 0
    gen = ''
    while i < num:
      gen+='.'
      i+=1
    result = generate(gen)
    i-=1
    while i >= 0:
      if(i == 0):
        self.assertEqual(result[0][i], '*')
      elif(i == num-1):
        self.assertEqual(result[0][i], '*')
      else:
        self.assertEqual(result[0][i], '.')
      i-= 1
  def test2(self):
    """Cells with three live neighbors will live """
    print(self.shortDescription())
    gen = '*....**..*.*..**...*..**...**...**..*..***.*.**...**.*.**..**.**..*.*.*.*.*...*..*..*********..**...'
    result = generate(gen, 10, 10)

      

if __name__ == '__main__':
  unittest.main()