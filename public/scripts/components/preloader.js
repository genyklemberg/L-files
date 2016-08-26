/*
$(window).load(function() { // makes sure the whole site is loaded
  $('#preloader').fadeOut(); // will first fade out the loading animation
  $('#status').fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({
    'overflow': 'visible'
  });
});
*/

window.onload = hidePreloader;
function hidePreloader() {
    document.querySelector("#status").style.display = 'none';
    // document.querySelector("#preloader").style.display = 'none';
    document.querySelector("body").style.overflow = 'visible';
}
