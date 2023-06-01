const menuBtn = document.querySelector('.menuBtn');
const info = document.querySelector('.info');
const contact = document.querySelector('.contact');
const close = document.querySelector('#close-contact-info');
backToTop = document.querySelector('.back_to_top');

function openMenu() {
  menuBtn.classList.toggle('active');
  document.querySelector('header').classList.add('active');
}

menuBtn.addEventListener('click', openMenu);

window.onscroll = () => {
  document.querySelector('header').classList.add('active');
  backToTop.classList.add('active');
};

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop === 0) {
    document.querySelector('header').classList.remove('active');
    backToTop.classList.remove('active');
  }
});

info.addEventListener('click', () => {
  contact.classList.add('open');
});

close.addEventListener('click', () => {
  contact.classList.remove('open');
});

var swiper = new Swiper('.home-slider', {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// faculties swiper

// var swiper = new Swiper('.mySwiper', {
//   effect: 'coverflow',
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: 5,
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//   },
// });
