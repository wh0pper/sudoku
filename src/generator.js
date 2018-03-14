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
    return row;
  }

}
