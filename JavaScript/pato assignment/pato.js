


const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


// carousel

const carousel = document.querySelector('#carousel');
const track = document.querySelector('#track');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const dotsContainer = document.querySelector('#dots');
const status = document.querySelector('#status');


const initialSlides = Array.from(track.querySelectorAll('.slide'));
const realCount = initialSlides.length;

const firstClone = initialSlides[0].cloneNode(true);
const lastClone = initialSlides[realCount - 1].cloneNode(true);
firstClone.classList.add('clone');
lastClone.classList.add('clone');

track.appendChild(firstClone);
track.insertBefore(lastClone, track.firstChild);


let slides = Array.from(track.querySelectorAll('.slide'));
let index = 1;
let slideWidth = carousel.clientWidth;
let animating = false;

for (let i = 0; i < realCount; i++) {
  const b = document.createElement('button');
  b.className = 'dot';
  b.type = 'button';
  b.setAttribute('aria-label', `Go to slide ${i + 1}`);
  b.dataset.realIndex = i;
  b.setAttribute('aria-pressed', (i === 0).toString());
  dotsContainer.appendChild(b);
}
const dots = Array.from(dotsContainer.querySelectorAll('.dot'));


function setTranslate(indexNo, withTransition = true) {

  slideWidth = carousel.clientWidth;
  if (withTransition) track.style.transition = 'transform 0.5s ease';
  else track.style.transition = 'none';
  track.style.transform = `translateX(-${indexNo * slideWidth}px)`;
}


setTranslate(index, false);
updateDots();

function updateDots() {

  let realIndex = index - 1;
  if (realIndex < 0) realIndex = realCount - 1;
  if (realIndex >= realCount) realIndex = 0;
  dots.forEach((d, i) => {
    d.setAttribute('aria-pressed', (i === realIndex).toString());
  });
}


function moveTo(i) {
  if (animating) return;
  animating = true;
  index = i;
  setTranslate(index, true);
  updateDots();

  clearTimeout(moveTo._safety);
  moveTo._safety = setTimeout(() => {
    animating = false;
    checkClones();
  }, 700);
}

function next() {
  moveTo(index + 1);
  restartAutoplay();
}
function prev() {
  moveTo(index - 1);
  restartAutoplay();
}

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);


dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    const real = Number(e.currentTarget.dataset.realIndex);

    moveTo(real + 1);
    restartAutoplay();
  });
});


track.addEventListener('transitionend', () => {
  animating = false;
  checkClones();
});

function checkClones() {
  slides = Array.from(track.querySelectorAll('.slide'));

  const currentSlide = slides[index];
  if (currentSlide && currentSlide.classList.contains('clone')) {
    track.style.transition = 'none';
    if (index === 0) {

      index = slides.length - 2;
    } else if (index === slides.length - 1) {

      index = 1;
    }
    setTranslate(index, false);
    updateDots();
  }
}


const AUTOPLAY_DELAY = 3000;
let autoplayId = null;
function startAutoplay() {
  stopAutoplay();
  autoplayId = setInterval(() => {
    moveTo(index + 1);
  }, AUTOPLAY_DELAY);
}
function stopAutoplay() {
  if (autoplayId) clearInterval(autoplayId);
  autoplayId = null;
}
function restartAutoplay() {
  stopAutoplay();
  startAutoplay();
}


carousel.addEventListener('mouseenter', stopAutoplay);
carousel.addEventListener('mouseleave', startAutoplay);
carousel.addEventListener('focusin', stopAutoplay);
carousel.addEventListener('focusout', startAutoplay);


document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') { next(); }
  else if (e.key === 'ArrowLeft') { prev(); }
});


let resizeTimer = null;
window.addEventListener('resize', () => {

  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    setTranslate(index, false);
  }, 60);
});


let isDragging = false;
let startX = 0;
let currentTranslate = 0;

track.addEventListener('pointerdown', (e) => {

  if (e.isPrimary === false) return;
  isDragging = true;
  startX = e.clientX;
  slideWidth = carousel.clientWidth;
  track.style.transition = 'none';
  track.setPointerCapture(e.pointerId);
  stopAutoplay();
});

track.addEventListener('pointermove', (e) => {
  if (!isDragging) return;
  const dx = e.clientX - startX;
  currentTranslate = - index * slideWidth + dx;
  track.style.transform = `translateX(${currentTranslate}px)`;
});

function endDrag(e) {
  if (!isDragging) return;
  isDragging = false;

  try { e.target.releasePointerCapture && e.target.releasePointerCapture(e.pointerId); } catch (err) { }
  const dx = (e.clientX - startX);
  const threshold = slideWidth * 0.15;
  track.style.transition = 'transform 0.5s ease';
  if (Math.abs(dx) > threshold) {
    if (dx < 0) {
      moveTo(index + 1);
    } else {
      moveTo(index - 1);
    }
  } else {

    setTranslate(index, true);
  }
  restartAutoplay();
}

track.addEventListener('pointerup', endDrag);
track.addEventListener('pointercancel', endDrag);
track.addEventListener('pointerleave', (e) => {
  if (isDragging) endDrag(e);
});

startAutoplay();

window._carousel = { next, prev, moveTo: (i) => moveTo(i), startAutoplay, stopAutoplay };
