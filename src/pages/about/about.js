import "./styles.css";

const contentWrapper = document.getElementById("content");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

function updateNavbar() {
  if (
    menuBtn.classList.contains("active") ||
    homeBtn.classList.contains("active")
  ) {
    menuBtn.classList.remove("active");
    homeBtn.classList.remove("active");
  }
}
export function renderAbout() {
  contentWrapper.innerHTML = "";
  updateNavbar();
  aboutBtn.classList.add("active");
}
