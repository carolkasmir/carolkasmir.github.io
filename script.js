const slides = document.querySelectorAll('.slide');

function revealOnScroll() {
  slides.forEach(slide => {
    const slideTop = slide.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (slideTop < windowHeight - 100) {
      slide.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
