import "./styles.css";

const contentWrapper = document.getElementById("content");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

function updateNavbar() {
  if (
    aboutBtn.classList.contains("active") ||
    homeBtn.classList.contains("active")
  ) {
    aboutBtn.classList.remove("active");
    homeBtn.classList.remove("active");
  }
}
export function renderMenu() {
  contentWrapper.innerHTML = "";
  updateNavbar();
  menuBtn.classList.add("active");
}
