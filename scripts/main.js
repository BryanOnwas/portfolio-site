// Define Variables
var navBtn = document.querySelector('.top--brand--icon');
var sideBar = document.querySelector('aside');

// Event Handlers
navBtn.addEventListener('click', navButton);

// Event Functions
function navButton() {
  navBtn.children[0].classList.toggle('is-active');
  sideBar.classList.toggle('sidebar__open');
}

// Function Calls
// document.body.style.backgroundColor = sessionStorage.getItem('bg');
// document.body.style.color = sessionStorage.getItem('cc');
// function darker() {
//   if (sessionStorage.getItem('bg') === 'rgb(255, 255, 255)') {
//     sessionStorage.setItem('bg', 'rgb(6, 23, 37)');
//     sessionStorage.setItem('cc', '#777');
//   } else if (sessionStorage.getItem('bg') == null || undefined) {
//     sessionStorage.setItem('bg', 'rgb(6, 23, 37)');
//     sessionStorage.setItem('cc', '#777');
//   } else if (sessionStorage.getItem('bg') === 'rgb(6, 23, 37)') {
//     sessionStorage.setItem('bg', 'rgb(255, 255, 255)');
//     sessionStorage.setItem('cc', '#333');
//   }

//   document.body.style.backgroundColor = sessionStorage.getItem('bg');
//   document.body.style.color = sessionStorage.getItem('cc');
// }
// darker();
