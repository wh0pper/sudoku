import {Generator} from './../src/generator.js';
import Helper from './../src/helper';

describe('Generator', function() {

  it('should return an array with items 1-9', function() {
    var row = new Generator();
    expect(row.randomRow().length).toEqual(9);
    var new_row = row.randomRow();
    expect(Helper.arrayCompare(new_row)).toEqual(true);
  });
});
