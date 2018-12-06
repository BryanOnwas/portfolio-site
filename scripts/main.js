// Define Variables
var navBtn = document.querySelector('.top--icon');
var sideBar = document.querySelector('aside');

// Event Handlers
navBtn.addEventListener('click', navButton);

// Event Functions
function navButton() {
  navBtn.children[0].classList.toggle('is-active');
  sideBar.classList.toggle('sidebar__open');
}

// Function Calls
