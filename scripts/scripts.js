$( document ).ready(function() {
    setupGrid();
  });

setupGrid = function(){
  populateGrid();
  addResetGridFunction();
  addSetGridSizeFunction();
}

populateGrid = function (size) {
  size = size || 10; // default size
  $('#grid').empty();
  for (var x= 0; x < size; x++){
    for (var y = 0; y < size; y++){
      var unit = $("<div class='unit'></div>");
      unit.appendTo('#grid');
    }
  }
  debugger;
  gridBackGroundSize = size * 20 + 2*size;
  $('#grid').css({'width': gridBackGroundSize, 'height': gridBackGroundSize});
  $('.unit').on('mouseenter', function(){
    $(this).css({'background-color': 'black'});
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
