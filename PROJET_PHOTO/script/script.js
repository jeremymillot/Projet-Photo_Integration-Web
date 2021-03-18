console.log('hello');

const burger = document.querySelector('header > div:first-of-type');
const navHeader = document.querySelector('header > nav');
const closeButtonNav = document.querySelector('header > nav > button');

burger.addEventListener('click', () => {
  navHeader.style.left = '0vw';
});

closeButtonNav.addEventListener('click', () => {
  navHeader.style.left = '-100vw';
});
