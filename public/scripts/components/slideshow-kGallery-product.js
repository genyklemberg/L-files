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

});
