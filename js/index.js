let nav = document.getElementById("collapse");
let barIcon = document.getElementById("open");
let closeIcon = document.getElementById("close");

barIcon.onclick = () => {
  nav.style.transform = "translateX(0%)";
  document.body.style.overflow = "hidden";
};
closeIcon.onclick = () => {
  nav.style.transform = "translateX(-100%)";
  document.body.style.overflow = "auto";
};

// scroll up
let scrollIcon = document.querySelector("i.fa-solid.fa-arrow-up");
let navSv = document.querySelector("nav");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    scrollIcon.classList.add("show");
  } else {
    scrollIcon.classList.remove("show");
  }
};
scrollIcon.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
