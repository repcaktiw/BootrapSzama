// DOM element selection
const slideShow = document.querySelectorAll('.slideshow-container');

// Slideshow function initialization
function slideShowInit() {
  const slides = document.querySelectorAll('.slideshow');

  // Setting index counter for slides
  let i = 0;

  setInterval(_ => {
    slides[i].classList.remove('active');
    i++;
    // Going back to first element
    if (i === slides.length) i = 0;
    slides[i].classList.add('active');
  }, 5000);
}

// // Calling slideshow
// slideShow.forEach(slideShowInit);
