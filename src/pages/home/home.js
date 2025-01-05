import "./styles.css";
import homeImage from "../../assets/restaurant.jpg";
const contentWrapper = document.getElementById("content");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

function updateNavbar() {
  if (
    menuBtn.classList.contains("active") ||
    aboutBtn.classList.contains("active")
  ) {
    menuBtn.classList.remove("active");
    aboutBtn.classList.remove("active");
  }
}

const homeContent = document.createElement("div");
homeContent.className = "homeContent";
homeContent.innerHTML = `
      <div class="homeText">
        <h2>Where Japanese Tradition Meets Vegan Philosophy</h2>
        <div class="imageContainer">
        <img src=${homeImage} alt="" />
      </div>
        <p>Immerse yourself in a culinary experience that celebrates the elegance of Japanese cuisine with a fully vegan twist. <br>
        At <span>Veegan</span> every dish is a masterpiece, combining authentic flavors, fresh ingredients, and refined presentation.
        We believe in creating food that nourishes both the body and the soul. Our menu showcases the harmony of traditional Japanese techniques and sustainable, plant-based ingredients.
        </p>
      </div>
    `;

export function renderHome() {
  contentWrapper.innerHTML = "";
  updateNavbar();
  homeBtn.classList.add("active");
  contentWrapper.appendChild(homeContent);
}
