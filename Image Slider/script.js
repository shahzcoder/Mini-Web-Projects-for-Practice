const slides = document.querySelectorAll(`.slide`);
const dots = document.querySelectorAll(`.dot`);
const nextBtn = document.querySelector(`.next`);
const prevBtn = document.querySelector(`.prev`);
let currentIndex = 0;

function showslide(index) {

    // Hide all classes.
    slides.forEach(slide => slide.classList.remove(`active`));

    // Remove active class form all dots.
    dots.forEach(dot => dot.classList.remove(`active`));

    // Show the active slide.
    slides[index].classList.add(`active`);

    // Highlight the active dot
    dots[index].classList.add(`active`);

    // Update the current Index.
    currentIndex = index;
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showslide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    showslide(currentIndex);
}

nextBtn.addEventListener(`click`, nextSlide);
prevBtn.addEventListener(`click`, prevSlide);

// Auto Slide every 3 seconds
setInterval(nextSlide, 3000); 

// dot navigation
dots.forEach((dot, idx) => {
    dot.addEventListener(`click`, () => showslide(idx));
});

// keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});



  


