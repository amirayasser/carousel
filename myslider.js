const slides = document.querySelectorAll("figure"),
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  slideNo = document.querySelector("span"),
  indicators = document.querySelectorAll(" button");

var currentSlide = 0;

// Function to show the current slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style = i === index ? "display:block; " : "display:none;";
  });
  slideNo.textContent = index + 1;
}

function updateButtonStyles() {
  next.style.cursor =
    currentSlide < slides.length - 1 ? "pointer" : "not-allowed";
  prev.style.cursor = currentSlide > 0 ? "pointer" : "not-allowed";
}

function handleButtonClick(direction) {
  if (
    (direction === "next" && currentSlide < slides.length - 1) ||
    (direction === "prev" && currentSlide > 0)
  ) {
    direction === "next" ? currentSlide++ : currentSlide--;

    slideNo.textContent = currentSlide + 1;

    showSlide(currentSlide);
    updateButtonStyles();
  }
}

next.addEventListener("click", () => handleButtonClick("next"));
prev.addEventListener("click", () => handleButtonClick("prev"));

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentSlide = index;

    showSlide(currentSlide);
  });
});

// Show the initial slide
showSlide(currentSlide); // 0
updateButtonStyles();
