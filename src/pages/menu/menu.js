import "./styles.css";
import sesame from "./assets/sushi-sesame.jpg";
import sushi from "./assets/sushi.jpg";
import yakiUdon from "./assets/yaki-udon.jpg";
import pakchoi from "./assets/pakchoi-noodles.jpg";
import nigiri from "./assets/nigiri.jpg";
import springRolls from "./assets/spring-rolls.jpg";
const contentWrapper = document.getElementById("content");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

const menuContent = document.createElement("div");
menuContent.className = "menuContent";
menuContent.innerHTML = `
  <div class="menuGrid">
  <div class="menuCard">
    <img src=${sushi} alt="Vegan Sushi Rolls"/>
    <h3>Vegan Sushi Rolls</h3>
    <p class="description">Avocado, cucumber, carrot, sushi rice.</p>
    <p class="price">$12.50</p>
  </div>
  <div class="menuCard">
    <img src=${sesame} alt="Vegan Sesame Sushi Rolls"/>
    <h3>Vegan Sesame Sushi Rolls</h3>
    <p class="description">Tofu, sesame seeds, rice, nori seaweed.</p>
    <p class="price">$13.00</p>
  </div>
  <div class="menuCard">
    <img src=${springRolls} alt="Spring Rolls"/>
    <h3>Spring Rolls</h3>
    <p class="description">Fresh vegetables, rice paper, soy sauce.</p>
    <p class="price">$9.50</p>
  </div>
  <div class="menuCard">
    <img src=${pakchoi} alt="Pak Choi Udon"/>
    <h3>Pak Choi Udon</h3>
    <p class="description">Udon noodles, pak choi, soy broth.</p>
    <p class="price">$11.00</p>
  </div>
  <div class="menuCard">
    <img src=${yakiUdon} alt="Vegan Yaki Udon"/>
    <h3>Vegan Yaki Udon</h3>
    <p class="description">Stir-fried udon noodles, vegetables, soy sauce.</p>
    <p class="price">$12.00</p>
  </div>
  <div class="menuCard">
    <img src=${nigiri} alt="Vegan Salmon Nigiri"/>
    <h3>Vegan Salmon Nigiri</h3>
    <p class="description">Rice, vegan salmon, wasabi.</p>
    <p class="price">$10.50</p>
  </div>
</div>
`;

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
  contentWrapper.appendChild(menuContent);
}
