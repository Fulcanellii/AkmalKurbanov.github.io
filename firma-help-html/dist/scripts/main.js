"use strict";!function(o){o(window).on("load",function(){o(".modalScroll-js").mCustomScrollbar({scrollButtons:{enable:!0}})})}(jQuery),$('.agree-js').on('click', function () {
  $('#offer').hide();
});
$('.agree-js2').on('click', function () {
  $('#confidentiality').hide();
});
$('.agree-js3').on('click', function () {
  $('#agree').hide();
  Cookies.set('modal', 'show', {expires: 7});
  $('body').removeClass('bodyScroll');
});

if (!Cookies.get('modal')) {
  $('.modal-agree').show();
  $('body').addClass('bodyScroll');
}

