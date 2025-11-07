const images = [
  "assets/bb.webp",
  "assets/TheStarryNight-03.webp",
  "assets/WildRoses-01.webp",
  "assets/WildRoses-01.webp",
];

let current = 0;

function changeImage(index) {
  current = index;
  updateSlider();
}

function updateSlider() {
  const main = document.getElementById("mainImage");
  main.style.opacity = "0";

  setTimeout(() => {
    main.src = images[current];
    main.style.opacity = "1";
  }, 300);

  document.querySelectorAll(".thumbs img").forEach((el, i) => {
    el.classList.toggle("active", i === current);
  });
}

setInterval(() => {
  current = (current + 1) % images.length;
  updateSlider();
}, 3000);
