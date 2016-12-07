$( document ).ready(function() {
      populateGrid();
      addResetGridFunction();
  });

populateGrid = function () {
  for (var x= 0; x < 10; x++){
    for (var y = 0; y < 10; y++){
      var unit = $("<div class='unit'></div>");
      unit.appendTo('#grid');
    }
  }
  $('.unit').on('mouseenter', function(){
    $(this).css({'background-color': 'black'});
  });
}

addResetGridFunction= function () {
  $(function(){
    $('.resetButton').click(function() {
        $('.unit').css({'background-color': 'blue'});
    });
  });
}
