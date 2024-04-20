const skillsObserver = new IntersectionObserver((ele) => {
  ele.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("skills-show");
    } else {
      e.target.classList.remove("skills-show");
    }
  });
});

const skillElements = document.querySelectorAll(".skills-hidden");
skillElements.forEach((ele) => skillsObserver.observe(ele));

const footerObserver = new IntersectionObserver((ele) => {
  ele.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-text-footer");
    } else {
      entry.target.classList.remove("show-text-footer");
    }
  });
});

const textFooter = document.querySelectorAll(".contact");
textFooter.forEach((ele) => footerObserver.observe(ele));

//slider
const slider = document.querySelectorAll(".card");
const prevBtn = document.getElementById("prev-button");
const nextBtn = document.getElementById("next-button");

let currentSlide = 0;

function hideSlider() {
  slider.forEach((item) => item.classList.remove("on"));
}

function showSlider() {
  slider[currentSlide].classList.add("on");
}

//btn slider
nextBtn.addEventListener("click", () => {
  nextSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
});

function nextSlide() {
  hideSlider();
  if (currentSlide === slider.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlider();
}

function prevSlide() {
  hideSlider();
  if (currentSlide === 0) {
    currentSlide = slider.length - 1;
  } else {
    currentSlide--;
  }
  showSlider();
}
