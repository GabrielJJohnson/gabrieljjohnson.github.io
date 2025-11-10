document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  function hideSlides() {
    slides.forEach(slide => (slide.style.display = "none"));
  }
  function showSlide(n) {
    if (slides.length === 0) return;
    hideSlides();
    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].style.display = "block";
  }
  function nextSlide() {
    showSlide(slideIndex + 1);
  }
  function prevSlide() {
    showSlide(slideIndex - 1);
  }
  if (slides.length > 0) {
    showSlide(slideIndex);
    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);
  }
});