$(document).ready(function () {

  jQuery('.header-center-wrap-left').hover(function(){
    jQuery(this).children('ul').slideDown(500);
    jQuery('.header-center-wrap-center').removeClass('menu-active');
      jQuery('.header-center-wrap-right').removeClass('menu-active');
      jQuery('.header-top-mobile').removeClass('menu-active-toggle');
  }, function(){
    jQuery(this).children('ul').slideUp(500);
  });
  
  jQuery('.header-center-wrap-left li.menu-item-has-children').hover(function(){
    jQuery(this).children('ul').fadeIn(300);
  }, function(){
    jQuery(this).children('ul').fadeOut(300);
  });

  if (jQuery(window).width() >= 992) {
    jQuery(window).bind('scroll', function() { 
      var top = jQuery(document).scrollTop();
      if (top > 97) {
          jQuery('.header-center').addClass('header-center-active');
        }
      else {
        jQuery('.header-center').removeClass('header-center-active');
        }
    });
  } else if (jQuery(window).width() >= 768 && jQuery(window).width() < 992) {
    jQuery(window).bind('scroll', function() { 
      var top = jQuery(document).scrollTop();
      if (top > 97) {
          jQuery('.header-center').addClass('header-center-active');
          jQuery('.header-top-right-cart').addClass('header-cart-active');
          jQuery('.header-top-mobile').addClass('header-top-mobile-active');
        }
      else {
        jQuery('.header-center').removeClass('header-center-active');
        jQuery('.header-top-right-cart').removeClass('header-cart-active');
        jQuery('.header-top-mobile').removeClass('header-top-mobile-active');
        }
    });
    $('.header-top-mobile').on('click', function () { 
      jQuery('.header-center-wrap-center').toggleClass('menu-active');
      jQuery('.header-center-wrap-right').toggleClass('menu-active');
      if($('.header-top-mobile').hasClass('header-top-mobile-active')) {
        jQuery('.header-top-mobile').toggleClass('menu-active-toggle-fixed');

      } else {
        jQuery('.header-top-mobile').toggleClass('menu-active-toggle');

      }
    });
  } else if (jQuery(window).width() < 768 ) {
    jQuery(window).bind('scroll', function() { 
      var top = jQuery(document).scrollTop();
      if (top > 97) {
          jQuery('.header-center').addClass('header-center-active');
          jQuery('.header-top-right-cart').addClass('header-cart-active');
          jQuery('.header-top-mobile').addClass('header-top-mobile-active');
        }
      else {
        jQuery('.header-center').removeClass('header-center-active');
        jQuery('.header-top-right-cart').removeClass('header-cart-active');
        jQuery('.header-top-mobile').removeClass('header-top-mobile-active');
        }
    });
    $('.header-top-mobile').on('click', function () { 
      jQuery('.header-center-wrap-center').toggleClass('menu-active');
      jQuery('.header-center-wrap-right').toggleClass('menu-active');
      if($('.header-top-mobile').hasClass('header-top-mobile-active')) {
        jQuery('.header-top-mobile').toggleClass('menu-active-toggle-fixed');

      } else {
        jQuery('.header-top-mobile').toggleClass('menu-active-toggle');

      }
    });
  }
});