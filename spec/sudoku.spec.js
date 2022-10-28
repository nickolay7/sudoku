const { solve, isSolved } = require('../sudoku.js')

describe('Basic test', () => {
  const str = '--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--';

  it('Should return an array with 9 subarrays with length equal to 9', () => {
    console.log(solve(str));
    expect(isSolved(solve(str))).toBeTruthy();
  });
});
