const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const menu = document.querySelector(".menu");

openMenu.addEventListener("click", handleOpenMenu);
closeMenu.addEventListener("click", handleCloseMenu);

function handleOpenMenu() {
  menu.classList.remove("close");
  menu.classList.add("open");
}

function handleCloseMenu() {
  menu.classList.remove("open");
  menu.classList.add("close");
}

const h1 = document.querySelector(".h1");
const h2 = document.querySelector(".h2");
const inner1 = document.querySelector(".inner1");
const inner2 = document.querySelector(".inner2");
const h1Down = document.querySelector(".h1 .down");
const h1Up = document.querySelector(".h1 .up");
const h2Down = document.querySelector(".h2 .down");
const h2Up = document.querySelector(".h2 .up");

h1.addEventListener("click", () => toggleStuff(h1, inner1, h1Down, h1Up));
h2.addEventListener("click", () => toggleStuff(h2, inner2, h2Down, h2Up));

function toggleStuff(h, inner, down, up) {
  if (getComputedStyle(inner, null).display === "block") {
    inner.style.display = "none";
    down.style.display = "block";
    up.style.display = "none";
  } else {
    inner.style.display = "block";
    down.style.display = "none";
    up.style.display = "block";
  }
}
