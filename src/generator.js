export class Generator {
  constructor() {
    this.grid = [];
  }

  randomRow() {
    var bank = [1,2,3,4,5,6,7,8,9];
    var row = [];
    while (bank.length > 0) {
      var item = bank.splice(Math.floor(Math.random()*bank.length), 1)
      row.push(item[0]);
    }
    this.grid.push(row);
    return row;
  }

  nextRow() {
    var row = [];
    var currentRowIndex = this.grid.length;
    var previousRow = this.grid[currentRowIndex-1];

    var bank = [1,2,3,4,5,6,7,8,9];
    for (var j=0; j < 9; j++) {
      //loop through corresponding three of previous rows and remove from bank
      var i = Math.floor(j/3)*3;
      var iMax = i + 3;
      for (i; i < iMax; i++) {
        var indexRemove = bank.indexOf(previousRow[i]);
        bank.splice(indexRemove, 1);
      }
      var item = bank.splice(Math.floor(Math.random()*bank.length), 1)
      row.push(item[0]);
    }
    this.grid.push(row);
    console.log(previousRow);
    console.log(row);
    return row;
  }
}
