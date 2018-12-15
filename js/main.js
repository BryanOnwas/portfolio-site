// Define Variables
var navBtn = document.querySelector('.top--brand--icon');
var sideBar = document.querySelector('aside');
var backBtn = document.querySelector('.btn__back');
// var topBtn = document.querySelector('.btn__top');
var modalSpace = document.querySelector('.modal-space');

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  easing: 'easeInOutQuad'
});

new WOW().init();

// Event Handlers
navBtn.addEventListener('click', navButton);
backBtn.addEventListener('click', backButton);
// topBtn.addEventListener('click', topButton);
modalSpace.addEventListener('click', outsideClick);

// Event Functions
function navButton() {
  navBtn.children[0].classList.toggle('is-active');
  sideBar.classList.toggle('open');
  modalSpace.classList.toggle('modal-space__active');
}

function backButton() {
  navBtn.children[0].classList.remove('is-active');
  sideBar.classList.remove('open');
  modalSpace.classList.remove('modal-space__active');
}

function topButton() {
  return;
}

function outsideClick() {
  backButton();
}

// Function Calls (if any)
