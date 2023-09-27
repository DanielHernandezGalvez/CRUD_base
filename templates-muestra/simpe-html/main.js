// NAVBAR
const navbarToggle = document.getElementById("navbarToggle");
const navbarMenu = document.getElementById("navbarMenu");

navbarToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
});
// NAVBAR

// HEADER
// Obtiene el elemento del carousel
const carousel = document.querySelector(".carousel");

// Obtiene el índice de la diapositiva activa
let currentIndex = 0;

// Muestra la diapositiva especificada
function showSlide(index) {
  carousel.querySelectorAll(".slide").forEach((slide) => {
    slide.classList.remove("active");
  });

  carousel.querySelectorAll(".slide")[index].classList.add("active");

  currentIndex = index;
}

// Muestra la diapositiva siguiente
function nextSlide() {
  showSlide((currentIndex + 1) % carousel.querySelectorAll(".slide").length);
}

// Muestra la diapositiva anterior
function prevSlide() {
  showSlide((currentIndex - 1 + carousel.querySelectorAll(".slide").length) % carousel.querySelectorAll(".slide").length);
}

// Muestra la diapositiva activa al cargar la página
showSlide(currentIndex);

// Agrega eventos `click` a los botones de control
const prevButton = document.querySelector(".prevButton");
const nextButton = document.querySelector(".nextButton");
console.log(prevButton.disabled); // Debe devolver false
console.log(nextButton.disabled); // Debe devolver false
prevButton.disabled = false;
nextButton.disabled = false;

prevButton.addEventListener("click", () => {
  // Verifica si el botón está habilitado
  if (prevButton.disabled === false) {
    prevSlide();
  }
});

nextButton.addEventListener("click", () => {
  // Verifica si el botón está habilitado
  if (nextButton.disabled === false) {
    nextSlide();
  }
});



// HEADER
