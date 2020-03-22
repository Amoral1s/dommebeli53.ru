$(document).ready(function () {
  //Каталог товаров при наведении
  if (jQuery(window).width() > 992) {
    jQuery('.header-center-wrap-left').hover(function(){
      jQuery(this).children('ul').slideDown(500);
      jQuery('.header-center-wrap-center').removeClass('menu-active');
        jQuery('.header-center-wrap-right').removeClass('menu-active');
        jQuery('.header-top-mobile').removeClass('menu-active-toggle');
    }, function(){
      jQuery(this).children('ul').slideUp(500);
    });
  } else {
    jQuery('.header-center-wrap-left').click(function(){
      jQuery(this).children('ul').slideToggle(500);
      jQuery('.header-center-wrap-center').removeClass('menu-active');
        jQuery('.header-center-wrap-right').removeClass('menu-active');
        jQuery('.header-top-mobile').removeClass('menu-active-toggle');
    });
  }
  //Внутреннее меню в каталоге товаров
  jQuery('.header-center-wrap-left li.menu-item-has-children').hover(function(){
    jQuery(this).children('ul').fadeIn(300);
  }, function(){
    jQuery(this).children('ul').fadeOut(300);
  });

  //ширина 992 и выше 
  if (jQuery(window).width() >= 992) {
    //прилепленое меню на 992+
    jQuery(window).bind('scroll', function() { 
      var top = jQuery(document).scrollTop();
      if (top > 97) {
          jQuery('.header-center').addClass('header-center-active');
        }
      else {
        jQuery('.header-center').removeClass('header-center-active');
        }
    });
  } 
  //ширина 768 - 992
  else if (jQuery(window).width() >= 768 && jQuery(window).width() < 992) {
    //прилепленное меню + корзина + меню2
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
    //второе меню при клике
    $('.header-top-mobile').on('click', function () { 
      jQuery('.header-center-wrap-center').toggleClass('menu-active');
      jQuery('.header-center-wrap-right').toggleClass('menu-active');
      jQuery('.header-center-wrap-left ul').slideUp('menu-active');
      if($('.header-top-mobile').hasClass('header-top-mobile-active')) {
        jQuery('.header-top-mobile').toggleClass('menu-active-toggle-fixed');

      } else {
        jQuery('.header-top-mobile').toggleClass('menu-active-toggle');

      }

    });
  } 
  //для мобил меньше 768
  else if (jQuery(window).width() < 768 ) {
    jQuery(window).bind('scroll', function() { 
      //прилепленное меню + корзина + меню2

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
    //клик на 2 меню на мобиле
    $('.header-top-mobile').on('click', function () { 
      jQuery('.header-center-wrap-center').toggleClass('menu-active');
      jQuery('.header-center-wrap-right').toggleClass('menu-active');
      jQuery('.header-center-wrap-left ul').slideUp('menu-active');
      if($('.header-top-mobile').hasClass('header-top-mobile-active')) {
        jQuery('.header-top-mobile').toggleClass('menu-active-toggle-fixed');

      } else {
        jQuery('.header-top-mobile').toggleClass('menu-active-toggle');
      }
    });

  }



});