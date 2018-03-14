import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Solution} from './sudoku.js'

$(document).ready(function() {
  $("#submit").submit(function(event) {
    event.preventDefault();
    var storeRow = [];
    var rowValues = [];
    storeRow = document.getElementsByClassName("cell");
    var row1 = document.getElementById('row1').getElementsByTagName('input');
    console.log(row1[0].value);

    for(var i = 0; i < 9; i++) {
      rowValues.push(parseInt(storeRow[i].value));
    }


    console.log(rowValues);


  });

});
