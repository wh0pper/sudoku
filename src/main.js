import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Triangle} from './triangle';

$(document).ready(function() {
  console.log("test");
  $("#submit").submit(function(event) {
    var storeRow = [];

    storeRow = document.getElementsByClassName("cell").val();
    console.log(storeRow);
    event.preventDefault();

  });

});
