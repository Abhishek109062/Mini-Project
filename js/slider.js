const swiper = new Swiper('.swiper', {

    autoplay: {
  
        delay:1900,
        disableOnInteraction: false,
  
    },
  
  loop: true,
  speed: 800,
  effect: 'fade',
  
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:'true',
  },
  
  
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  });
  
  