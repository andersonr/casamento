
import { createGiftList } from "./components/GiftList.js";
import { createHeader } from "./components/Header.js";
import { createLayout } from "./components/Layout.js";
import { createCartDrawer } from "./components/CartDrawer.js";

import { createHero } from "./components/Hero.js"; 
import { createHead } from "./components/Head.js";
import { createAgendaSection } from "./components/AgendaSection.js";
import { createCuriosidadesSection } from "./components/CuriosidadesSection.js";
import { createAlbumSection } from "./components/AlbumSection.js";
import { createDoacaoSection } from "./components/DoacaoSection.js"; 
import { initScrollAnimations } from "./utils/scrollAnimations.js";
import { generatePawTrail } from "./utils/decorations.js";
import "./style.css";

const path = window.location.pathname;

let content = "";

// Create a custom header paw trail
const headerPawTrail = `
  <div class="relative w-full overflow-hidden h-24 mt-8">
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 w-full">
      <div class="flex justify-center">
        ${generatePawTrail(100, 'horizontal')}
      </div>
    </div>
  </div>
`;

// Check if we're on the gift list page
const isGiftListPage = path.includes('lista-presentes.html');

if (isGiftListPage) {
  content = `
    ${createHeader(
      "Lista de Presentes",
      "Graças a deus, já conseguimos mobiliar a nossa casinha, mas se você quiser nos presentear, aceitamos presentes em dinheiro para a nossa lua de mel e para ajudar a pagar nossa casa :)",
    )}  
    ${createGiftList()}
    ${createCartDrawer()}
  `;
} else {
  content = `
    ${createHead()}
    ${createHero()}
    ${createAgendaSection()}
    ${createCuriosidadesSection()}
    ${createAlbumSection()}
    ${createDoacaoSection()}
    ${headerPawTrail}      
    ${createHeader(
      "Lista de Presentes",
      "Graças a deus, já conseguimos mobiliar a nossa casinha, mas se você quiser nos presentear, aceitamos presentes em dinheiro para a nossa lua de mel e para ajudar a pagar nossa casa :)",
    )}  
    ${createGiftList()}
    ${createCartDrawer()}
  `;
}

document.querySelector("#app").innerHTML = createLayout(content);

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  
  // Initialize cart counter
  if (window.updateCartCounter) {
    window.updateCartCounter();
  }
});
