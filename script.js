/* Scroll to Top */
const showOnPx = 50;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

document.addEventListener("scroll", () => {
  const scrolledPercentage = (scrollContainer().scrollTop / (scrollContainer().scrollHeight - scrollContainer().clientHeight)) * 100;

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

// backToTopButton.addEventListener("click", goToTop);

var images = [
  "background/website.png",
  "background/2.png",
  "background/3.png",
  "background/4.png",
  "background/5.png",
  "background/6.png",
  "background/7.png",
  "background/8.png",
  "background/9.png",
  "background/10.png",
];
var currentIndex = 0;

function changeBackgroundImageForward() {
  currentIndex = (currentIndex + 1) % images.length;
  document.body.style.backgroundImage = "url('" + images[currentIndex] + "')";
}
function changeBackgroundImageBackward() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.body.style.backgroundImage = "url('" + images[currentIndex] + "')";
}
