// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  // случай с пустой доской
  1. заполнить 1-й ряд 1-9;
  2. не должны повторяться значения, входящий в 1 блок, 1-3. //Возможные варианты: 4-9;
  3. заполнение каждого нового ряда со сдвигом первого числа на 4.
  4. значение не должно быть равно значениям под этим же индексом из блока выше по вертикали 
    /*  if (n !== 1, 4, 7) // arr[2, 3, 5, 6, 8, 9] удалить 1, 4, 7, взять мин.значение 
    из оставшихся в массиве -> 2 */
    заполняем ряд по логике min +1 // if max => 1

  5. берем остаточное значение, повторение с 3 пункта.


  1 2 3  4 5 6  7 8 9
  4 5 6  7 8 9  1 2 3
  7 8 9  1 2 3  4 5 6

  2 3 4  5 6 7  8 9 1
  6 7 8  9 1 2  3 4 5
  9 1 5  



}


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

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
