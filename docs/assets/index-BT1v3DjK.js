(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&c(t)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function n(){return`
    <section class="section py-8">
      <h2 class="text-3xl md:text-4xl font-dancing text-center mb-12">Momentos Especiais</h2>
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          ${["https://res.cloudinary.com/dabhe8ggx/image/upload/v1733596034/IMG-20180123-WA0017_csattx.jpg","https://res.cloudinary.com/dabhe8ggx/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1733596034/IMG-20180421-WA0064_qvsngo.jpg","https://res.cloudinary.com/dabhe8ggx/image/upload/v1733596034/IMG_0778_py59zz.jpg","https://res.cloudinary.com/dabhe8ggx/image/upload/v1733596036/IMG_0996_xznh8b.jpg","https://res.cloudinary.com/dabhe8ggx/image/upload/v1733596036/IMG_20221028_200744_qtsyrx.jpg","https://res.cloudinary.com/dabhe8ggx/image/upload/v1733596033/IMG_20230325_174457_brqcw7.jpg"].map(r=>`
    <div class="aspect-square overflow-hidden rounded-lg shadow-md">
      <img 
        class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        data-src="${r}"
        src="${r}"
        alt="Momento especial"
        loading="lazy"
      >
    </div>
  `).join("")}
        </div>
      </div>
    </section>
  `}function l(i,a,r){return`
     <div class="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      <img src="${i}" alt="${a}" class="w-full h-48 object-cover">
      <div class="p-4 flex flex-col flex-grow">
        <p class="text-gray-700 flex-grow">${a}</p>
        <div class="mt-auto">
          <p class="text-gray-1000"><b>R$ ${r?r.toFixed(2).toString().replace(".",","):"1,00"}</b></p>
          <button class="mt-2 bg-blue-500 text-white py-2 px-4 rounded w-full">Comprar</button>
        </div>
      </div>
    </div>
  `}function d(){return`
    <main class="p-8 bg-soft-cream">
      <div class="grid gap-4" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); max-width: 1200px; margin: 0 auto;">
        ${[{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907606/terapia_jabul0.webp",description:"Terapia para a noiva após os preparativos do casamento",value:150},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907608/banda-branca-de-neve_opdxwh.webp",description:"Banda para o casamento",value:100},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907609/creatina_tspg0m.webp",description:"Creatina para o projeto verão",value:80},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/poli_nly7bk.webp",description:"Aulas de dança pro noivo, ele ta precisando",value:171},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/drinks-noivos_wfhz2p.webp",description:"Drinks para o casal na lua de mel",value:60},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907609/cerveja_jugpxi.webp",description:"Caixinha de cerveja para o noivo",value:40},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/pao_queijo_wtrbl4.webp",description:"Pão de queijo que o noivo adora",value:30},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/netflix_btkkom.webp",description:"1 mês de Netflix pro casal",value:50},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907608/alianca_zysoz8.webp",description:"Parcela das alianças",value:1e3},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907606/uber_sfquxt.webp",description:"Uber até o aeroporto",value:120},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907607/whey_rjmk1v.webp",description:"Wheyzinho do monstro",value:110},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907604/curso_tpm_fq3xmv.webp",description:"Vídeo aula sobre TPM pro noivo não morrer",value:150},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907606/vinho_jc3zv4.webp",description:"Vinhozinho pra noiva",value:100},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907608/aviaozinho_uyzoyr.webp",description:"Aviãozinho do Silvio Santos",value:50},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908307/lavalouca_mfjfbt.jpg",description:"Parcela da lava-louças pro noivo não sofrer",value:150},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907609/contas_afsd7j.webp",description:"Adote uma conta",value:150},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/rolex_yv6aqv.webp",description:"Rolex pro noivo",value:10},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907606/sandalia_wllxso.webp",description:"Um sapatinho pra noiva não machucar o pé",value:300},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907604/manicure_wlmk7b.webp",description:"Manicure pro grande dia",value:180},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907604/lingerie_nbs9iz.webp",description:"Lingerie sensual pra noiva",value:200},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908441/comprinhas_li5row.webp",description:"Umas blusinhas que a noiva não tem nada pra vestir",value:300},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908501/cueca-furada_k4bspi.jpg",description:"Umas cuecas pro noivo que anda tão necessitado",value:200},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/roupa_noivo_nrxpjj.webp",description:"Parcela da roupa do noivo",value:300},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907609/barbeiro_u2fdvd.webp",description:"Barbeiro do grande dia",value:100},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907604/lua_de_mel_ikoxgm.webp",description:"Parcela da viagem de lua de mel",value:1e3},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737907605/jantar_romantico_k9wkht.webp",description:"Um jantar romântico na lua de mel",value:250},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908122/casino_vkk1bi.jpg",description:"Uma jogadinha no casino",value:120},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908585/sogra_navw3d.jpg",description:"Ajudar no quartinho da sogra",value:550},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908673/buque_n1ofo1.jpg",description:"Jogar o buque na sua direção",value:200},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908776/buffet_xydcmq.jpg",description:"Primeiro lugar na fila do buffet",value:500},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737908848/tiktok-31_kx7xio.png",description:"Foto e dancinha pro tiktok com os noivos",value:150},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737909056/fim_orcal1.jpg",description:"Eu não vou embora!! Ajuda na hora extra dos fornecedores",value:80},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737909156/tutubarao_r5crnm.jpg",description:"Mergulho com tubarões - Apenas o noivo",value:250},{imgSrc:"https://res.cloudinary.com/dabhe8ggx/image/upload/v1737909240/Cocobay-Resort-2_qapoly.jpg",description:"Parcela do hotel da lua de mel",value:300}].map(a=>l(a.imgSrc,a.description,a.value)).join("")}
      </div>
    </main>
  `}function p(i,a){return`
    <header class="flex items-center justify-center h-64 text-black text-center">
      <div>
        <h1 class="text-4xl font-bold">${i}</h1>
        <p class="mt-4 max-w-xl mx-auto">${a}</p>
      </div>
    </header>
  `}function u(){return`
    <section class="flex justify-center" style="padding-top: 3rem;">
      <img 
        src="./images/nome-casal.png" 
        alt="Nomes do Casal" 
        class="w-3/4 md:w-2/3 lg:w-1/2 h-auto"
      />
    </section>
  `}function g(i){return`
    <div class="relative min-h-screen">
      <div class="fixed left-0 top-0 w-64 h-full pointer-events-none bg-contain bg-left bg-no-repeat left-branch"></div>
      <div class="fixed right-0 top-0 w-64 h-full pointer-events-none bg-contain bg-right bg-no-repeat right-branch"></div>
      <main class="relative z-10">
        ${i}
      </main>
    </div>
  `}function m(){return`
<nav class="p-4 bg-white shadow-md">
	<a href="lista-presentes.html" class="text-blue-500 hover:underline">
		Lista de Presentes
	</a>
</nav>;
`}function v(){return`
    <section class="section text-center space-y-4" style="padding-top: 3rem;  padding-bottom: 3rem; padding-right: 0px;">
      <h2 class="text-4xl md:text-5xl font-serif text-dark-gray tracking-wide">Save the Date</h2>
      <div class="space-y-2">
        <p class="text-2xl">14 de Junho de 2025</p>
        <p class="text-xl">Locomotiva, Gaspar - SC</p>
      </div>
    </section>
  `}function h(){return`
    <section class="w-full relative overflow-hidden">
      <div class="h-[50vh] relative">
        <iframe 
          class="w-full h-full object-cover"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&loop=1&playlist=YOUR_VIDEO_ID&mute=1&controls=0"
          title="Save the Date"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </section>
  `}const b=window.location.pathname;let s="";b.includes("lista-presentes.html")?s=`
    ${p("Lista de Presentes","Graças a deus nós já conseguimos mobiliar a nossa casinha, mas se você quiser nos presentear, aceitamos presentes em dinheiro para a nossa lua de mel e para ajudar a pagar nossa casa :)")}
    ${d()}
  `:s=`  
    ${h()}
    ${u()}
    ${v()}
    ${n()}
    ${m()}
  `;document.querySelector("#app").innerHTML=g(s);
