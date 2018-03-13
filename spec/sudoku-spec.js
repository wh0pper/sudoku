import {Solution} from './../src/sudoku.js';

describe('Solution', function() {
  var solution;
  var notSolution;

  beforeEach(function() {
    var row1 = [1,7,2,5,4,9,6,8,3];
    var row2 = [6,4,5,8,7,3,2,1,9];
    var row3 = [3,8,9,2,6,1,7,4,5];
    var row4 = [4,9,6,3,2,7,8,5,1];
    var row5 = [8,1,3,4,5,6,9,7,2];
    var row6 = [2,5,7,1,9,8,4,3,6];
    var row7 = [9,6,4,7,1,5,3,2,8];
    var row8 = [7,3,1,6,8,2,5,9,4];
    var row9 = [5,2,8,9,3,4,1,6,7];
    var row10 = [5,2,8,9,3,3,1,6,7];
    var grid = [row1, row2, row3, row4, row5, row6, row7, row8, row9];
    var grid2 = [row1, row2, row3, row4, row5, row6, row7, row8, row10];
    solution = new Solution(grid);
    notSolution = new Solution(grid2);
  });

  it('should have a 9x9 grid of numbers in a 2d array', function() {
    expect(solution.grid.length).toEqual(9);
    expect(solution.grid[0].length).toEqual(9);
  });

  it('each row should have all numbers from 1 to 9 with no repeats', function() {
    expect(solution.checkRow(3)).toEqual(true);
  });

  it('each column should have all numbers from 1 to 9 with no repeats', function() {
    expect(solution.checkColumn(5)).toEqual(true);
  });

  it('each unit 3x3 sub-square should have all numbers from 1 to 9 with no repeats', function() {
    expect(solution.checkUnit(1)).toEqual(true);
  });

  // it('every condition, specifications listed above, should have all numbers from 1 to 9 with no repeats', function() {
  //   expect(notSolution.checkAll()).toEqual(false);
  //   expect(solution.checkAll()).toEqual(true);
  // });

});
