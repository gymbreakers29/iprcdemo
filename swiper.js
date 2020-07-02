var swiper = new Swiper('.faculty-swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 1,
      slideShadows: true,
      
      

    },initialSlide: 3,
   
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop:true,
     
      

  
  });

  var swiper = new Swiper('.partner-swiper-container', {
    
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },initialSlide: 3,
    loop: true,
    slidesPerView: 6,
    spaceBetween: 0,
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetweenSlides: 0
      },
      // when window width is <= 480px
      480: {
        slidesPerView: 2,
        spaceBetweenSlides: 0
      },
      // when window width is <= 640px
      640: {
        slidesPerView: 6,
        spaceBetweenSlides: 0
      }
    }
  });