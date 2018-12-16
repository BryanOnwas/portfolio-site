// Define Variables
var navBtn = document.querySelector('.top--brand--icon');
var navBar = document.querySelector('header');
var sideBar = document.querySelector('aside');
var content = document.querySelector('main');
var footer = document.querySelector('footer');
var backBtn = document.querySelector('.btn--back');
var topBtn = document.querySelector('.btn--top');
var modalSpace = document.querySelector('.modal-space');

// Event Handlers
navBtn.addEventListener('click', navButton);
backBtn.addEventListener('click', backButton);
window.addEventListener('scroll', topButton);
window.addEventListener('scroll', navTop);
modalSpace.addEventListener('click', outsideClick);

// Event Functions
function navButton() {
  navBtn.children[0].classList.toggle('is-active');
  sideBar.classList.toggle('open');
  modalSpace.classList.toggle('modal-space__active');
  content.classList.toggle('active');
  footer.classList.toggle('active');
}

function backButton() {
  navBtn.children[0].classList.remove('is-active');
  sideBar.classList.remove('open');
  modalSpace.classList.remove('modal-space__active');
  content.classList.remove('active');
  footer.classList.remove('active');
}

// Change header opacity when scrolled away from top
// Change header opacity to 100% when not on top
// Change header opacity to 90% when on top
function navTop() {
  if (window.pageYOffset > 0) {
    navBar.classList.add('active');
  } else if (window.pageYOffset === 0) {
    navBar.classList.remove('active');
  }
}

// Change which Y-position the top button is visible/invisible
function topButton() {
  if (window.pageYOffset >= 150) {
    topBtn.classList.add('btn--top__active');
  } else if (window.pageYOffset < 100) {
    topBtn.classList.remove('btn--top__active');
  }
}

// Listen for outside modal/sidebar click
function outsideClick() {
  backButton();
}

// Function Calls (if any)
