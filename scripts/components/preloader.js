$(window).load(function() { // makes sure the whole site is loaded

  //$('#navbar').addClass('in');
  //$('#navbar').removeClass('in');
  $('#preloader').fadeOut(); // will first fade out the loading animation
  $('#status').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({
    'overflow': 'visible'
  });
})
