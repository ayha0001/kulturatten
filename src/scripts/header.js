const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

function setBurgerHeight() {
  const logoHeight = logo.clientHeight;
  burger.style.height = `${logoHeight}px`;
}

window.addEventListener("load", setBurgerHeight);
window.addEventListener("resize", setBurgerHeight);
