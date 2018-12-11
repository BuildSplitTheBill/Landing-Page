const toggleMenu = () => {
    menu.classList.toggle('menu--open');
  }
  
const menu = document.querySelector('.menu');
  

const menuButton = document.querySelector('.menu-button');


menuButton.addEventListener('click', function() {
    toggleMenu();
    TweenMax.set(".menu-button", {rotation: 180});
    TweenMax.from(".menu-button", 0.5, {rotation: 0});
});