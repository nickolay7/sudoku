// const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  let regExp = /(.{9})/g;
  let arrBoard = boardString.match(regExp);
  const resultBoard = arrBoard.map((element) => {
    return element.split('');
  });

  const coll = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // iterate board to get empty values cords
  const getEmptyValuesCords = () => {
    const emptyValuesCords = [];
    for (let x = 0; x < 9; x += 1) {
      for (let y = 0; y < 9; y += 1) {
        if (resultBoard[x][y] === '-') {
          emptyValuesCords.push([x, y]);
        }
      }
    }
    return emptyValuesCords;
  };


  const getValuesFromX = (xCord) => {
    return resultBoard[xCord].filter((el) => el !== '-');
  };

  const getValuesFromY = (yCord) => {
    const res = [];
    for (let x = 0; x < 9; x += 1) {
      if (resultBoard[x][yCord] !== '-') {
        res.push(resultBoard[x][yCord]);
      }
    }
    return res;
  };

  const getValuesFromBlock = (x, y) => {
    let res = [];
    const [first, second, third] = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    const blockIndexes = [];
    if (first.includes(x)) {
      blockIndexes.push(first);
    }
    if (second.includes(x)) {
      blockIndexes.push(second);
    }
    if (third.includes(x)) {
      blockIndexes.push(third);
    }
    if (first.includes(y)) {
      blockIndexes.push(first);
    }
    if (second.includes(y)) {
      blockIndexes.push(second);
    }
    if (third.includes(y)) {
      blockIndexes.push(third);
    }
    const [xIndexes, yIndexes] = blockIndexes;
    for (let x = xIndexes[0]; x <= xIndexes[2] ; x += 1) {
      for (let y = yIndexes[0]; y <= yIndexes[2]; y += 1) {
        if (resultBoard[x][y] !== '-') {
          res.push(resultBoard[x][y]);
        }
      }
    }

    return res;
  };

  const go = () => {
    const emptyValuesCords = getEmptyValuesCords(resultBoard);
    for (const [x, y] of emptyValuesCords) {
      const rowValues = getValuesFromX(x);
      const columnValues =getValuesFromY(y);
      const blockValues = getValuesFromBlock(x, y);
      for (const num of coll) {
        if (!rowValues.includes(num) && !columnValues.includes(num) && !blockValues.includes(num)) {
          resultBoard[x][y] = num;
          break;
        }
      }
    }
    return resultBoard;
  };

  return go();
  // [
  //   [ 0, 1 ], [ 0, 4 ], [ 0, 6 ], [ 0, 7 ],
  //   [ 0, 8 ], [ 1, 0 ], [ 1, 2 ], [ 1, 3 ],
  //   [ 1, 7 ], [ 2, 1 ], [ 2, 2 ], [ 2, 4 ],
  //   [ 2, 5 ], [ 3, 0 ], [ 3, 3 ], [ 3, 4 ],
  //   [ 3, 7 ], [ 4, 3 ], [ 4, 6 ], [ 4, 8 ],
  //   [ 5, 0 ], [ 5, 1 ], [ 5, 2 ], [ 5, 3 ],
  //   [ 5, 6 ], [ 5, 8 ], [ 6, 0 ], [ 6, 1 ],
  //   [ 6, 4 ], [ 6, 5 ], [ 6, 6 ], [ 6, 8 ],
  //   [ 7, 2 ], [ 7, 3 ], [ 7, 5 ], [ 7, 7 ],
  //   [ 8, 1 ], [ 8, 2 ], [ 8, 4 ], [ 8, 7 ],
  //   [ 8, 8 ]
  // ]
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  const innersLength = board.reduce((acc, el) => acc + el.length, 0);
  return Array.isArray(board) && board.length === 9 && innersLength === 81;
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}

const str = '--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--';

solve(str);
