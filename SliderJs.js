let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(direction) {
    // Current active slide se active class hatao
    slides[currentSlide].classList.remove('active');
    
    // Naya index calculate karo
    currentSlide += direction;
    
    // Agar slides khatam ho jayein toh loop karo
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    // Naye index wale slide par active class lagao
    slides[currentSlide].classList.add('active');
}

// Optional: Auto play karne ke liye (har 5 second me khud badlega)
setInterval(() => {
    changeSlide(1);
}, 5000);
