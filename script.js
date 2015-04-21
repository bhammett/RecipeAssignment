$(document).ready(function() {
  console.log("Script included!");
  $('img').click(function() {
    $(this).fadeOut('slow');
    });
  $('ul li').click(function() { 
       $(this).css('color', 'red');
    });
  $('ol li').click(function() {
     $('<p><em>Done! Next Step:</em></p>').appendTo(this);
    });
});


