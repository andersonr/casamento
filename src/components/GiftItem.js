export function createGiftItem(imgSrc, description, value) {
	return `
     <div class="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      <img src="${imgSrc}" alt="${description}" class="w-full h-48 object-cover">
      <div class="p-4 flex flex-col flex-grow">
        <p class="text-gray-700 flex-grow">${description}</p>
        <div class="mt-auto">
          <p class="text-gray-1000"><b>R$ ${
						value ? value.toFixed(2).toString().replace(".", ",") : "1,00"
					}</b></p>
          <button class="mt-2 bg-blue-500 text-white py-2 px-4 rounded w-full">Comprar</button>
        </div>
      </div>
    </div>
  `;
}
