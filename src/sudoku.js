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

var arrayCompare = function(arr1, arr2) {
  arr1.sort();
  arr2.sort();
  if (arr1.length != arr2.length) {
    return false;
  } else {
    for (var i=0; i<arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      }
    }
    return true;
  }
};
