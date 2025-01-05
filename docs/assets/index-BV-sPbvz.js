(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function c(a){return`
    <div class="relative min-h-screen">
      <div class="fixed left-0 top-0 w-64 h-full pointer-events-none bg-contain bg-left bg-no-repeat left-branch"></div>
      <div class="fixed right-0 top-0 w-64 h-full pointer-events-none bg-contain bg-right bg-no-repeat right-branch"></div>
      <main class="relative z-10">
        ${a}
      </main>
    </div>
  `}function l(){return`
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
  `}function n(){return`
    <section class="section text-center space-y-4" style="padding-top: 3rem;  padding-bottom: 3rem; padding-right: 0px;">
      <h2 class="text-4xl md:text-5xl font-serif text-dark-gray tracking-wide">Save the Date</h2>
      <div class="space-y-2">
        <p class="text-2xl">14 de Junho de 2025</p>
        <p class="text-xl">Locomotiva, Gaspar - SC</p>
      </div>
    </section>
  `}function d(){return`
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
  `}function p(){return`
    <section class="flex justify-center" style="padding-top: 3rem;">
      <img 
        src="/images/nome-casal.png" 
        alt="Nomes do Casal" 
        class="w-3/4 md:w-2/3 lg:w-1/2 h-auto"
      />
    </section>
  `}const u=`  
  ${l()}
  ${p()}
  ${n()}
  ${d()}
`;document.querySelector("#app").innerHTML=c(u);
