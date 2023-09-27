// NAVBAR
const navbarToggle = document.getElementById("navbarToggle");
const navbarMenu = document.getElementById("navbarMenu");

navbarToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
});
// NAVBAR

// HEADER
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prevButton");
    const nextButton = document.querySelector(".nextButton");
    let currentIndex = 0;
    let interval;
  
    function showSlide(index) {
      slides[currentIndex].classList.remove("active");
      currentIndex = index;
      slides[currentIndex].classList.add("active");
    }
  
    function nextSlide() {
      const nextIndex = (currentIndex + 1) % slides.length;
      showSlide(nextIndex);
    }
  
    function prevSlide() {
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(prevIndex);
    }
  
    function startAutoPlay() {
      interval = setInterval(nextSlide, 5000); // Cambia de diapositiva cada 5 segundos
    }
  
    function stopAutoPlay() {
      clearInterval(interval);
    }
  
    // Iniciar la reproducción automática al cargar la página
    startAutoPlay();
  
    // Manejadores de eventos para los botones de control
    nextButton.addEventListener("click", () => {
      nextSlide();
      stopAutoPlay();
      startAutoPlay();
    });
  
    prevButton.addEventListener("click", () => {
      prevSlide();
      stopAutoPlay();
      startAutoPlay();
    });
  });
// HEADER
