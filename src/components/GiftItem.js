export function createGiftItem(imgSrc, description, value, index, pixCode) {
	return `
     <div class="bg-white shadow-md rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 border-2 border-rosa-claro flex flex-col h-full">
      <img src="${imgSrc}" alt="${description}" class="w-full h-48 object-cover">
      <div class="p-4 flex flex-col flex-grow">
        <p class="text-gray-700 text-rosa-claro flex-grow">${description}</p>
        <div class="mt-auto">
          <p class="text-rosa-claro"><b>R$ ${
						value ? value.toFixed(2).toString().replace(".", ",") : "1,00"
					}</b></p>
          <div id="image-container_${index}" class="mt-2 flex flex-col items-center">
          </div>          
          <button id="btn_${index}" class="mt-2 bg-primary text-white py-2 px-4 rounded w-full" onclick="showImage(${index})" >❤️ Presentear</button>
          <input type="text" class="text-gray-700 flex-grow readonly hidden" id="txt_${index}" value="${
						pixCode ? pixCode : ""
					}" />          
        </div>
      </div>
    </div>
  `;
}

window.showImage = (index) => {
	const imageContainer = document.getElementById(`image-container_${index}`);
	if (!imageContainer.querySelector("img")) {
		const img = document.createElement("img");
		img.src = "./images/150.svg";
		img.alt = "Imagem de presente";
		img.className = "object-cover mt-2";
		imageContainer.appendChild(img);

		const copyButton = document.createElement("button");
		copyButton.id = `btn_pix_${index}`;
		copyButton.textContent = "Copiar pix";
		copyButton.className = "bg-green-500 text-white py-2 px-4 rounded w-full";
		copyButton.onclick = () => copyToClipboard(index);
		imageContainer.appendChild(copyButton);
	}
};

function copyToClipboard(index) {
	const textToCopy = document.getElementById(`txt_${index}`).value;
	navigator.clipboard
		.writeText(textToCopy)
		.then(() => {
			document.getElementById(`btn_pix_${index}`).textContent = "Pix copiado!";
			//alert("Texto copiado para o clipboard!");
		})
		.catch((err) => {
			console.error("Erro ao copiar texto: ", err);
		});
}
