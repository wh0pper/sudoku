import Helper from './helper';

export class Board {
  constructor(grid) {
    this.grid = grid;
    this.empties = [];
  }

  //checker functions
  checkRow(value, coordinates) {
    let rowCheck = this.grid[coordinates[0]];
    rowCheck[coordinates[1]] = value;
    let result = Helper.arrayCheck(rowCheck);
    return result;
  }

  checkColumn(value, coordinates) {
    //build colum into array first
    let colCheck = [];
    for (let x=0; x<9; x++) {
      colCheck.push(this.grid[x][coordinates[1]]);
    }
    //plug in test value
    colCheck[coordinates[0]] = value;
    let result = Helper.arrayCheck(colCheck);
    // console.log(colCheck);
    return result;
  }

  checkSquare(value, coordinates) {
    //build square into array with value plugged in
    let r = Math.floor(coordinates[0]/3) * 3;
    let rMax = r + 3;
    let squareCheck = [];
    for (r; r < rMax; r++) {
      let c = Math.floor(coordinates[1]/3) * 3;
      let cMax = c + 3;
      for (c; c < cMax; c++) {
        if (r==coordinates[0] && c==coordinates[1]) {
          squareCheck.push(value);
        } else {
          squareCheck.push(this.grid[r][c])
        }
      }
    }
    let result = Helper.arrayCheck(squareCheck);
    return result;
  }

  isFull() {
    this.findEmpties();
    if (this.empties.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  findEmpties() {
    this.empties = [];
    //look for zeros in all rows and columns
    for(let x = 0; x < 9; x++) { //rows
      for(let y = 0; y < 9; y++) { //columns
        if (this.grid[x][y] == 0) {
          this.empties.push([x,y]);
        }
      }
    }
  }

  generateValue(coordinates) {
    let bank = [1,2,3,4,5,6,7,8,9];
    while (bank.length > 0) {
      let value = bank[Math.floor(Math.random() * bank.length)];
      // console.log(value);
      // console.log('row', this.checkRow(value, coordinates));
      // console.log('column', this.checkColumn(value, coordinates));
      // console.log('square', this.checkSquare(value, coordinates));
      if (this.checkRow(value, coordinates) && this.checkColumn(value, coordinates) && this.checkSquare(value, coordinates)) {
        return value;
      } else {
        let indexRemove = bank.indexOf(value);
        bank.splice(indexRemove, 1);
      }
    }
    return false;
  }





}
