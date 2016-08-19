(function(){
  var $priceBox = $(".price-box"),
    $counter = $('.counter span' , $priceBox),
    current = +$counter.text(),
    $plus =  $('.js_count' , $priceBox)
    ;

  function count (e){
    if(e.target.innerHTML === '+')
      current = current + 1;
    else
      current = current - 1;

    if (current <= 0){ current = 1; return;}

    $counter.text(current);
  }
  $('.js_count').on('click', count);

})();