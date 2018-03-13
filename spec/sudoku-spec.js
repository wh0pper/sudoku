import {Solution} from './../src/sudoku.js';

describe('Solution', function() {
  beforeEach(function() {
    row1 = [1,7,2,5,4,9,6,8,3]
    row2 = [6,4,5,8,7,3,2,1,9]
    row3 = [3,8,9,2,6,1,7,4,5]
    row4 = [4,9,6,3,2,7,8,5,1]
    row5 = [8,1,3,4,5,6,9,7,2]
    row6 = [2,5,7,1,9,8,4,3,6]
    row7 = [9,6,4,7,1,5,3,2,8]
    row8 = [7,3,1,6,8,2,5,9,4]
    row9 = [5,2,8,9,3,4,1,6,7]
    grid = [row1, row2, row3, row4, row5, row6, row7, row8, row9]
    solution = new Solution(grid);
  });

  it('should have a 9x9 grid of numbers in a 2d array', function() {
    expect(solution.grid.length).toEqual(9)
    expect(solution.grid[0].length).toEqual(9)
  });

});
