const toggleButton = document.getElementById("navbar-toggle");
const navbarMenu = document.getElementById("navbar-menu");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navbarMenu.classList.toggle("active");

  if (navbarMenu.style.display == "block") {
    navbarMenu.style.display = "none";
  } else {
    navbarMenu.style.display = "block";
  }
});

// Slider JSconst
let heroIndex = 0;
const heroImages = document.querySelectorAll(".hero-image");

function changeHeroImage() {
  heroImages[heroIndex].classList.remove("active");
  heroIndex++;
  if (heroIndex >= heroImages.length) {
    heroIndex = 0;
  }
  heroImages[heroIndex].classList.add("active");
}

setInterval(changeHeroImage, 5000);

console.log("This is the maximum window size.");
function updateWindowSize() {
  console.log("Window width: " + window.innerWidth);
  console.log("Window height: " + window.innerHeight);

  if (window.innerWidth >= 992) {
    // window width is 992 pixels or greater
    navbarMenu.style.display = "flex";
    toggleButton.classList.remove("active");
  } else {
    navbarMenu.style.display = "none";
  }
}

// Add event listener for window resize event
window.addEventListener("resize", updateWindowSize);

// Slider Card
const slider = document.querySelector(".card-slider");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});

// Counter Stats
// Counter animation function
function counterAnimation(element) {
  let endCount = parseInt(element.getAttribute("data-count"));
  let startCount = 1000;
  let duration = 2000; // in milliseconds
  let range = endCount - startCount;
  let currentCount = startCount;
  let increment = endCount > startCount ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let timer = setInterval(function () {
    currentCount += increment;
    element.innerHTML = "₹" + currentCount.toLocaleString();
    if (currentCount == endCount) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Call counter animation function for each count element
let countElements = document.querySelectorAll(".count");
countElements.forEach(function (element) {
  counterAnimation(element);
});

// Chat
const chatbot = document.querySelector(".chatbot");
const chatIcon = document.querySelector(".chat-icon");
const chatWindow = document.querySelector(".chat-window");
const clickSound = document.getElementById("click-sound");

chatIcon.addEventListener("click", () => {
  clickSound.play();
  chatWindow.classList.toggle("show");
});

chatWindow.addEventListener("transitionend", () => {
  if (chatWindow.classList.contains("show")) {
    chatIcon.style.backgroundColor = "#fff";
  } else {
    chatIcon.style.backgroundColor = "#555";
  }
});
