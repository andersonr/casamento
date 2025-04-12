(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();function k(t,e,o,i,a){return`
     <div class="bg-white shadow-md rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 border-2 border-rosa-claro flex flex-col h-full">
      <img src="${t}" alt="${e}" class="w-full h-48 object-cover">
      <div class="p-4 flex flex-col flex-grow font-raleway">
        <p class="text-gray-700 text-rosa-claro flex-grow">${e}</p>
        <div class="mt-auto">
          <p class="text-rosa-claro"><b>R$ ${o?o.toFixed(2).toString().replace(".",","):"1,00"}</b></p>
          <div id="image-container_${i}" class="mt-2 flex flex-col items-center">
          </div>          
          <button id="btn_${i}" name="presentear" class="mt-2 bg-primary text-white py-2 px-4 rounded w-full" onclick="addToCart('${t}', '${e}', ${o}, ${i}, '${a}')" >❤️ Presentear</button>
          <input type="text" class="text-gray-700 flex-grow readonly hidden" id="txt_${i}" value="${a||""}" />          
        </div>
      </div>
    </div>
  `}window.showImage=t=>{const e=document.getElementById(`image-container_${t}`);if(!e.querySelector("img")){const o=document.createElement("img");o.src="./images/150.svg",o.alt="Imagem de presente",o.className="object-cover mt-2",e.appendChild(o);const i=document.createElement("button");i.id=`btn_pix_${t}`,i.textContent="Copiar pix",i.className="bg-green-500 text-white py-2 px-4 rounded w-full",i.onclick=()=>j(t),e.appendChild(i)}};function j(t){const e=document.getElementById(`txt_${t}`).value;navigator.clipboard.writeText(e).then(()=>{document.getElementById(`btn_pix_${t}`).textContent="Pix copiado!"}).catch(o=>{console.error("Erro ao copiar texto: ",o)})}window.cart=[];window.addToCart=(t,e,o,i,a)=>{window.cart.findIndex(s=>s.index===i)===-1?(window.cart.push({imgSrc:t,description:e,value:o,index:i,pixCode:a}),showNotification(`${e} adicionado ao carrinho!`),updateCartCounter(),updateCartDrawer()):showNotification("Este presente já está no seu carrinho!"),openCartDrawer()};window.removeFromCart=t=>{const e=window.cart.findIndex(o=>o.index==t);if(e!==-1){const o=window.cart[e];window.cart.splice(e,1),showNotification(`${o.description} removido do carrinho!`),updateCartCounter(),updateCartDrawer()}};window.updateCartCounter=()=>{const t=document.getElementById("cart-counter");t&&(t.textContent=window.cart.length,t.style.display=window.cart.length>0?"flex":"none")};window.updateCartDrawer=()=>{const t=document.getElementById("cart-items");if(!t)return;if(window.cart.length===0){t.innerHTML='<p class="text-center text-gray-500 py-4">Seu carrinho está vazio</p>',document.getElementById("checkout-button").disabled=!0;return}let e=0,o="";window.cart.forEach(i=>{e+=i.value,o+=`
      <div class="flex items-center p-2 border-b border-gray-200">
        <img src="${i.imgSrc}" alt="${i.description}" class="w-16 h-16 object-cover rounded">
        <div class="ml-2 flex-grow">
          <p class="text-sm text-rosa-claro">${i.description}</p>
          <p class="text-sm font-bold text-rosa-claro">R$ ${i.value.toFixed(2).replace(".",",")}</p>
        </div>
        <button onclick="removeFromCart(${i.index})" class="text-red-500 hover:text-red-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    `}),o+=`
    <div class="p-2 border-t border-gray-200 mt-2">
      <p class="text-right font-bold text-rosa-claro">Total: R$ ${e.toFixed(2).replace(".",",")}</p>
    </div>
  `,t.innerHTML=o,document.getElementById("checkout-button").disabled=!1};window.openCartDrawer=()=>{const t=document.getElementById("cart-drawer"),e=document.getElementById("cart-overlay");t&&e&&(t.classList.remove("translate-x-full"),e.classList.remove("hidden"),document.body.classList.add("overflow-hidden"))};window.closeCartDrawer=()=>{const t=document.getElementById("cart-drawer"),e=document.getElementById("cart-overlay");t&&e&&(t.classList.add("translate-x-full"),e.classList.add("hidden"),document.body.classList.remove("overflow-hidden"))};window.checkout=()=>{if(window.cart.length===0){showNotification("Adicione presentes ao carrinho primeiro!");return}showNotification("Obrigado pelo seu presente! ❤️"),window.cart=[],updateCartCounter(),updateCartDrawer(),closeCartDrawer()};window.showNotification=t=>{let e=document.getElementById("notification");e||(e=document.createElement("div"),e.id="notification",e.className="fixed bottom-4 right-4 bg-primary text-white p-3 rounded-lg shadow-lg transform transition-transform duration-300 translate-y-20 z-50",document.body.appendChild(e)),e.textContent=t,e.classList.remove("translate-y-20"),setTimeout(()=>{e.classList.add("translate-y-20")},3e3)};function h(){return`
	
    <main class="p-8 bg-amarelo-queimado text-primary text-raleway">
      <div class="grid gap-4" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); max-width: 1200px; margin: 0 auto;">
        ${[{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907606/terapia_jabul0.webp",description:"Terapia para a noiva após os preparativos do casamento",value:150,pixSrc:"./images/150.svg",pixCode:"aaaado00020126510014BR.GOV.BCB.PIX0129anderson.rissardi94@gmail.com5204000053039865406150.005802BR5917Anderson Rissardi6009SAO PAULO610805409000622405207x6YVQBRBJ45U9Mmwdwh6304A556"},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907608/banda-branca-de-neve_opdxwh.webp",description:"Banda no casamento",value:100},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907609/creatina_tspg0m.webp",description:"Creatina para o projeto verão",value:80},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/poli_nly7bk.webp",description:"Aulas de dança pro noivo, ele ta precisando",value:171},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/drinks-noivos_wfhz2p.webp",description:"Drinks para o casal na lua de mel",value:60},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907609/cerveja_jugpxi.webp",description:"Caixinha de cerveja para o noivo",value:40},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/pao_queijo_wtrbl4.webp",description:"Pão de queijo que o noivo adora",value:30},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/netflix_btkkom.webp",description:"1 mês de Netflix pro casal",value:50},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907608/alianca_zysoz8.webp",description:"Parcela das alianças",value:1e3},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907606/uber_sfquxt.webp",description:"Uber até o aeroporto",value:200},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907607/whey_rjmk1v.webp",description:"Wheyzinho do monstro",value:110},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907604/curso_tpm_fq3xmv.webp",description:"Vídeo aula sobre TPM pro noivo não morrer",value:300},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907606/vinho_jc3zv4.webp",description:"Vinhozinho pra noiva",value:100},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907608/aviaozinho_uyzoyr.webp",description:"Aviãozinho do Silvio Santos",value:50},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908307/lavalouca_mfjfbt.jpg",description:"Parcela da lava-louças pro noivo não sofrer",value:400},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907609/contas_afsd7j.webp",description:"Adote uma conta",value:150},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/rolex_yv6aqv.webp",description:"Rolex pro noivo",value:10},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907606/sandalia_wllxso.webp",description:"Um sapatinho pra noiva não machucar o pé",value:300},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907604/manicure_wlmk7b.webp",description:"Manicure pro grande dia",value:180},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907604/lingerie_nbs9iz.webp",description:"Lingerie sensual pra noiva",value:200},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908441/comprinhas_li5row.webp",description:"Umas blusinhas porque a noiva não tem nada pra vestir",value:300},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908501/cueca-furada_k4bspi.jpg",description:"Umas cuecas pro noivo que anda tão necessitado",value:200},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/roupa_noivo_nrxpjj.webp",description:"Parcela da roupa do noivo",value:400},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907609/barbeiro_u2fdvd.webp",description:"Barbeiro do grande dia",value:100},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907604/lua_de_mel_ikoxgm.webp",description:"Parcela da viagem de lua de mel",value:1e3},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/jantar_romantico_k9wkht.webp",description:"Um jantar romântico na lua de mel",value:500},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908122/casino_vkk1bi.jpg",description:"Uma jogadinha no casino",value:120},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908585/sogra_navw3d.jpg",description:"Ajudar no quartinho da sogra",value:700},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908673/buque_n1ofo1.jpg",description:"Jogar o buque na sua direção",value:600},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908776/buffet_xydcmq.jpg",description:"Primeiro lugar na fila do buffet",value:500},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908848/tiktok-31_kx7xio.png",description:"Foto e dancinha pro tiktok com os noivos",value:150},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737909056/fim_orcal1.jpg",description:"Eu não vou embora!! Ajuda na hora extra dos fornecedores",value:80},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737909156/tutubarao_r5crnm.jpg",description:"Mergulho com tubarões - Apenas o noivo",value:250},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737909240/Cocobay-Resort-2_qapoly.jpg",description:"Parcela do hotel da lua de mel",value:1200}].map((e,o)=>k(e.imgSrc,e.description,e.value,o,e.pixCode)).join("")}
      </div>
    </main>
  `}function x(t,e){return`
    <header class="relative flex items-center justify-center h-64 text-primary text-center">
      
      <div>
        <h1 class="text-4xl font-delius font-bold">${t}</h1>
        <p class="mt-4 max-w-xl font-raleway mx-auto">${e}</p>
      </div>
    </header>
  `}function $(t){return`
    <div class="relative min-h-screen">
      <div class="fixed left-0 top-0 w-64 h-full pointer-events-none bg-contain bg-left bg-no-repeat left-branch"></div>
      <div class="fixed right-0 top-0 w-64 h-full pointer-events-none bg-contain bg-right bg-no-repeat right-branch"></div>
      <main class="relative z-10">
        ${t}
      </main>
    </div>
  `}function f(){return`
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
          <div class="qrcode-gift-wrapper relative mb-3 pt-5">
            <div class="gift-ribbon absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-rosa-claro rounded-full flex items-center justify-center">
              
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
                <polyline points="20 12 20 22 4 22 4 12"></polyline>
                <rect x="2" y="7" width="20" height="5"></rect>
                <line x1="12" y1="22" x2="12" y2="7"></line>
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
              </svg>
            </div>
            <div class="gift-frame border-4 border-rosa-claro rounded-lg p-2 bg-white">
              <img id="qrcode-image" src="" alt="QR Code Pix" class="w-32 h-32 object-contain">
            </div>
          </div>
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
    
    <!-- Script para o confetti -->
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"><\/script>
  `}window.handleCheckout=()=>{const t=document.getElementById("payment-info"),e=document.getElementById("checkout-button");if(window.cart.length===0){showNotification("Adicione presentes ao carrinho primeiro!");return}if(t.classList.contains("hidden")){t.classList.remove("hidden"),e.textContent="Finalizar";const o=window.cart.reduce((a,r)=>a+r.value,0),i=C(o);document.getElementById("pix-code-input").value=i,y(i)}else showNotification("Obrigado pelo seu presente! ❤️"),w(),window.cart=[],updateCartCounter(),updateCartDrawer(),t.classList.add("hidden"),e.textContent="Enviar Presente",setTimeout(()=>{closeCartDrawer()},1500)};window.copyCartPixCode=()=>{const t=document.getElementById("pix-code-input"),e=document.getElementById("pix-copy-status"),o=document.getElementById("copy-pix-button"),i=window.cart.reduce((r,s)=>r+s.value,0),a=C(i);t.value=a,y(a),navigator.clipboard.writeText(t.value).then(()=>{e.classList.remove("hidden"),o.textContent="Pix copiado!",w(),setTimeout(()=>{e.classList.add("hidden"),o.textContent="Copiar pix"},3e3)}).catch(r=>{console.error("Erro ao copiar texto: ",r),showNotification("Erro ao copiar o código Pix")})};function w(){if(typeof window.confetti>"u"){console.error("A biblioteca confetti não foi carregada");const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js",t.onload=function(){console.log("Biblioteca confetti carregada com sucesso"),setTimeout(b,100)},document.head.appendChild(t);return}b()}function b(){const e=Date.now()+3e3,o={startVelocity:30,spread:360,ticks:60,zIndex:9999},i=["#FFC0CB","#FFD700","#FF69B4","#FFFFFF","#F08080"];function a(s,d){return Math.random()*(d-s)+s}window.confetti({particleCount:150,spread:70,origin:{y:.6,x:.5},colors:i,zIndex:9999});const r=setInterval(function(){const s=e-Date.now();if(s<=0)return clearInterval(r);const d=50*(s/3e3);window.confetti({...o,particleCount:d,origin:{x:a(.1,.3),y:Math.random()-.2},colors:i}),window.confetti({...o,particleCount:d,origin:{x:a(.7,.9),y:Math.random()-.2},colors:i})},250)}function y(t){const e=`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(t)}`,o=document.getElementById("qrcode-image");o&&(o.src=e,o.alt="QR Code Pix")}function C(t){let e=0;!isNaN(t)&&t>0&&(e=parseFloat(t.toFixed(2)));const o="anderson.rissardi94@gmail.com",i="Anderson Rissardi",a="SAO PAULO",r=e.toFixed(2),s=Math.random().toString(36).substring(2,12);let l=["00020126","51","0014BR.GOV.BCB.PIX","0129"+o,"5204","0000","5303986","54"+r.length.toString().padStart(2,"0")+r,"5802BR","59"+i.length.toString().padStart(2,"0")+i,"60"+a.length.toString().padStart(2,"0")+a,"62140510"+s,"6304"].join("");const n=_(l);return l+n.toString(16).toUpperCase().padStart(4,"0")}function _(t){let e=65535,o=4129,i=new TextEncoder().encode(t);for(let a of i){e^=a<<8;for(let r=0;r<8;r++)e=e&32768?e<<1^o:e<<1}return e&65535}function p(t,e){const o='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" class="fill-verde-musgo"><path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/></svg>';let i="";for(let a=0;a<t;a++){let r="";e==="right"?r=`position: absolute; transform: rotate(${45+a%2*45}deg); top: ${a*60}px; right: ${a%2*20}px;`:e==="left"?r=`position: absolute; transform: rotate(${-45-a%2*45}deg); top: ${200+a*60}px; left: ${a%2*20}px;`:r=`position: absolute; transform: rotate(${a%2*45}deg); left: ${a*50}px; bottom: ${a%2*15}px;`,i+=`<div style="${r}">${o}</div>`}return i}function u(){return`
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Right side zigzag -->
      <div class="absolute right-4 top-16 opacity-20">
        ${p(6,"right")}
      </div>
      <!-- Left side zigzag -->
      <div class="absolute left-4 top-32 opacity-20">
        ${p(6,"left")}
      </div>
      <!-- Bottom zigzag -->
      <div class="absolute bottom-8 left-12 opacity-20">
        ${p(9,"horizontal")}
      </div>
    </div>
  `}function B(){return`
    <section id="hero-section" class="hero-section w-full h-screen">
      <div class="flex flex-col md:flex-row w-full h-full">
        <div class="relative w-full md:w-[65%] h-full">
          <div class="w-full h-full bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/dabhe8ggx/image/upload/v1744468024/PR%C3%89_WEDDING-69_udb2wc.jpg')"></div>
          
        </div>
        <div class="w-full md:w-[35%] flex items-center justify-center p-8 h-full relative" style="background-color: rgba(252, 207, 152, 0.7);">
          ${u()}
          <div class="text-center relative z-10">
            <h3 class="font-delius text-primary text-4xl md:text-5xl lg:text-6xl mb-3 font-bold tracking-wide">Bruna </br> &  </br>Anderson</h3>
            <p class="text-l font-raleway text-primary mb-5 italic">Estamos contando os segundos para viver esse dia mágico com você!</p>
            <div class="w-16 h-px bg-verde-musgo mx-auto mb-5"></div>
            <div class="text-2xl font-delius mb-4 text-primary tracking-wider">14 ● Junho ● 2025</div>
            <div class="w-16 h-px bg-verde-musgo mx-auto mb-5"></div>
            <div class="text-xl font-raleway text-primary">
              Cerimônia e celebração do nosso casamento<br>
              <span class="font-raleway text-l mt-2 block">Locomotiva Eventos</span>
              <a href="https://www.google.com/maps/place/Locomotiva+Eventos/@-26.8898304,-49.0027926,17z/data=!3m1!4b1!4m6!3m5!1s0x94df23a9fced8b2f:0x746e1b6bd669c6c4!8m2!3d-26.8898304!4d-49.0027926!16s%2Fg%2F11b6hs9xwm?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" target="_blank" class="text-sm mt-2 block hover:underline text-primary">R. Vidal Flávio Dias, 1122 - Belchior Baixo, Gaspar - SC, 89114-442</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function E(){return`
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
      <meta http-equiv="Pragma" content="no-cache">
      <meta http-equiv="Expires" content="0">
      <title>Anderson & Bruna - Casamento</title>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
      <link href="./styles/output.css" rel="stylesheet">
    </head>
  `}function I(){return`
    <section id="agenda-section" class="agenda-section w-full h-screen">
      <div class="flex flex-col md:flex-row w-full h-full">
        <div class="relative w-full md:w-[65%] h-full">
          <div class="w-full h-full bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/dabhe8ggx/image/upload/v1744467895/PR%C3%89_WEDDING-39_fgrg0o.jpg')"></div>
          
        </div>
        <div class="w-full md:w-[35%] flex items-center justify-center p-8 h-full relative" style="background-color: rgba(252, 207, 152, 0.7);">
          ${u()}
          <div class="text-center font-raleway relative z-10">
            <h2 class="text-2xl font-delius font-bold mb-3 text-primary tracking-wider">Programação</h2>
            <p class="text-l font-raleway mb-3 italic">O que esperar do nosso grande dia</p>
            <div class="w-12 h-px bg-verde-musgo mx-auto mb-3"></div>
            <div class="space-y-5 max-h-[60vh] overflow-y-auto pr-2">
              <div class="agenda-item-static">
                <div class="text-lg font-bold text-primary">Cerimônia às 15h30</div>
                <div class="text-base text-verde-musgo">Vai ser ao ar livre, com direito a gramado, céu azul (se São Pedro colaborar) e muita emoção!</div>
              </div>             
                             
              <div class="agenda-item-static">
                <div class="text-lg font-bold text-primary">Jantar</div>
                <div class="text-base text-verde-musgo">Vai ter uma costela fogo de chão de encher os olhos e o prato 😋🍖</div>
              </div>
              
              <div class="agenda-item-static">
                <div class="text-lg font-bold text-primary">Brincadeiras dos Noivos</div>
                <div class="text-base text-verde-musgo">Vai rolar a clássica jagada do buquê e o corte da gravata - então, separe umas moedinhas e venha entrar na brincadeira</div>
              </div>
              
              <div class="agenda-item-static">
                <div class="text-lg font-bold text-primary">Festa com a Banda Society</div>
                <div class="text-base text-verde-musgo">
                  Se prepara que tem primeira dança com coreografia e tudo!! 💃🕺 <br/>
                  Spoiler: a gente ensaiou direitinho (ou quase isso...)
                </div>
              </div>
              
              <div class="agenda-item-static">
                <div class="text-lg font-bold text-primary">Hora dos doces</div>
                <div class="text-base text-verde-musgo">Sim, tem bolo 🍰 Sim, tem docinhos 🍬 e sim, você vai querer repetir!<br/> E tá tudo bem!!</div>
              </div>

              <div class="agenda-item-static">
                <div class="text-lg font-bold text-primary">Fim de festa</div>
                <div class="text-base text-verde-musgo">Vai até altas horas! Mas sem stress: a partir das 23h, vai ter transfer levando todo mundo com segurança até o centro (TipTim). Aproveita sem moderação!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function q(){return`
    <section id="curiosidades-section" class="curiosidades-section w-full h-screen">
      <div class="flex flex-col md:flex-row w-full h-full">
        <div class="relative w-full md:w-[65%] h-full">
          <div class="w-full h-full bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/dabhe8ggx/image/upload/v1744467893/PR%C3%89_WEDDING-27_uu4gmn.jpg')"></div>
        </div>
        <div class="w-full md:w-[35%] flex items-center justify-center p-8 h-full relative" style="background-color: rgba(252, 207, 152, 0.7);">
          ${u()}
          <div class="text-center font-raleway relative z-10">
            <h2 class="text-2xl font-delius font-bold mb-5 text-primary tracking-wider">Nossa História</h2>
            <div class="w-12 h-px bg-verde-musgo mx-auto my-2"></div>

            <div class="space-y-6">
              <div class="curiosidade-item">
                <div class="text-lg font-bold text-primary">Quem deu o primeiro passo?</div>
                <div class="text-base text-verde-musgo">O Anderson, que fingiu precisar de "mais sessões" de fisioterapia só para ver a recepcionista de sorriso encantador. <br/> Estratégia digna de comédia romântica 🤣</div>
              </div>
              
              <div class="curiosidade-item">
                <div class="text-lg font-bold text-primary">Quem é o mais bagunceiro?</div>
                <div class="text-base text-verde-musgo">O Anderson jura que é a Bruna, a Bruna tem certeza que é o Anderson. Enquanto isso, a Mel🐕 e o Floquinho🐶 observam tudo e pensam: "a gente tenta acompanhar, mas é difícil competir com esses dois!"</div>
              </div>              
              
              <div class="curiosidade-item">
                <div class="text-lg font-bold text-primary">Quem cozinha melhor?</div>
                <div class="text-base text-verde-musgo">A Bruna é a chef da casa - cozinha com amor e talento.<br/>O Anderson? Ele domina a arte do churrasco e é mestre em pedidos estratégicos no ifood (o verdadeiro salvador nos momentos de fome súbita)</div>
              </div>

              <div class="curiosidade-item">
                <div class="text-lg font-bold text-primary">Qual a viagem mais marcante que fizeram?</div>
                <div class="text-base text-verde-musgo">O Anderson acha que é Maragogi e suas lindas praias e pra Bruna, nada supera a arquitetura charmosa, os parques e, claro, o doce de leite de Buenos Aires. (E sim, já estamos aceitando sugestões pro próximo destino!)</div>
              </div>              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function z(){return`
    <section id="album-section" class="album-section w-full h-screen">
      <div class="flex flex-col md:flex-row w-full h-full">
        <div class="relative w-full md:w-[65%] h-full">
          <div class="w-full h-full bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/dabhe8ggx/image/upload/v1744467843/PR%C3%89_WEDDING-116_sxtpkc.jpg')"></div>
        </div>
        <div class="w-full md:w-[35%] flex items-center justify-center p-8 h-full relative" style="background-color: rgba(252, 207, 152, 0.7);">
          ${u()}
          <div class="text-center font-raleway relative z-10">
            <h2 class="text-2xl font-delius font-bold mb-5 text-primary tracking-wider">WedShoots</h2>
            <div class="w-12 h-px bg-verde-musgo mx-auto my-2"></div>
            <div class="space-y-6">
              <div class="album-item">
                <div class="text-xl font-bold text-primary">Como funciona?</div>
                
                <div class="text-lg text-verde-musgo">
                  Queremos ver o nosso dia pelos olhos de vocês!<br/>
                  Com o app WedShoots, todos os convidados podem compartilhar fotos do casamento num único lugar. Assim, a gente guarda não só memórias, mas também aqueles cliques espontâneos e maravilhoso que só vocês conseguem registrar!
                </div>
              </div>
              
              <div class="album-item">
                <div class="text-xl font-bold text-primary">Como baixar</div>
                <div class="text-lg text-verde-musgo">É grátis! <br/> 
                É só procurar por "WedShoots" na App Store e Google Play ou <a href="https://play.google.com/store/search?q=wedshoots&c=apps&hl=pt_BR" target="_blank" class="text-primary hover:text-rosa-forte underline">clicar aqui</a></div>
              </div>
              
              <div class="album-item">
                <div class="text-xl font-bold text-primary">Código do nosso casamento</div>
                <div class="text-lg text-verde-musgo font-bold">BR00c7ea6b</div>
                <div class="flex justify-center mt-4">
                    <img src="https://res.cloudinary.com/dabhe8ggx/image/upload/v1742758137/qrcode_wedshoots_ekxeca.png" alt="QR Code WedShoots" class="w-32 h-32">
                </div>
              </div>              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function P(){return`
    <section id="doacao-section" class="doacao-section w-full h-screen">
      <div class="flex flex-col md:flex-row w-full h-full">
        <div class="relative w-full md:w-[65%] h-full">
          <div class="w-full h-full bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/dabhe8ggx/image/upload/v1744467881/PR%C3%89_WEDDING-200_jb4fbk.jpg')"></div>
        </div>
        <div class="w-full md:w-[35%] flex items-center justify-center p-8 h-full relative" style="background-color: rgba(252, 207, 152, 0.7);">
          ${u()}
          <div class="text-center font-raleway relative z-10">
            <h2 class="text-2xl font-delius font-bold mb-5 text-primary tracking-wider">Doações</h2>
            <p class="text-lg text-verde-musgo mb-6">
              Acreditamos que o amor se multiplica e pode ir muito além da nossa festa!
              <br/>
              Que tal aproveitar esse momento e fazer uma doação para uma causa que toca nosso coração?
            </p>
            <div class="space-y-8">
              <div class="doacao-item">
                <div class="text-xl font-bold text-primary">Abrigo anjos de 4 patas</div>
                <div class="w-12 h-px bg-verde-musgo mx-auto my-2"></div>
                <div class="text-lg text-verde-musgo">Ajude animais abandonados a encontrarem carinho, cuidado e um novo lar</div>
                <a href="https://www.instagram.com/anjosde4paatas?igsh=bWFyODU5eWhjc2Yx" target="_blank" class="inline-block mt-2 text-primary hover:underline">Saiba mais</a>
              </div>
              
              <div class="doacao-item">
                <div class="text-xl font-bold text-primary">Edma e seus cachorros</div>
                <div class="w-12 h-px bg-verde-musgo mx-auto my-2"></div>
                <div class="text-lg text-verde-musgo">Ajude animais abandonados a encontrarem carinho, cuidado e um novo lar</div>
                <a href="https://www.instagram.com/edma_eseuscachorros?igsh=c2Iya2lkeG5udWh0" target="_blank" class="inline-block mt-2 text-primary hover:underline">Saiba mais</a>
              </div>
              
              <div class="doacao-item">
                <div class="text-xl font-bold text-primary">Casa de repouso menino Jesus</div>
                <div class="w-12 h-px bg-verde-musgo mx-auto my-2"></div>
                <div class="text-lg text-verde-musgo">Cuidados, companhia e dignidade para idosos que não têm mais família por perto</div>
                <a href="https://www.instagram.com/crmeninojesus/" target="_blank" class="inline-block mt-2 text-primary hover:underline">Saiba mais</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function D(){function t(){let d=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${d}px`)}t(),window.addEventListener("resize",t);const e=document.querySelectorAll("section"),o=document.getElementById("hero-section"),i=document.getElementById("agenda-section"),a=document.getElementById("curiosidades-section"),r=document.getElementById("album-section"),s=document.getElementById("doacao-section");i&&(i.style.opacity="0.0"),a&&(a.style.opacity="0.2"),r&&(r.style.opacity="0.2"),s&&(s.style.opacity="0.2"),window.addEventListener("scroll",function(){const d=window.scrollY,l=window.innerHeight;if(o){const n=o.querySelector(".bg-cover");n.style.transform=`translateY(${d*.2}px)`;const c=o.querySelector(".absolute");c.style.opacity=1-d/800}[i,a,r,s].forEach((n,c)=>{if(n){const m=n.getBoundingClientRect().top,g=1-Math.max(0,Math.min(1,m/(l*.8)));n.style.opacity=Math.max(.2,g).toString();const S=Math.max(0,m*.05);n.style.transform=`translateY(${S}px)`}}),e.forEach(n=>{if(n.id!=="hero-section"&&n.id!=="agenda-section"&&n.id!=="curiosidades-section"&&n.id!=="album-section"&&n.id!=="doacao-section"){const c=n.getBoundingClientRect().top,m=n.offsetHeight;if(c<l-50){const g=1-Math.max(0,Math.min(1,c*-1/m));n.style.opacity=Math.min(1,g+.4),n.style.transform=`translateY(${Math.max(0,c*.05)}px)`}}})})}const M=window.location.pathname;let v="";const F=`
  <div class="relative w-full overflow-hidden h-24 mt-8">
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 w-full">
      <div class="flex justify-center">
        ${p(100,"horizontal")}
      </div>
    </div>
  </div>
`,L=M.includes("lista-presentes.html");L?v=`
    ${x("Lista de Presentes","Graças a deus, já conseguimos mobiliar a nossa casinha, mas se você quiser nos presentear, aceitamos presentes em dinheiro para a nossa lua de mel e para ajudar a pagar nossa casa :)")}  
    ${h()}
    ${f()}
  `:v=`
    ${E()}
    ${B()}
    ${I()}
    ${q()}
    ${z()}
    ${P()}
    ${F}      
    ${x("Lista de Presentes","Se você quiser nos presentear, ficaremos super felizes! Aceitamos contribuições para nossa lua de mel dos sonhos e também para ajudar a tornar nosso lar ainda mais especial. 🏡")}  
    ${h()}
    ${f()}
  `;document.querySelector("#app").innerHTML=$(v);document.addEventListener("DOMContentLoaded",()=>{D(),window.updateCartCounter&&window.updateCartCounter()});
