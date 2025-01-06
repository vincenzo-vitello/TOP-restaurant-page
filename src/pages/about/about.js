import "./styles.css";
import foundersImage from "./founders.jpg"; // Aggiungi la src dell'immagine dei fondatori

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

const aboutContent = document.createElement("div");
aboutContent.className = "aboutContent";
aboutContent.innerHTML = `
  <div class="aboutContent">
    <h2>About ビーガン (Veegan.)</h2>
    <div class="foundersContainer">
      <img src="${foundersImage}" alt="Founders of the Restaurant" />
      <div class="foundersText">
        <p>
          At <span>Veegan</span>, we are more than just a restaurant, we are a movement.
          <br> Founded by a group of passionate individuals, our mission is to transform the way people experience Japanese cuisine. 
          <br>We believe in sustainability, mindfulness, and honoring the planet while enjoying the finest flavors.
        </p>
        <p>
          Our founders, who have been at the forefront of plant-based culinary innovation, set out to combine the elegance and tradition of Japanese dishes with the power of vegan ingredients. 
          <br>Their vision is to create a dining experience that not only nourishes the body but also the soul, making every meal an opportunity to connect with nature.
        </p>
        <p>
          Join us in our journey, where every dish is a celebration of life, health, and our deep respect for the environment.
        </p>
      </div>
    </div>
  </div>
`;

export function renderAbout() {
  contentWrapper.innerHTML = "";
  updateNavbar();
  aboutBtn.classList.add("active");
  contentWrapper.appendChild(aboutContent);
}
