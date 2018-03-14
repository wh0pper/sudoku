import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Solution} from './sudoku.js'

$(document).ready(function() {
  $("#submit").submit(function(event) {
    event.preventDefault();
    var grid = [];

    for (var i = 0; i < 9; i++) {
      var rowName = `row${(i+1)}`;
      var thisRow = document.getElementById(rowName).getElementsByTagName('input');
      const thisRowArr = [];
      for(var j = 0; j < 9; j++) {
        if (thisRow[j].value === "") {
          thisRowArr.push(0);
        } else {
          thisRowArr.push(parseInt(thisRow[j].value));
        }
      }
      grid[i] = thisRowArr;
    }

    var checkGrid = new Solution(grid);
    if (checkGrid.checkAll()) {
      $(".output span").text("you did it.");
    } else {
      $(".output span").text("you didn't do it.");
    }
  });

});
