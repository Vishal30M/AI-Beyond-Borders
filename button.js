const burger = document.querySelector('.burger');
const menuMobile = document.querySelector('.menu-mobile');
const closeIcon = document.querySelector('.close-icon');

burger.addEventListener('click', () => {
  menuMobile.classList.add('active');
  menuMobile.style.display = 'block';
  burger.style.display = 'none';
});

closeIcon.addEventListener('click', () => {
  menuMobile.classList.remove('active');
  menuMobile.style.display = 'none';
  burger.style.display = 'block';
});

Window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menuMobile.classList.remove('active');
    burger.style.display = 'none';
  }
});
