export function createCartDrawer() {
  return `
    <!-- Cart Button -->
    <button id="cart-button" onclick="openCartDrawer()" class="fixed bottom-4 left-4 bg-primary text-white p-3 rounded-full shadow-lg z-40 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      <span id="cart-counter" class="absolute -top-2 -right-2 bg-rosa-claro text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center" style="display: none;">0</span>
    </button>
    
    <!-- Cart Overlay -->
    <div id="cart-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 hidden" onclick="closeCartDrawer()"></div>
    
    <!-- Cart Drawer -->
    <div id="cart-drawer" class="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col">
      <div class="p-4 border-b border-gray-200 flex justify-between items-center bg-primary text-white">
        <h2 class="text-xl font-bold">Seu Carrinho</h2>
        <button onclick="closeCartDrawer()" class="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div id="cart-items" class="flex-grow overflow-y-auto p-2">
        <p class="text-center text-gray-500 py-4">Seu carrinho está vazio</p>
      </div>
      
      <div id="checkout-section" class="p-4 border-t border-gray-200">
        <div id="cart-total" class="mb-4">
          <p class="text-right font-bold text-rosa-claro">Total: R$ 0,00</p>
        </div>
        
        <div id="payment-info" class="hidden flex flex-col items-center mb-4">
          
          <button id="copy-pix-button" onclick="copyCartPixCode()" class="bg-green-500 text-white py-2 px-4 rounded w-full mb-2">
            Copiar pix
          </button>
          <input type="text" id="pix-code-input" class="hidden" value="">
          <p id="pix-copy-status" class="text-green-600 text-sm text-center hidden">Pix copiado!</p>
        </div>
        
        <button id="checkout-button" onclick="handleCheckout()" class="bg-primary text-white py-2 px-4 rounded w-full disabled:opacity-50 disabled:cursor-not-allowed">
          Enviar Presente
        </button>
      </div>
    </div>
  `;
}

// Todo: Fix geração de QRCode
// Inserir a linha de baixo, abixo da linha
// <img id="qrcode-image" src="./images/150.svg" alt="QR Code Pix" class="w-48 h-48 object-contain mb-3">
//

// Add these functions to your GiftItem.js file or create a new cart.js file
window.handleCheckout = () => {
  const paymentInfo = document.getElementById('payment-info');
  const checkoutButton = document.getElementById('checkout-button');
  
  if (window.cart.length === 0) {
    showNotification('Adicione presentes ao carrinho primeiro!');
    return;
  }
  
  if (paymentInfo.classList.contains('hidden')) {
    // Show payment info
    paymentInfo.classList.remove('hidden');
    checkoutButton.textContent = 'Finalizar';
    
    // Generate pix code based on total value
    const totalValue = window.cart.reduce((sum, item) => sum + item.value, 0);
    const pixCode = generatePixCode(totalValue);
    
    // Update pix code input
    document.getElementById('pix-code-input').value = pixCode;
    
    // Update QR code image - you might want to generate this dynamically based on the value
    // For now we're using a static image
    // Todo: Fix geração de QRCode
    // document.getElementById('qrcode-image').src = "./images/150.svg";
    
  } else {
    // Finalize purchase
    showNotification('Obrigado pelo seu presente! ❤️');
    
    // Clear cart
    window.cart = [];
    updateCartCounter();
    updateCartDrawer();
    
    // Reset checkout section
    paymentInfo.classList.add('hidden');
    checkoutButton.textContent = 'Enviar Presente';
    
    // Close drawer after a short delay
    setTimeout(() => {
      closeCartDrawer();
    }, 1500);
  }
};

window.copyCartPixCode = () => {
  const pixCodeInput = document.getElementById('pix-code-input');
  const pixCopyStatus = document.getElementById('pix-copy-status');
  const copyButton = document.getElementById('copy-pix-button');
  
  // Get the current total value from the cart
  const totalValue = window.cart.reduce((sum, item) => sum + item.value, 0);
  
  // Generate the pix code with the current total
  const pixCode = generatePixCode(totalValue);
  
  // Update the input value with the latest pix code
  pixCodeInput.value = pixCode;
  
  navigator.clipboard.writeText(pixCodeInput.value)
    .then(() => {
      // Show success message
      pixCopyStatus.classList.remove('hidden');
      copyButton.textContent = 'Pix copiado!';
      
      // Reset button after 3 seconds
      setTimeout(() => {
        pixCopyStatus.classList.add('hidden');
        copyButton.textContent = 'Copiar pix';
      }, 3000);
    })
    .catch(err => {
      console.error('Erro ao copiar texto: ', err);
      showNotification('Erro ao copiar o código Pix');
    });
};

// Helper function to generate a pix code based on total value
function generatePixCode(totalValue) {
if(isNaN(totalValue) || totalValue <= 0){
  totalValue = 0;
}

  // This is a placeholder - you should replace with your actual pix code generation logic
  // For now, we'll use a static code with the total value embedded
  return `00020126510014BR.GOV.BCB.PIX0129anderson.rissardi94@gmail.com52040000530398654064${totalValue.toFixed(2)}5802BR5917Anderson Rissardi6009SAO PAULO610805409000622405207x6YVQBRBJ45U9Mmwdwh6304A556`;
}

// Make sure to update the updateCartDrawer function to also update the total in the cart
window.updateCartDrawer = () => {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  
  if (!cartItemsContainer || !cartTotal) return;
  
  if (window.cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="text-center text-gray-500 py-4">Seu carrinho está vazio</p>';
    document.getElementById('checkout-button').disabled = true;
    cartTotal.innerHTML = '<p class="text-right font-bold text-rosa-claro">Total: R$ 0,00</p>';
    
    // Hide payment info if visible
    document.getElementById('payment-info').classList.add('hidden');
    document.getElementById('checkout-button').textContent = 'Enviar Presente';
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
  
  cartItemsContainer.innerHTML = cartHTML;
  cartTotal.innerHTML = `<p class="text-right font-bold text-rosa-claro">Total: R$ ${totalValue.toFixed(2).replace('.', ',')}</p>`;
  document.getElementById('checkout-button').disabled = false;
};