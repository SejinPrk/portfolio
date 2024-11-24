function toggleMenu() {
  const $navMenu = document.getElementById('nav__menu');
  $navMenu.classList.toggle('show');
}

function handleFloatingButton() {
  const $floatingButton = document.getElementById('floating-button');
  $floatingButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  });
}

function init() {
  const $navToggle = document.getElementById('nav-toggle');
  $navToggle.addEventListener('click', () => {
    // Menu Toggle
    toggleMenu();
  });

  const $navList = document.querySelectorAll('.nav__link');
  $navList.forEach((el) => el.addEventListener('click', toggleMenu));
  
  handleFloatingButton()
}

init();

const options = {
  threshold: [0.2, 0.5, 0.8], // 여러 임계값 설정
  rootMargin: '-10% 0px',
};

let currentSection = null;
let maxRatio = 0;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    console.log('Current section:', sectionId);
    console.log('Intersection ratio:', entry.intersectionRatio);

    // 현재 보이는 비율이 더 큰 섹션을 선택
    if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
      maxRatio = entry.intersectionRatio;
      currentSection = sectionId;
    }

    // 섹션이 화면에서 벗어나면 비율 초기화
    if (!entry.isIntersecting && sectionId === currentSection) {
      maxRatio = 0;
    }
  });

  // 가장 많이 보이는 섹션에 대해서만 active-link 적용
  if (currentSection) {
    const navLink = document.querySelector(
      `.nav__link[href*=${currentSection}]`,
    );
    if (navLink) {
      document.querySelectorAll('.nav__link').forEach((el) => {
        el.classList.remove('active-link');
      });
      navLink.classList.add('active-link');
    }
  }
}, options);

const $sectionList = document.querySelectorAll('.section');
$sectionList.forEach((el) => observer.observe(el));


// ScrollReveal
window.addEventListener('DOMContentLoaded', () => {
  const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay: 200,
      reset: true
  });

  // 각 요소에 개별적으로 적용
  sr.reveal('.home__data');
  sr.reveal('.about__img');
  sr.reveal('.skills__text');
  
  sr.reveal('.home__img', { delay: 400 });
  sr.reveal('.about__data', { delay: 400 });
  sr.reveal('.skills__img', { delay: 400 });
  
  sr.reveal('.skills__data', { interval: 200 });
  sr.reveal('.work__link', { interval: 200 });
  sr.reveal('.contact__input', { interval: 200 });
});

