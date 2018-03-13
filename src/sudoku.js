export function Solution(grid) {
  this.grid = grid;
}

Solution.prototype.checkRow = function(rowIndex) {
  var row = this.grid[rowIndex];
  var result = arrayCompare(row, [1,2,3,4,5,6,7,8,9]);
  return result;
};

Solution.prototype.checkColumn = function(colIndex) {
  var col = [];
  for(var i=0; i<this.grid.length; i++) {
    col.push(this.grid[i][colIndex]);
  }
  var result = arrayCompare(col, [1,2,3,4,5,6,7,8,9]);
  return result;
};

Solution.prototype.checkUnit = function(unitIndex) {
  var unit = [];
  var j = Math.floor(unitIndex/3)*3;  //vertical index
  var jMax = j + 3;
  for(j; j < jMax; j++) {
    var i = (unitIndex%3)*3; //horizontal index
    var iMax = i + 3;
    for(i; i < iMax; i++) {
      unit.push(this.grid[j][i]);
    }
  }
  var result = arrayCompare(unit, [1,2,3,4,5,6,7,8,9]);
  return result;
};

// Solution.prototype.checkAll = function() {
//   var j;
//   for (j = 0; j < 9; j++) {
//     console.log(this.grid[0]);
//     if ((this.checkUnit(j)) === false) {
//       console.log("unit " + j);
//       return false;
//     } else if ((this.checkRow(j)) === false) {
//       console.log("row " + j);
//       return false;
//     } else if ((this.checkColumn(j)) === false) {
//       console.log("column " + j);
//       return false;
//     } else if (j === 8) {
//       return true;
//     }
//   }
// };


var arrayCompare = function(arr1, arr2) {
  var sorted1 = arr1.sort();
  var sorted2 = arr2.sort();
  if (sorted1.length != sorted2.length) {
    return false;
  } else {
    for (var i=0; i<sorted1.length; i++) {
      if (sorted1[i] != sorted2[i]) {
        return false;
      }
    }
    return true;
  }
};
