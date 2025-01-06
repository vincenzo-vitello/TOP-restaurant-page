import "./styles.css";
import { renderHome } from "./pages/home/home.js";
import { renderMenu } from "./pages/menu/menu.js";
import { renderAbout } from "./pages/about/about.js";

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

homeBtn.addEventListener("click", () => renderHome());
menuBtn.addEventListener("click", () => renderMenu());
aboutBtn.addEventListener("click", () => renderAbout());

document.addEventListener("DOMContentLoaded", () => {
  renderHome();
});
