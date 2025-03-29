(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}})();function y(t,e,o,i,a){return`
     <div class="bg-white shadow-md rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 border-2 border-rosa-claro flex flex-col h-full">
      <img src="${t}" alt="${e}" class="w-full h-48 object-cover">
      <div class="p-4 flex flex-col flex-grow">
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
  `}window.showImage=t=>{const e=document.getElementById(`image-container_${t}`);if(!e.querySelector("img")){const o=document.createElement("img");o.src="./images/150.svg",o.alt="Imagem de presente",o.className="object-cover mt-2",e.appendChild(o);const i=document.createElement("button");i.id=`btn_pix_${t}`,i.textContent="Copiar pix",i.className="bg-green-500 text-white py-2 px-4 rounded w-full",i.onclick=()=>C(t),e.appendChild(i)}};function C(t){const e=document.getElementById(`txt_${t}`).value;navigator.clipboard.writeText(e).then(()=>{document.getElementById(`btn_pix_${t}`).textContent="Pix copiado!"}).catch(o=>{console.error("Erro ao copiar texto: ",o)})}window.cart=[];window.addToCart=(t,e,o,i,a)=>{window.cart.findIndex(n=>n.index===i)===-1?(window.cart.push({imgSrc:t,description:e,value:o,index:i,pixCode:a}),showNotification(`${e} adicionado ao carrinho!`),updateCartCounter(),updateCartDrawer()):showNotification("Este presente já está no seu carrinho!"),openCartDrawer()};window.removeFromCart=t=>{const e=window.cart.findIndex(o=>o.index==t);if(e!==-1){const o=window.cart[e];window.cart.splice(e,1),showNotification(`${o.description} removido do carrinho!`),updateCartCounter(),updateCartDrawer()}};window.updateCartCounter=()=>{const t=document.getElementById("cart-counter");t&&(t.textContent=window.cart.length,t.style.display=window.cart.length>0?"flex":"none")};window.updateCartDrawer=()=>{const t=document.getElementById("cart-items");if(!t)return;if(window.cart.length===0){t.innerHTML='<p class="text-center text-gray-500 py-4">Seu carrinho está vazio</p>',document.getElementById("checkout-button").disabled=!0;return}let e=0,o="";window.cart.forEach(i=>{e+=i.value,o+=`
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
  `,t.innerHTML=o,document.getElementById("checkout-button").disabled=!1};window.openCartDrawer=()=>{const t=document.getElementById("cart-drawer"),e=document.getElementById("cart-overlay");t&&e&&(t.classList.remove("translate-x-full"),e.classList.remove("hidden"),document.body.classList.add("overflow-hidden"))};window.closeCartDrawer=()=>{const t=document.getElementById("cart-drawer"),e=document.getElementById("cart-overlay");t&&e&&(t.classList.add("translate-x-full"),e.classList.add("hidden"),document.body.classList.remove("overflow-hidden"))};window.checkout=()=>{if(window.cart.length===0){showNotification("Adicione presentes ao carrinho primeiro!");return}showNotification("Obrigado pelo seu presente! ❤️"),window.cart=[],updateCartCounter(),updateCartDrawer(),closeCartDrawer()};window.showNotification=t=>{let e=document.getElementById("notification");e||(e=document.createElement("div"),e.id="notification",e.className="fixed bottom-4 right-4 bg-primary text-white p-3 rounded-lg shadow-lg transform transition-transform duration-300 translate-y-20 z-50",document.body.appendChild(e)),e.textContent=t,e.classList.remove("translate-y-20"),setTimeout(()=>{e.classList.add("translate-y-20")},3e3)};function x(){return`
	
    <main class="p-8 bg-amarelo-queimado text-primary">
      <div class="grid gap-4" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); max-width: 1200px; margin: 0 auto;">
        ${[{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907606/terapia_jabul0.webp",description:"Terapia para a noiva após os preparativos do casamento",value:150,pixSrc:"./images/150.svg",pixCode:"aaaado00020126510014BR.GOV.BCB.PIX0129anderson.rissardi94@gmail.com5204000053039865406150.005802BR5917Anderson Rissardi6009SAO PAULO610805409000622405207x6YVQBRBJ45U9Mmwdwh6304A556"},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907608/banda-branca-de-neve_opdxwh.webp",description:"Banda para o casamento",value:100},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907609/creatina_tspg0m.webp",description:"Creatina para o projeto verão",value:80},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/poli_nly7bk.webp",description:"Aulas de dança pro noivo, ele ta precisando",value:171},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/drinks-noivos_wfhz2p.webp",description:"Drinks para o casal na lua de mel",value:60},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907609/cerveja_jugpxi.webp",description:"Caixinha de cerveja para o noivo",value:40},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/pao_queijo_wtrbl4.webp",description:"Pão de queijo que o noivo adora",value:30},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/netflix_btkkom.webp",description:"1 mês de Netflix pro casal",value:50},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907608/alianca_zysoz8.webp",description:"Parcela das alianças",value:1e3},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907606/uber_sfquxt.webp",description:"Uber até o aeroporto",value:120},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907607/whey_rjmk1v.webp",description:"Wheyzinho do monstro",value:110},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907604/curso_tpm_fq3xmv.webp",description:"Vídeo aula sobre TPM pro noivo não morrer",value:150},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907606/vinho_jc3zv4.webp",description:"Vinhozinho pra noiva",value:100},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907608/aviaozinho_uyzoyr.webp",description:"Aviãozinho do Silvio Santos",value:50},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908307/lavalouca_mfjfbt.jpg",description:"Parcela da lava-louças pro noivo não sofrer",value:150},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907609/contas_afsd7j.webp",description:"Adote uma conta",value:150},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/rolex_yv6aqv.webp",description:"Rolex pro noivo",value:10},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907606/sandalia_wllxso.webp",description:"Um sapatinho pra noiva não machucar o pé",value:300},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907604/manicure_wlmk7b.webp",description:"Manicure pro grande dia",value:180},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907604/lingerie_nbs9iz.webp",description:"Lingerie sensual pra noiva",value:200},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908441/comprinhas_li5row.webp",description:"Umas blusinhas que a noiva não tem nada pra vestir",value:300},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908501/cueca-furada_k4bspi.jpg",description:"Umas cuecas pro noivo que anda tão necessitado",value:200},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/roupa_noivo_nrxpjj.webp",description:"Parcela da roupa do noivo",value:300},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907609/barbeiro_u2fdvd.webp",description:"Barbeiro do grande dia",value:100},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907604/lua_de_mel_ikoxgm.webp",description:"Parcela da viagem de lua de mel",value:1e3},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/jantar_romantico_k9wkht.webp",description:"Um jantar romântico na lua de mel",value:250},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908122/casino_vkk1bi.jpg",description:"Uma jogadinha no casino",value:120},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908585/sogra_navw3d.jpg",description:"Ajudar no quartinho da sogra",value:550},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908673/buque_n1ofo1.jpg",description:"Jogar o buque na sua direção",value:200},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908776/buffet_xydcmq.jpg",description:"Primeiro lugar na fila do buffet",value:500},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908848/tiktok-31_kx7xio.png",description:"Foto e dancinha pro tiktok com os noivos",value:150},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737909056/fim_orcal1.jpg",description:"Eu não vou embora!! Ajuda na hora extra dos fornecedores",value:80},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737909156/tutubarao_r5crnm.jpg",description:"Mergulho com tubarões - Apenas o noivo",value:250},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737909240/Cocobay-Resort-2_qapoly.jpg",description:"Parcela do hotel da lua de mel",value:300}].map((e,o)=>y(e.imgSrc,e.description,e.value,o,e.pixCode)).join("")}
      </div>
    </main>
  `}function h(t,e){return`
    <header class="relative flex items-center justify-center h-64 text-primary text-center">
      
      <div>
        <h1 class="text-4xl font-dancing font-bold">${t}</h1>
        <p class="mt-4 max-w-xl mx-auto">${e}</p>
      </div>
    </header>
  `}function k(t){return`
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
  `}window.handleCheckout=()=>{const t=document.getElementById("payment-info"),e=document.getElementById("checkout-button");if(window.cart.length===0){showNotification("Adicione presentes ao carrinho primeiro!");return}if(t.classList.contains("hidden")){t.classList.remove("hidden"),e.textContent="Finalizar";const o=window.cart.reduce((a,s)=>a+s.value,0),i=b(o);document.getElementById("pix-code-input").value=i}else showNotification("Obrigado pelo seu presente! ❤️"),window.cart=[],updateCartCounter(),updateCartDrawer(),t.classList.add("hidden"),e.textContent="Enviar Presente",setTimeout(()=>{closeCartDrawer()},1500)};window.copyCartPixCode=()=>{const t=document.getElementById("pix-code-input"),e=document.getElementById("pix-copy-status"),o=document.getElementById("copy-pix-button"),i=window.cart.reduce((s,n)=>s+n.value,0),a=b(i);t.value=a,navigator.clipboard.writeText(t.value).then(()=>{e.classList.remove("hidden"),o.textContent="Pix copiado!",setTimeout(()=>{e.classList.add("hidden"),o.textContent="Copiar pix"},3e3)}).catch(s=>{console.error("Erro ao copiar texto: ",s),showNotification("Erro ao copiar o código Pix")})};function b(t){return(isNaN(t)||t<=0)&&(t=0),`00020126510014BR.GOV.BCB.PIX0129anderson.rissardi94@gmail.com52040000530398654064${t.toFixed(2)}5802BR5917Anderson Rissardi6009SAO PAULO610805409000622405207x6YVQBRBJ45U9Mmwdwh6304A556`}window.updateCartDrawer=()=>{const t=document.getElementById("cart-items"),e=document.getElementById("cart-total");if(!t||!e)return;if(window.cart.length===0){t.innerHTML='<p class="text-center text-gray-500 py-4">Seu carrinho está vazio</p>',document.getElementById("checkout-button").disabled=!0,e.innerHTML='<p class="text-right font-bold text-rosa-claro">Total: R$ 0,00</p>',document.getElementById("payment-info").classList.add("hidden"),document.getElementById("checkout-button").textContent="Enviar Presente";return}let o=0,i="";window.cart.forEach(a=>{o+=a.value,i+=`
      <div class="flex items-center p-2 border-b border-gray-200">
        <img src="${a.imgSrc}" alt="${a.description}" class="w-16 h-16 object-cover rounded">
        <div class="ml-2 flex-grow">
          <p class="text-sm text-rosa-claro">${a.description}</p>
          <p class="text-sm font-bold text-rosa-claro">R$ ${a.value.toFixed(2).replace(".",",")}</p>
        </div>
        <button onclick="removeFromCart(${a.index})" class="text-red-500 hover:text-red-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    `}),t.innerHTML=i,e.innerHTML=`<p class="text-right font-bold text-rosa-claro">Total: R$ ${o.toFixed(2).replace(".",",")}</p>`,document.getElementById("checkout-button").disabled=!1};function m(t,e){const o='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" class="fill-verde-musgo"><path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/></svg>';let i="";for(let a=0;a<t;a++){let s="";e==="right"?s=`position: absolute; transform: rotate(${45+a%2*45}deg); top: ${a*60}px; right: ${a%2*20}px;`:e==="left"?s=`position: absolute; transform: rotate(${-45-a%2*45}deg); top: ${200+a*60}px; left: ${a%2*20}px;`:s=`position: absolute; transform: rotate(${a%2*45}deg); left: ${a*50}px; bottom: ${a%2*15}px;`,i+=`<div style="${s}">${o}</div>`}return i}function l(){return`
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Right side zigzag -->
      <div class="absolute right-4 top-16 opacity-20">
        ${m(6,"right")}
      </div>
      <!-- Left side zigzag -->
      <div class="absolute left-4 top-32 opacity-20">
        ${m(6,"left")}
      </div>
      <!-- Bottom zigzag -->
      <div class="absolute bottom-8 left-12 opacity-20">
        ${m(9,"horizontal")}
      </div>
    </div>
  `}function S(){return`
    <section id="hero-section" class="hero-section w-full h-screen">
      <div class="flex flex-col md:flex-row w-full h-full">
        <div class="relative w-full md:w-[65%] h-full">
          <div class="w-full h-full bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/dabhe8ggx/image/upload/v1733596034/IMG-20180123-WA0017_csattx.jpg')"></div>
          <div class="absolute bottom-12 left-12 text-primary">
            <h1 class="font-dancing text-5xl md:text-6xl lg:text-7xl mb-3  font-bold tracking-wide">Anderson & Bruna</h1>
            <p class="text-2xl italic">Nós mal podemos esperar para dividir nosso dia especial com você!</p>
          </div>
        </div>
        <div class="w-full md:w-[35%] flex items-center justify-center p-8 h-full relative" style="background-color: rgba(252, 207, 152, 0.7);">
          ${l()}
          <div class="text-center relative z-10">
            <div class="text-2xl font-dancing mb-5 text-primary tracking-wider">14 ● Junho ● 2025</div>
            <div class="w-16 h-px bg-verde-musgo mx-auto mb-5"></div>
            <div class="text-xl text-primary font-medium">
              Cerimônia e celebração do nosso casamento<br>
              <span class="font-dancing text-2xl mt-2 block">Locomotiva eventos - Gaspar</span>
              <a href="https://www.google.com/maps/place/Locomotiva+Eventos/@-26.8898304,-49.0027926,17z/data=!3m1!4b1!4m6!3m5!1s0x94df23a9fced8b2f:0x746e1b6bd669c6c4!8m2!3d-26.8898304!4d-49.0027926!16s%2Fg%2F11b6hs9xwm?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" target="_blank" class="text-sm mt-2 block hover:underline text-primary">R. Vidal Flávio Dias, 1122 - Belchior Baixo, Gaspar - SC, 89114-442</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function $(){return`
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
  `}function B(){return`
    <section id="agenda-section" class="agenda-section w-full h-screen">
      <div class="flex flex-col md:flex-row w-full h-full">
        <div class="relative w-full md:w-[65%] h-full">
          <div class="w-full h-full bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/dabhe8ggx/image/upload/v1742748168/IMG_20241016_201110_rlo2pt.jpg')"></div>
          <div class="absolute bottom-12 left-12 text-primary">
            <h1 class="font-dancing text-4xl md:text-5xl lg:text-6xl mb-3 font-bold tracking-wide">Programação</h1>
            <p class="text-xl italic">O que esperar do nosso grande dia</p>
          </div>
        </div>
        <div class="w-full md:w-[35%] flex items-center justify-center p-8 h-full relative" style="background-color: rgba(252, 207, 152, 0.7);">
          ${l()}
          <div class="text-center relative z-10">
            <h2 class="text-2xl font-dancing font-bold mb-5 text-primary tracking-wider">Nossa Celebração</h2>
            <div class="w-12 h-px bg-verde-musgo mx-auto mb-6"></div>
            <div class="space-y-5 max-h-[60vh] overflow-y-auto pr-2">
              <div class="agenda-item-static">
                <div class="text-lg font-bold text-primary">Cerimônia às 15:30 hrs</div>
                <div class="text-base text-verde-musgo">Celebração num lindo gramado a céu aberto</div>
              </div>
              
               
              
              <div class="agenda-item-static">
                <div class="text-lg font-bold text-primary">Jantar</div>
                <div class="text-base text-verde-musgo">Que tal uma bela costela fogo de chão 😋🍖</div>
              </div>
              
              <div class="agenda-item-static">
                <div class="text-lg font-bold text-primary">Brincadeiras dos Noivos</div>
                <div class="text-base text-verde-musgo">Jogar o buquê e corte da gravata</div>
              </div>
              
              <div class="agenda-item-static">
                <div class="text-lg font-bold text-primary">Festa com a Banda Society</div>
                <div class="text-base text-verde-musgo">Primeira dança com coreografia dos noivos e tudo 💃🕺</div>
              </div>
              
              <div class="agenda-item-static">
                <div class="text-lg font-bold text-primary">Hora dos Doces</div>
                <div class="text-base text-verde-musgo">Aproveitem o bolo e os docinhos maravilhosos</div>
              </div>

              <div class="agenda-item-static">
                <div class="text-lg font-bold text-primary">Fim de festa</div>
                <div class="text-base text-verde-musgo">Aproveitem muito pois teremos transfer à partir das 23h que levará da festa até o centra da cidade(TipTim)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function _(){return`
    <section id="curiosidades-section" class="curiosidades-section w-full h-screen">
      <div class="flex flex-col md:flex-row w-full h-full">
        <div class="relative w-full md:w-[65%] h-full">
          <div class="w-full h-full bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/dabhe8ggx/image/upload/v1733596036/IMG_0996_xznh8b.jpg')"></div>
          <div class="absolute bottom-12 left-12 text-primary">
            <h1 class="font-dancing text-4xl md:text-5xl lg:text-6xl mb-3  font-bold tracking-wide">Curiosidades</h1>
            <p class="text-xl  italic">Conheça mais sobre nossa história</p>
          </div>
        </div>
        <div class="w-full md:w-[35%] flex items-center justify-center p-8 h-full relative" style="background-color: rgba(252, 207, 152, 0.7);">
          ${l()}
          <div class="text-center relative z-10">
            <h2 class="text-2xl font-bold mb-5 text-primary font-dancing tracking-wider">Nossa História</h2>
            <div class="w-12 h-px bg-verde-musgo mx-auto my-2"></div>

            <div class="space-y-6">
              <div class="curiosidade-item">
                <div class="text-xl font-bold text-primary">Quem deu o primeiro passo?</div>
                <div class="text-lg text-verde-musgo">O Anderson, que fingiu precisar de "mais sessões" de fisioterapia só para ver a recepcionista de sorriso encantador mais vezes!</div>
              </div>
              
              <div class="curiosidade-item">
                <div class="text-xl font-bold text-primary">Quem é o mais bagunceiro?</div>
                <div class="text-lg text-verde-musgo">O Anderson jura que é a Bruna, a Bruna tem certeza que é o Anderson, a Mel🐕 e o Flokinho🐶, por mais que tentem, não conseguem superar os dois!</div>
              </div>              
              
              <div class="curiosidade-item">
                <div class="text-xl font-bold text-primary">Quem cozinha melhor?</div>
                <div class="text-lg text-verde-musgo">A Bruna é a chef oficial, mas o Anderson é o mestre churrasqueiro e especialista em pedir delivery nos momentos mais necessários!</div>
              </div>

              <div class="curiosidade-item">
                <div class="text-xl font-bold text-primary">Qual a viagem mais marcantes que fizeram?</div>
                <div class="text-lg text-verde-musgo">O Anderson acha que é Maragogi e suas lindas praias e a Bruna prefere a arquitetura, os parques e o doce de leite de Buenos Aires!</div>
              </div>              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function j(){return`
    <section id="album-section" class="album-section w-full h-screen">
      <div class="flex flex-col md:flex-row w-full h-full">
        <div class="relative w-full md:w-[65%] h-full">
          <div class="w-full h-full bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/dabhe8ggx/image/upload/v1733596036/IMG_20221028_200744_qtsyrx.jpg')"></div>
          <div class="absolute bottom-12 left-12 text-primary">
            <h1 class="font-dancing text-4xl md:text-5xl lg:text-6xl mb-3  font-bold tracking-wide">Álbum de Fotos</h1>
            <p class="text-xl  italic">Compartilhe seus momentos especiais conosco</p>
          </div>
        </div>
        <div class="w-full md:w-[35%] flex items-center justify-center p-8 h-full relative" style="background-color: rgba(252, 207, 152, 0.7);">
          ${l()}
          <div class="text-center relative z-10">
            <h2 class="text-2xl font-bold mb-5 text-primary font-dancing tracking-wider">WedShoots</h2>
            <div class="w-12 h-px bg-verde-musgo mx-auto my-2"></div>
            <div class="space-y-6">
              <div class="album-item">
                <div class="text-xl font-bold text-primary">Como funciona?</div>
                
                <div class="text-lg text-verde-musgo">É um app que permite que todos os convidados compartilhem suas fotos do nosso casamento em um único lugar.</div>
              </div>
              
              <div class="album-item">
                <div class="text-xl font-bold text-primary">Como baixar</div>
                <div class="text-lg text-verde-musgo">Gratuitamente na App Store e Google Play e procurar por "WedShoots" ou <a href="https://play.google.com/store/search?q=wedshoots&c=apps&hl=pt_BR" target="_blank" class="text-primary hover:text-rosa-forte underline">clique aqui</a></div>
              </div>
              
              <div class="album-item">
                <div class="text-xl font-bold text-primary">Código do evento</div>
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
  `}function E(){return`
    <section id="doacao-section" class="doacao-section w-full h-screen">
      <div class="flex flex-col md:flex-row w-full h-full">
        <div class="relative w-full md:w-[65%] h-full">
          <div class="w-full h-full bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/dabhe8ggx/image/upload/v1733596034/IMG-20180421-WA0064_qvsngo.jpg')"></div>
          <div class="absolute bottom-12 left-12 text-primary">
            <h1 class="font-dancing text-4xl md:text-5xl lg:text-6xl mb-3  font-bold tracking-wide">Doações</h1>
            <p class="text-xl  italic">Compartilhe amor com quem precisa</p>
          </div>
        </div>
        <div class="w-full md:w-[35%] flex items-center justify-center p-8 h-full relative" style="background-color: rgba(252, 207, 152, 0.7);">
          ${l()}
          <div class="text-center relative z-10">
            <h2 class="text-2xl font-bold mb-5 text-primary tracking-wider">Caridade</h2>
            <p class="text-lg text-verde-musgo mb-6">Estamos envolvidos com a causa animal, quem sabe nesse momento, você considere fazer uma doação para uma destas instituições:</p>
            <div class="space-y-8">
              <div class="doacao-item">
                <div class="text-xl font-bold text-primary">Sitio Dona Lúcia</div>
                <div class="w-12 h-px bg-verde-musgo mx-auto my-2"></div>
                <div class="text-lg text-verde-musgo">Ajude animais abandonados a encontrarem um novo lar</div>
                <a href="https://www.sitiodonalucia.com.br/" target="_blank" class="inline-block mt-2 text-primary hover:underline">Saiba mais</a>
              </div>
              
              <div class="doacao-item">
                <div class="text-xl font-bold text-primary">Casa da Esperança</div>
                <div class="w-12 h-px bg-verde-musgo mx-auto my-2"></div>
                <div class="text-lg text-verde-musgo">Apoio a crianças em situação de vulnerabilidade</div>
                <a href="https://www.casadaesperanca.org" target="_blank" class="inline-block mt-2 text-primary hover:underline">Saiba mais</a>
              </div>
              
              <div class="doacao-item">
                <div class="text-xl font-bold text-primary">Casa de repouso menino jesus</div>
                <div class="w-12 h-px bg-verde-musgo mx-auto my-2"></div>
                <div class="text-lg text-verde-musgo">Cuidados e companhia para idosos sem família</div>
                <a href="https://www.instagram.com/crmeninojesus/" target="_blank" class="inline-block mt-2 text-primary hover:underline">Saiba mais</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function I(){function t(){let c=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${c}px`)}t(),window.addEventListener("resize",t);const e=document.querySelectorAll("section"),o=document.getElementById("hero-section"),i=document.getElementById("agenda-section"),a=document.getElementById("curiosidades-section"),s=document.getElementById("album-section"),n=document.getElementById("doacao-section");i&&(i.style.opacity="0.0"),a&&(a.style.opacity="0.2"),s&&(s.style.opacity="0.2"),n&&(n.style.opacity="0.2"),window.addEventListener("scroll",function(){const c=window.scrollY,g=window.innerHeight;if(o){const r=o.querySelector(".bg-cover");r.style.transform=`translateY(${c*.2}px)`;const d=o.querySelector(".absolute");d.style.opacity=1-c/800}[i,a,s,n].forEach((r,d)=>{if(r){const u=r.getBoundingClientRect().top,p=1-Math.max(0,Math.min(1,u/(g*.8)));r.style.opacity=Math.max(.2,p).toString();const w=Math.max(0,u*.05);r.style.transform=`translateY(${w}px)`}}),e.forEach(r=>{if(r.id!=="hero-section"&&r.id!=="agenda-section"&&r.id!=="curiosidades-section"&&r.id!=="album-section"&&r.id!=="doacao-section"){const d=r.getBoundingClientRect().top,u=r.offsetHeight;if(d<g-50){const p=1-Math.max(0,Math.min(1,d*-1/u));r.style.opacity=Math.min(1,p+.4),r.style.transform=`translateY(${Math.max(0,d*.05)}px)`}}})})}const M=window.location.pathname;let v="";const L=`
  <div class="relative w-full overflow-hidden h-24 mt-8">
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 w-full">
      <div class="flex justify-center">
        ${m(100,"horizontal")}
      </div>
    </div>
  </div>
`,q=M.includes("lista-presentes.html");q?v=`
    ${h("Lista de Presentes","Graças a deus, já conseguimos mobiliar a nossa casinha, mas se você quiser nos presentear, aceitamos presentes em dinheiro para a nossa lua de mel e para ajudar a pagar nossa casa :)")}  
    ${x()}
    ${f()}
  `:v=`
    ${$()}
    ${S()}
    ${B()}
    ${_()}
    ${j()}
    ${E()}
    ${L}      
    ${h("Lista de Presentes","Graças a deus, já conseguimos mobiliar a nossa casinha, mas se você quiser nos presentear, aceitamos presentes em dinheiro para a nossa lua de mel e para ajudar a pagar nossa casa :)")}  
    ${x()}
    ${f()}
  `;document.querySelector("#app").innerHTML=k(v);document.addEventListener("DOMContentLoaded",()=>{I(),window.updateCartCounter&&window.updateCartCounter()});
