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
                
        <div id="payment-info" class="hidden flex flex-col items-center mb-4">
          <img id="qrcode-image" src="" alt="QR Code Pix" class="w-32 h-32 object-contain mb-3">
          <p class="text-sm text-gray-600 mb-3">chave: anderson.rissardi94@gmail.com</p>
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
    
    // Generate QR code dynamically
    generateQRCode(pixCode);
    
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
  
  // Regenerate QR code with the latest pix code
  generateQRCode(pixCode);
  
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

// Function to generate QR code
function generateQRCode(data) {
  // QR Code Generator API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(data)}`;
  
  // Update the QR code image source
  const qrCodeImage = document.getElementById('qrcode-image');
  if (qrCodeImage) {
    qrCodeImage.src = qrCodeUrl;
    qrCodeImage.alt = 'QR Code Pix';
  }
}

// Helper function to generate a pix code based on total value
function generatePixCode(totalValue) {
  let valor = 0;

  if(!isNaN(totalValue) && totalValue > 0){
    valor = parseFloat(totalValue.toFixed(2));
  }
  
  const chave = 'anderson.rissardi94@gmail.com';
  const nome = 'Anderson Rissardi';
  const cidade = 'SAO PAULO';
  
  // Format the amount correctly
  const valorFormatado = valor.toFixed(2);
  
  // Create a random transaction ID (10 characters like in your example)
  const txid = Math.random().toString(36).substring(2, 12);
  
  // Build the PIX code following the EMV standard
  let payload = [
    "00020126", // Payload Format Indicator + Point of Initiation Method
    "51", // PIX GUI
    "0014BR.GOV.BCB.PIX", // PIX key type indicator
    "0129" + chave, // PIX key value with length prefix
    "5204", "0000", // Merchant Category Code
    "5303986", // Currency (BRL)
    "54" + valorFormatado.length.toString().padStart(2, '0') + valorFormatado, // Transaction amount
    "5802BR", // Country code
    "59" + nome.length.toString().padStart(2, '0') + nome, // Recipient name
    "60" + cidade.length.toString().padStart(2, '0') + cidade, // City
    "6214" + "0510" + txid, // Fixed length to match your bank's example (14 = length of "0510" + txid)
    "6304" // CRC16 placeholder
  ];
  
  // Join all parts and calculate CRC16
  let pixString = payload.join("");
  const crc = crc16(pixString);
  
  // Add CRC16 to the end
  return pixString + crc.toString(16).toUpperCase().padStart(4, '0');
}

function crc16(str) {
  let crc = 0xFFFF;
  let polynomial = 0x1021;
  let bytes = new TextEncoder().encode(str);
  for (let byte of bytes) {
      crc ^= byte << 8;
      for (let i = 0; i < 8; i++) {
          crc = (crc & 0x8000) ? (crc << 1) ^ polynomial : crc << 1;
      }
  }
  return crc & 0xFFFF;
}