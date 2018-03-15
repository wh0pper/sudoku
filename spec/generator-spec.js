import {Generator} from './../src/generator.js';
import Helper from './../src/helper';

describe('Generator', function() {
var testGrid;

  beforeEach(function() {
    var row = [0,0,0,0,0,0,0,0,0];
    var grid = [row, row, row, row, row, row, row, row, row];
    testGrid = new Generator(grid);
  });

  it('should create a grid with numbers', function() {
    expect(testGrid.checkEmpty()).toEqual([1,2,3]);
  });


});
