import {Solution} from './../src/sudoku.js';
import Helper from './../src/helper.js';

describe('Solution', function() {
  var solution;
  var notSolution;
  var incomplete;

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
    var partialRow = [6,4,0,0,7,3,2,0,0];
    var empty = [0,0,0,0,0,0,0,0,0];
    var partialGrid = [row1, partialRow, empty, empty, empty, empty, empty, empty, empty];
    var grid = [row1, row2, row3, row4, row5, row6, row7, row8, row9];
    var grid2 = [row1, row2, row3, row4, row5, row6, row7, row8, row10];
    solution = new Solution(grid);
    notSolution = new Solution(grid2);
    incomplete = new Solution(partialGrid);
  });

  it('should have a 9x9 grid of numbers in a 2d array', function() {
    expect(solution.grid.length).toEqual(9);
    expect(solution.grid[0].length).toEqual(9);
  });

  it('each row should have all numbers from 1 to 9 with no repeats', function() {
    for (var i = 0; i < 9; i++) {
      expect(solution.checkRow(3)).toEqual(true);
    }
  });

  it('each column should have all numbers from 1 to 9 with no repeats', function() {
    for (var i = 0; i < 9; i++) {
      expect(solution.checkColumn(i)).toEqual(true);
    }
  });

  it('each unit 3x3 sub-square should have all numbers from 1 to 9 with no repeats', function() {
    for (var i = 0; i < 9; i++) {
      expect(solution.checkUnit(i)).toEqual(true);
    }
  });

  it('incorrect solutions wont pass all tests', function() {
    expect(notSolution.checkUnit(7)).toEqual(false);
    expect(notSolution.checkColumn(5)).toEqual(false);
    expect(notSolution.checkRow(8)).toEqual(false);
  });

  it('checks all conditions for entire grid', function() {
    expect(solution.checkAll()).toEqual(true);
  });

  it('works when grid is incomplete', function() {
    for (var i = 0; i < 9; i++) {
      expect(incomplete.checkUnit(i)).toEqual(true);
      expect(incomplete.checkRow(i)).toEqual(true);
      expect(incomplete.checkColumn(i)).toEqual(true);
    }

  });
});

describe('Helper', function() {
  it('returns false for arrays containing duplicates', function() {
    var array = [5,2,8,9,3,3,1,6,7];
    expect(Helper.arrayCheck(array)).toEqual(false);
  });
})
