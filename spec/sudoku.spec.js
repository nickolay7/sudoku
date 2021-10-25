const sudoku = require('../sudoku.js')

describe('Basic test', () => {
  const str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

  it('Should return an array with 9 subarrays with length equal to 9', () => {
    expect(solve(str)).toEqual(Array.from(str));
    expect(solve(isSolved(str))).toBeTruthy();
  });
});
