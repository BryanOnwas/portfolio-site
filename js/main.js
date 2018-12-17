// Define Variables
var navBtn = document.querySelector('.top--brand--icon');
var navBar = document.querySelector('header');
var sideBar = document.querySelector('aside');
var content = document.querySelector('main');
var footer = document.querySelector('footer');
var backBtn = document.querySelector('.btn--back');
var topBtn = document.querySelector('.btn--top');
var modalSpace = document.querySelector('.modal-space');
var body = document.querySelector('body');
var lists = document.querySelectorAll('.sidebar--menu li');
var moblie = window.matchMedia('(max-width: 768px)');

// Init functionality from dependencies
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500
});

new WOW().init();

// Event Handlers
navBtn.addEventListener('click', navButton);
backBtn.addEventListener('click', backButton);
window.addEventListener('scroll', topButton);
window.addEventListener('scroll', navTop);
modalSpace.addEventListener('click', outsideClick);
window.addEventListener('resize', Resize);

// Listen for clicks on sidebar navigation links
lists.forEach(function(list) {
  list.addEventListener('click', listClose);
});

// Event Functions
function navButton() {
  navBtn.children[0].classList.toggle('is-active');
  backBtn.classList.toggle('btn--back__active');
  sideBar.classList.toggle('open');
  modalSpace.classList.toggle('modal-space__active');
  content.classList.toggle('active');
  footer.classList.toggle('active');

  // Remove scroll bar when viewed on mobile devices
  if (moblie.matches) {
    body.classList.toggle('active');
  }
}

// Listen for back button clicks
function backButton() {
  navBtn.children[0].classList.remove('is-active');
  backBtn.classList.remove('btn--back__active');
  sideBar.classList.remove('open');
  modalSpace.classList.remove('modal-space__active');
  content.classList.remove('active');
  footer.classList.remove('active');

  // Add scroll bar when viewed on tablet/desktop devices
  if (moblie.matches) {
    body.classList.remove('active');
  }
}

// Check where (y-position) the top button should be visible/invisible
function topButton() {
  // Check where (y-position) the top button should be visible
  if (window.pageYOffset >= 150) {
    topBtn.classList.add('btn--top__active');
  }

  // Otherwise, check which Y-position the top button should be invisible
  else if (window.pageYOffset < 100) {
    topBtn.classList.remove('btn--top__active');
  }
}

function navTop() {
  // Change header opacity/color when scrolled away from top
  if (window.pageYOffset > 0) {
    navBar.classList.add('active');
  }

  // Otherwise, revert header opacity/color when scrolled back to top
  else if (window.pageYOffset === 0) {
    navBar.classList.remove('active');
  }
}

// Listen for outside modal/sidebar clicks
function outsideClick() {
  backButton();
}

// Listen for manual window resizing by user
function Resize() {
  // Check if window is resized to moblie while the sidebar is open
  // Remove the scroll bar if that's the case
  if (document.body.clientWidth <= '768' && sideBar.className === 'open') {
    body.classList.add('active');
  }

  // Check if window is resized to tablet/desktop while the sidebar is open
  // Add the scroll bar back if that's the case
  else {
    body.classList.remove('active');
  }
}

// On moblie devces, close the sidebar when navigation links are clicked
function listClose() {
  if (moblie.matches) {
    backButton();
  }
}

// Function Calls (if any)
