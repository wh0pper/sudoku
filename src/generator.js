import {Solution} from './sudoku.js';

export class Generator {
  constructor(grid) {
    this.solution = new Solution(grid);
  }

  checkEmpty() {
    for (var x=0; x<9; x++) { //row
      for (var y=0; y<9; y++) { //column
        if (this.solution.grid[x][y]===0) {
          this.generateNumber(x,y);
        }
      }
    }
  }

  // generateNumber
    // call on check methods
    //updates grid when number found
  generateNumber(row,column) {
    const limit = 9;
    var current = 1;
    for (var i = 0; i < 9; i++) {
      var unitIndex = Math.floor(column/3) + Math.floor(row/3)*3;
      if (this.solution.checkRow(row) && this.solution.checkColumn(column) && this.solution.checkUnit(unitIndex)) {
        this.solution.grid[row][column] = current;
        return current;
      } else {
        while (current <= limit) {
          current += 1;
        }
        current = 1;
      }
    }
    // this.generateNumber(row, column-1);
  }

}
