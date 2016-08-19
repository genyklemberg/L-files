$(document).ready(function() {

  $('#gallery-wrapper').kGallery({
    //wrapper: '#gallery-wrapper',
    url: 'assets/img/desktop-details/main-product/items.json',
    slideshowOptions: {
      enableControls: true,
      enableTitle: false,
      autoPlay: false
    },
    thumbnailPickerOptions: {
      vertical: true,
      itemsOnPage: 4,
      //enableControls: false,
      autoPlay: false
    },
    startItem: 0
  });

  /*window.onresize = resize;
  function resize() {
    if (screen.width >= 100 && screen.width <= 767) {
      var opt = gallery.slideshow.getOptions();
      opt.enableControls = 1;
      console.log(opt.enableControls);
      //gallery.slideshowOptions.enableControls = true;
      /!*
       gallery = kSlideshow({
       wrapper: '#slideshow-only',
       dataSource: 'files/gallery2.json',
       autoPlay: false, //autoplayback is turned off
       enableTitle: false, //images titles is turned off
       startItem: 0
       });
       *!/
    }
  }*/
});
