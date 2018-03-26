import {Board} from './../src/board.js';
import Helper from './../src/helper.js';

describe('Board', function() {
  var solution;
  var notSolution;
  var incomplete;
  var emptyPuzzle;

  beforeEach(function() {
    var row1 = [1,7,2,5,4,9,6,8,3];
    var row2 = [6,4,5,8,7,3,2,1,9]; var partialRow = [6,4,0,0,7,3,2,0,0];
    var row3 = [3,8,9,2,6,1,7,4,5];
    var row4 = [4,9,6,3,2,7,8,5,1];
    var row5 = [8,1,3,4,5,6,9,7,2];
    var row6 = [2,5,7,1,9,8,4,3,6];
    var row7 = [9,6,4,7,1,5,3,2,8];
    var row8 = [7,3,1,6,8,2,5,9,4];
    var row9 = [5,2,8,9,3,4,1,6,7];
    var row10 = [5,2,8,9,3,3,1,6,7];
    var empty = [0,0,0,0,0,0,0,0,0];
    var partialGrid = [row1, partialRow, empty, empty, empty, empty, empty, empty, empty];
    var correctGrid = [row1, row2, row3, row4, row5, row6, row7, row8, row9];
    var incorrectGrid = [row1, row2, row3, row4, row5, row6, row7, row8, row10];
    var emptyGrid = [empty, empty, empty, empty, empty, empty, empty, empty, empty];
    solution = new Board(correctGrid);
    notSolution = new Board(incorrectGrid);
    incomplete = new Board(partialGrid);
    emptyPuzzle = new Board(emptyGrid);
  });

  it('a board has a 9x9 grid in a 2d array', function() {
    expect(emptyPuzzle.grid.length).toEqual(9);
    expect(emptyPuzzle.grid[0].length).toEqual(9);
  });

  it('has a method to check if the board is full or not', function() {
    expect(solution.isFull()).toEqual(true);
    expect(emptyPuzzle.isFull()).toEqual(false);
  });

  it('has a method that fills an array with the coords of every 0 value', function() {
    emptyPuzzle.findEmpties();
    expect(emptyPuzzle.empties.length).toEqual(81);
    expect(emptyPuzzle.empties[0]).toEqual([0,0]);
    expect(emptyPuzzle.empties[3]).toEqual([0,3]);
  });

  it('has a method that checks if a row would be valid given a certain value', function() {
    let value = 5;
    let notValue = 4;
    let coordinates = [1,2];
    expect(incomplete.checkRow(value, coordinates)).toEqual(true);
    expect(incomplete.checkRow(notValue, coordinates)).toEqual(false);
  });

  it('has a method that checks if a column would be valid given a certain value', function() {
    let value = 8;
    let notValue = 5;
    let coordinates = [1,3];
    expect(incomplete.checkColumn(value, coordinates)).toEqual(true);
    expect(incomplete.checkColumn(notValue, coordinates)).toEqual(false);
  });

  it('more column tests', function() {
    let value = 8;
    let value2 = 7;
    let coordinates = [0,0];
    expect(emptyPuzzle.checkColumn(value, coordinates)).toEqual(true);
    expect(emptyPuzzle.checkColumn(value2, coordinates)).toEqual(true);
  });

  it('has a method that checks if a square would be valid given a certain value', function() {
    let value = 3;
    let notValue = 6;
    let coordinates = [2,0];
    expect(incomplete.checkSquare(value, coordinates)).toEqual(true);
    expect(incomplete.checkSquare(notValue, coordinates)).toEqual(false);
  });

  it('has a method that runs through all possible values and returns a value that works or false if no values work', function() {
    let not = [1,7,2,6,4];
    let coordinates = [2,0];
    console.log(incomplete.grid);
    let value = incomplete.generateValue(coordinates);
    // console.log('value:',value);
    // expect(not.includes(value)).toEqual(false);
  });

})
