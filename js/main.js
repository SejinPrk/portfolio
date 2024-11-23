function toggleMenu() {
  const $navMenu = document.getElementById('nav__menu');
  $navMenu.classList.toggle('show');
}

function init() {
  const $navToggle = document.getElementById('nav-toggle');
  $navToggle.addEventListener('click', () => {
    // Menu Toggle
    toggleMenu();
  });

  const $navList = document.querySelectorAll('.nav__link');
  $navList.forEach((el) => 
    el.addEventListener('click', toggleMenu));
};

init();