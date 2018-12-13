// JS FOR SIDE MENU
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


//ALL CREDIT FOR THIS FADE-IN FUNCTION GOES TO BRANDON LENT FROM FSW16. HE IS A VETERAN AND A TRUE GENT.
let showOnScroll = function() {
    let elems;
    let windowHeight;
  
    function init() {
      elems = document.querySelectorAll(".hidden");
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    }
  
    function addEventHandlers() {
      window.addEventListener("scroll", checkPosition);
      window.addEventListener("resize", init);
    }
  
    function checkPosition() {
      for (var i = 0; i < elems.length; i++) {
        let positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= -170) {
          TweenMax.to(elems[i], 2, {
            opacity: 1
          });
        }
      }
    }
    return {
      init: init
    };
  };
  showOnScroll().init();