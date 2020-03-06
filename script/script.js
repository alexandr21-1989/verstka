$(document).ready(function(){
  function lockScroll(){
    if($('#menu-togle').hasClass('scroll-on')){
      $html = $('html');
      $body = $('body');
      var initWidth = $body.outerWidth();
      var initHeight = $body.outerHeight();

      var scrollPosition = [
          self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
          self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
      ];
      $html.data('scroll-position', scrollPosition);
      $html.data('previous-overflow', $html.css('overflow'));
      $html.css('overflow', 'hidden');
      window.scrollTo(scrollPosition[0], scrollPosition[1]);

      var marginR = $body.outerWidth()-initWidth;
      var marginB = $body.outerHeight()-initHeight;
      $body.css({'margin-right': marginR,'margin-bottom': marginB});
      $('#menu-togle').addClass('scroll-off').removeClass('scroll-on');
      $('#menu-togle').addClass('menu-icon-active');
      $('#mobile-nav').addClass('mobile-nav--active');
      }
    else{
          $html = $('html');
          $body = $('body');
          $html.css('overflow', $html.data('previous-overflow'));
          var scrollPosition = $html.data('scroll-position');
          window.scrollTo(scrollPosition[0], scrollPosition[1]);

          $body.css({'margin-right': 0, 'margin-bottom': 0});
          $('#menu-togle').addClass('scroll-on').removeClass('scroll-off');
          $('#menu-togle').removeClass('menu-icon-active');
          $('#mobile-nav').removeClass('mobile-nav--active');
    };
  };
    $('#menu-togle').click(lockScroll);
    $('.mobile-nav__item').click(lockScroll);
});

var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  scrollbar:{
    el: '.swiper-scrollbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 5,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
          scrollbar:{
            el: '.swiper-scrollbar',
          },
        },
        // when window width is >= 480px
        760: {
          slidesPerView: 2,
          spaceBetween: 40,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        // when window width is >= 640px
        1100: {
          slidesPerView: 3,
          spaceBetween: 40,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      },
});