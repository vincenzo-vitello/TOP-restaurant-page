import "./styles.css";
import locationImage from "./assets/restaurant.jpg";
import chef from "./assets/chef.jpg";
import foodPic from "./assets/food.jpg";
import udon from "./assets/udon.jpg";
import ramen from "./assets/ramen.jpg";
import pakchoi from "./assets/pakchoi.jpg";
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
      <div class="homeContent">
        <h2>Where Japanese Tradition Meets Vegan Philosophy</h2>
        <div class="imageContainer">
          <img src=${locationImage} alt="" />
          <img src=${chef} alt="" />
          <img src=${foodPic} alt="" />
       </div>
       <div class="textWithImages">
        <div class="text">
          <p>
            Immerse yourself in a culinary experience that celebrates the elegance of Japanese cuisine with a fully vegan twist. <br>
            At <span>Veegan</span> we believe in creating food that nourishes both the body and the soul. Our menu showcases the harmony of traditional Japanese techniques and sustainable, plant-based ingredients.  
            Each bite tells a story of dedication, craftsmanship, and respect for nature. From delicately prepared sushi rolls to hearty ramen bowls, our dishes are designed to tantalize your taste buds while honoring the planet.  
            Join us on a journey of flavor, sustainability, and mindful eating, where every meal is a celebration of life and nature.
          </p>
        </div>
        <div class="miniFoodGallery">
          <img src="${pakchoi}" alt="Food Image 1" />
          <img src="${ramen}" alt="Food Image 2" />
          <img src="${udon}" alt="Food Image 3" />
        </div>
      </div>
      </div>
    `;

export function renderHome() {
  contentWrapper.innerHTML = "";
  updateNavbar();
  homeBtn.classList.add("active");
  contentWrapper.appendChild(homeContent);
}
