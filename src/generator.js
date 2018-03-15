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
    var prevRow = this.grid[currentRowIndex - 1];
    var bank = [1,2,3,4,5,6,7,8,9];
    var prevTri = [];
    //0-2
    for (var i = 0; i < 3; i++) { //adds to row considering first prev triad
      var numRemove = prevRow[i];
      prevTri.push(numRemove);
      var indexRemove = bank.indexOf(numRemove);
      if (indexRemove !== -1) {
        bank.splice(indexRemove, 1);
      }
    }
    for (var k = 0; k < 3; k++) {
      var item = bank.splice(Math.floor(Math.random()*bank.length), 1) //random from remaining bank
      row.push(item[0]);
    }

    bank = bank.concat(prevTri);
    // 3-5
    prevTri = [];
    for (var j = 3; j < 6; j++) { //adds to row considering second prev triad
      numRemove = prevRow[j];
      prevTri.push(numRemove);
      indexRemove = bank.indexOf(numRemove);
      if (indexRemove !== -1) {
        bank.splice(indexRemove, 1);
      }
    }
    for (var l = 0; l < 3; l++) {
      item = bank.splice(Math.floor(Math.random()*bank.length), 1) //random from remaining bank
      row.push(item[0]);
    }
    prevTri.forEach(function(prevItem) {
      if (row.includes(prevItem) === false) {
        bank.push(prevItem);
      }
    })
    //6-8
    row = row.concat(bank);
  }
}
