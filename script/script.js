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

  $('.clk').click(function(e){
    e.preventDefault();
    $('.popup-container').addClass('active');
  });
  $('.popup-container').click(function(){
    $(this).removeClass('active');
  });
  $('.popup-form').click(function(){
    return false;
  });
  $('input[type="tel"]').inputmask({ "mask": "+7 (999) 999-9999" }); //specifying options$('form').each(function () {
				$('.popup-form').validate({
					errorPlacement(error, element) {
						return true;
					},
					focusInvalid: false,
					rules: {
						'popup-phone': {
              required: true,
						},
            'popup-mail': {
              required: true,
              email: true,
              maxlength: 30,
            },
            'popup-name': {
              required: true,
              maxlength: 30,
              minlength: 2,
            },
					},
					submitHandler(form) {
            let th = $(form);
            $.ajax({
              type: 'POST',
              url: 'mail.php',
              data: th.serialize(),
            }).done(() => {
              console.log('llll');
              th.trigger('reset');
            });
              console.log('gggg');
              return false;
          },
        });
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