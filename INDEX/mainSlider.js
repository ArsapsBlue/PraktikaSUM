var swiper1 = new Swiper('.mainSlider', {
    slidesPerView: 1,
    spaceBetween: 250,
    loop: true,
    speed: 500,
    effect: 'fade',
    navigation: true,
    navigation: {
      
    },

    pagination: {
      el: '.swiper-pagination',

    },
    autoplay: {
      delay: 6500,
      pauseOnMouseEnter: true,
    },
  });