$( document ).ready(function() {
    setupGrid();
  });

setupGrid = function(){
  populateGrid();
  addResetGridFunction();
  addSetGridSizeFunction();
}

// Nummber of sqares is row/column number = numberOfSquares x numberOfSquares
// Could not find a better name for that
populateGrid = function (numberOfSquares) {
  numberOfSquares = numberOfSquares || 10; // default size
  $('#grid').empty();
  for (var x= 0; x < numberOfSquares; x++){
    for (var y = 0; y < numberOfSquares; y++){
      var unit = $("<div class='unit'></div>");
      unit.appendTo('#grid');
    }
  }

  gridBackGroundSize = calculateBackgroundSize(numberOfSquares);

  $('#grid').css({'width': gridBackGroundSize, 'height': gridBackGroundSize});
  $('.unit').on('mouseenter', function(){
    $(this).css({'background-color': getRandomColor()});
  });
}

addResetGridFunction= function () {
  $(function(){
    $('#resetButton').click(function() {
        $('.unit').css({'background-color': 'blue'});
    });
  });
}

addSetGridSizeFunction = function () {
  $(function () {
    $('#setSizeButton').click(function() {
      var size = prompt('Please specify the size of the grid');
      if (!isNaN(size)){
        populateGrid(size);
      }
    });
  });
}

function calculateBackgroundSize ( numberOfSquares){
  return numberOfSquares * 20 + 2 * numberOfSquares;
}

function getRandomColor(){
  return Math.floor(Math.random()*16777215).toString(16);
}
