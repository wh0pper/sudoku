import {Generator} from './../src/generator.js';
import Helper from './../src/helper';

describe('Generator', function() {
var testGrid;

  beforeEach(function() {
    testGrid = new Generator();
  });


  it('should return an array with items 1-9', function() {
    expect(testGrid.randomRow().length).toEqual(9);
    var new_row = testGrid.randomRow();
    expect(Helper.arrayCompare(new_row)).toEqual(true);
  });

  it('should return a second row with items 1-9, compatible with first row', function() {
    var row1 = testGrid.randomRow();
    var row2 = testGrid.nextRow();
    expect(row2.length).toEqual(9);
    expect(Helper.arrayCompare(row2)).toEqual(true);
  });
});
