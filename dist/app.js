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
  grabCursor: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
