export function createGiftItem(imgSrc, description, value, index, pixCode) {
	return `
     <div class="bg-white shadow-md rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 border-2 border-rosa-claro flex flex-col h-full">
      <img src="${imgSrc}" alt="${description}" class="w-full h-48 object-cover">
      <div class="p-4 flex flex-col flex-grow font-raleway">
        <p class="text-gray-700 text-rosa-claro flex-grow">${description}</p>
        <div class="mt-auto">
          <p class="text-rosa-claro"><b>R$ ${
						value ? value.toFixed(2).toString().replace(".", ",") : "1,00"
					}</b></p>
          <div id="image-container_${index}" class="mt-2 flex flex-col items-center">
          </div>          
          <button id="btn_${index}" name="presentear" class="mt-2 bg-primary text-white py-2 px-4 rounded w-full" onclick="addToCart('${imgSrc}', '${description}', ${value}, ${index}, '${pixCode}')" >❤️ Presentear</button>
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

// Cart functionality
window.cart = [];

window.addToCart = (imgSrc, description, value, index, pixCode) => {
  // Check if item is already in cart
  const existingItemIndex = window.cart.findIndex(item => item.index === index);
  
  if (existingItemIndex === -1) {
    // Add to cart if not already there
    window.cart.push({
      imgSrc,
      description,
      value,
      index,
      pixCode
    });
    
    // Show notification
    showNotification(`${description} adicionado ao carrinho!`);
    
    // Update cart counter and drawer
    updateCartCounter();
    updateCartDrawer();
  } else {
    showNotification("Este presente já está no seu carrinho!");
  }
  
  // Open the cart drawer
  openCartDrawer();
};

window.removeFromCart = (index) => {
  const itemIndex = window.cart.findIndex(item => item.index == index);
  if (itemIndex !== -1) {
    const removedItem = window.cart[itemIndex];
    window.cart.splice(itemIndex, 1);
    showNotification(`${removedItem.description} removido do carrinho!`);
    updateCartCounter();
    updateCartDrawer();
  }
};

window.updateCartCounter = () => {
  const counter = document.getElementById('cart-counter');
  if (counter) {
    counter.textContent = window.cart.length;
    counter.style.display = window.cart.length > 0 ? 'flex' : 'none';
  }
};

window.updateCartDrawer = () => {
  const cartItemsContainer = document.getElementById('cart-items');
  if (!cartItemsContainer) return;
  
  if (window.cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="text-center text-gray-500 py-4">Seu carrinho está vazio</p>';
    document.getElementById('checkout-button').disabled = true;
    return;
  }
  
  let totalValue = 0;
  let cartHTML = '';
  
  window.cart.forEach(item => {
    totalValue += item.value;
    cartHTML += `
      <div class="flex items-center p-2 border-b border-gray-200">
        <img src="${item.imgSrc}" alt="${item.description}" class="w-16 h-16 object-cover rounded">
        <div class="ml-2 flex-grow">
          <p class="text-sm text-rosa-claro">${item.description}</p>
          <p class="text-sm font-bold text-rosa-claro">R$ ${item.value.toFixed(2).replace('.', ',')}</p>
        </div>
        <button onclick="removeFromCart(${item.index})" class="text-red-500 hover:text-red-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    `;
  });
  
  cartHTML += `
    <div class="p-2 border-t border-gray-200 mt-2">
      <p class="text-right font-bold text-rosa-claro">Total: R$ ${totalValue.toFixed(2).replace('.', ',')}</p>
    </div>
  `;
  
  cartItemsContainer.innerHTML = cartHTML;
  document.getElementById('checkout-button').disabled = false;
};

window.openCartDrawer = () => {
  const cartDrawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (cartDrawer && overlay) {
    cartDrawer.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }
};

window.closeCartDrawer = () => {
  const cartDrawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (cartDrawer && overlay) {
    cartDrawer.classList.add('translate-x-full');
    overlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
};

window.checkout = () => {
  if (window.cart.length === 0) {
    showNotification('Adicione presentes ao carrinho primeiro!');
    return;
  }
  
  // Here you would typically handle the checkout process
  // For now, let's just show a success message
  showNotification('Obrigado pelo seu presente! ❤️');
  
  // Clear cart
  window.cart = [];
  updateCartCounter();
  updateCartDrawer();
  closeCartDrawer();
};

window.showNotification = (message) => {
  // Create notification element if it doesn't exist
  let notification = document.getElementById('notification');
  if (!notification) {
    notification = document.createElement('div');
    notification.id = 'notification';
    notification.className = 'fixed bottom-4 right-4 bg-primary text-white p-3 rounded-lg shadow-lg transform transition-transform duration-300 translate-y-20 z-50';
    document.body.appendChild(notification);
  }
  
  // Set message and show notification
  notification.textContent = message;
  notification.classList.remove('translate-y-20');
  
  // Hide after 3 seconds
  setTimeout(() => {
    notification.classList.add('translate-y-20');
  }, 3000);
};
