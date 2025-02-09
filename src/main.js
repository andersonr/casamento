import { createGallery } from "./components/Gallery.js";
import { createGiftList } from "./components/GiftList.js";
import { createHeader } from "./components/Header.js";
import { createImageSection } from "./components/ImageSection.js";
import { createLayout } from "./components/Layout.js";
import { createSaveTheDate } from "./components/SaveTheDate.js";
import "./style.css";

const path = window.location.pathname;

let content = "";

if (path.includes("lista-presentes.html")) {
	content = `
    ${createHeader(
			"Lista de Presentes",
			"Graças a deus, já conseguimos mobiliar a nossa casinha, mas se você quiser nos presentear, aceitamos presentes em dinheiro para a nossa lua de mel e para ajudar a pagar nossa casa :)",
		)}
    ${createGiftList()}
  `;
} else {
	content = `     
    ${createImageSection()}
    ${createSaveTheDate()}
    ${createGallery()}    
    ${createHeader(
			"Lista de Presentes",
			"Graças a deus, já conseguimos mobiliar a nossa casinha, mas se você quiser nos presentear, aceitamos presentes em dinheiro para a nossa lua de mel e para ajudar a pagar nossa casa :)",
		)}
    ${createGiftList()}
  `;
}

//${createVideoSection()}
//${createLinkToGiftList()}

document.querySelector("#app").innerHTML = createLayout(content);
