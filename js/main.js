$(function() {

});

$('button.signin').on('click', function() {
  $('.modal').fadeIn();
})

$('button.close').on('click', function() {
  $('.modal').fadeOut();
})

$('button.submit').click(function() {
  $('.getstarted input').addClass("error");
})

$('.getstarted input').focus(function() {
  $(this).removeClass("error");
});
