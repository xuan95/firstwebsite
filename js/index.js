$('p').on('mouseover', function() {$(this).css({ "color": "blue",}); });
$('h2').on('mouseover', function() {
  $(this).toggleClass('cool');
});
$('h2').on('mouseover', function() {
  $(this).animate({
    "letter-spacing": "10px",
    "font-size": "40px"
  }, 1000);
});
$('p').on('click', function() {
  $(this).animate({
    "height" : "0px",
    "padding": "0px"
  }, 400, function() {
    $(this).html("");
    alert("meowwwwww");
  })
});
