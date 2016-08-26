(function(){
  $('#carouseProducts').carousel({ interval: false });
  $('#carouseVideo').carousel({ interval: false });
  $('#carousel-full-width2').carousel({ interval: false });

})();

(function(){
  $('.carousel-showmanymoveone .item').each(function(){
    var itemToClone = $(this);

    for (var i=1;i<3;i++) {
      itemToClone = itemToClone.next();

      // wrap around if at end of item collection
      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }

      // grab item, clone, add marker class, add to collection
      itemToClone.children(':first-child').clone()
        .addClass("cloneditem-"+(i))
        .appendTo($(this));
    }
  });

  $('#carousel-full-width .item').each(function(){
    var itemToClone = $(this);

    for (var i=1;i<2;i++) {
      itemToClone = itemToClone.next();

      // wrap around if at end of item collection
      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }

      // grab item, clone, add marker class, add to collection
      itemToClone.children(':first-child').clone()
        .addClass("cloneditem-" + (i))
        .appendTo($(this));
    }
  });
}());