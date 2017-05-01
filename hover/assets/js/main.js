$(document).ready(function() {

  $('.number').mouseenter(function() {
    $('.footnote').addClass('showme');
  });

});

$(document).ready(function() {

  $('.number').mouseleave(function() {
    $('.footnote').removeClass('showme');
  });

});






$(document).ready(function() {

  $('.block').mouseenter(function() {
    $('.blockonclick').addClass('showme');
  });

});


$(document).ready(function() {

  $('.block').mouseleave(function() {
    $('.blockonclick').removeClass('showme');
  });

});



$(document).ready(function() {

  $('.block2').mouseenter(function() {
    $('.block2onclick').addClass('showme');
  });

});


$(document).ready(function() {

  $('.block2').mouseleave(function() {
    $('.block2onclick').removeClass('showme');
  });

});


$(document).ready(function() {

  $('.block3').mouseenter(function() {
    $('.block3onclick').addClass('showme');
  });

});


$(document).ready(function() {

  $('.block3').mouseleave(function() {
    $('.block3onclick').removeClass('showme');
  });

});












$(document).ready(function() {

  $('.blueheader').mouseenter(function() {
    $('.redheader').addClass('showme');
  });

});

$(document).ready(function() {

  $('.blueheader').mouseleave(function() {
    $('.redheader').removeClass('showme');
  });

});

$(document).ready(function() {

  $('.thumbnail').onclick (function() {
    $(this).toggleClass('thumbnailenlarge');
  });

});
