const arrayReverse = require('../array-reverse');

describe('arrayReverse', () => {
  it('can reverse an array', () => {
    var reversed = arrayReverse([1,2,3,4]);

    // Deep equality check:
    expect(reversed).toEqual([4,3,2,1]);

    // Object deep equality example:
    // reversed property gets value from variable
    expect({ a: 'b', reversed })
      // reversed property gets new array value
      .toEqual({ a: 'b', reversed: [4,3,2,1]});
  });

  it('can reverse a complex array', () => {
    var desrever = [null, undefined, 0, '', {}, [1,2,3]];
    var reversed = arrayReverse(desrever);

    expect(reversed).toEqual(desrever.reverse());
  });

  it('returns new empty array given empty array', () => {
    var input = [];
    var reversed = arrayReverse(input);

    expect(reversed).toEqual(input);
    expect(reversed).not.toBe(input);
  });

  it('complains about non-array', () => {
    expect(arrayReverse({})).toBe('oops');
    expect(arrayReverse(null)).toBe('oops');
    expect(arrayReverse(undefined)).toBe('oops');
    expect(arrayReverse()).toBe('oops');
    expect(arrayReverse(1)).toBe('oops');
    expect(arrayReverse('[Object object]')).toBe('oops');
  });
});
