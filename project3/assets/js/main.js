$(document).ready(function() {

  $('.linkios7').mouseenter(function() {
    $('.ios7').addClass('showme');
  });

});

$(document).ready(function() {

  $('.linkios7').mouseleave(function() {
    $('.ios7').removeClass('showme');
  });

});





$(document).ready(function() {

  $('.linkdrunk').mouseenter(function() {
    $('.drunk').addClass('showme');
  });

});

$(document).ready(function() {

  $('.linkdrunk').mouseleave(function() {
    $('.drunk').removeClass('showme');
  });

});




$(document).ready(function() {

  $('.newyorklink').mouseenter(function() {
    $('.newyork').addClass('showme');
  });

});

$(document).ready(function() {

  $('.newyorklink').mouseleave(function() {
    $('.newyork').removeClass('showme');
  });

});



$(document).ready(function() {

  $('.outerspacelink').mouseenter(function() {
    $('.outerspace').addClass('showme');
  });

});

$(document).ready(function() {

  $('.outerspacelink').mouseleave(function() {
    $('.outerspace').removeClass('showme');
  });

});


jQuery(document).ready(function(){
   $('h1').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
     $('h1').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
   });
});

jQuery(document).ready(function(){
   $('h2').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
     $('h2').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
   });
});
