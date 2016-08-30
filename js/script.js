(function ($) {

  function headerPosition() {

    var wScroll = $(window).scrollTop(),
        $headerElement = $('.header-wrapper'),
        $navElement = $('.nav-wrapper');
        // i = Math.min(0, 5);

    if (wScroll > 100) {
      $navElement.css('transform', 'skewY(0deg)');
    }
    else if (wScroll < 105) {
      $navElement.css('transform', 'skewY(-5deg)');
    }


    if (wScroll > 140) {
      $headerElement.addClass('get-small');

    }
    else {
      $('.get-small').removeClass('get-small');
    }

  }

  $(window).scroll(function() {
    headerPosition();
  });


})(jQuery);
