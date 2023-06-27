const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.ham__menu');
const info = document.querySelector('.info');
const contact = document.querySelector('.contact');
const close = document.querySelector('#close-contact-info');
const backToTop = document.querySelector('.back_to_top');
const dropDown = document.querySelectorAll('.withCaret');

function openCaret(e) {
  e.target.parentElement.classList.toggle('open');
}

function openMenu() {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('open');
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

document.addEventListener('click', openCaret);

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

var swiper = new Swiper('.blog-slider', {
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    350: {
      slidesPerView: 1.1,
    },
    768: {
      slidesPerView: 2.1,
    },
    1200: {
      slidesPerView: 3.1,
    },
  },
});
