import { createPawDecoration } from "../utils/decorations.js";

export function createHero() {
  return `
    <section id="hero-section" class="hero-section w-full h-screen">
      <div class="flex flex-col md:flex-row w-full h-full">
        <div class="relative w-full md:w-[65%] h-full">
          <div class="w-full h-full bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/dabhe8ggx/image/upload/v1744468024/PR%C3%89_WEDDING-69_udb2wc.jpg')"></div>
          
        </div>
        <div class="w-full md:w-[35%] flex items-center justify-center p-8 h-full relative" style="background-color: rgba(252, 207, 152, 0.7);">
          ${createPawDecoration()}
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
  `;
}

//Old
// https://res.cloudinary.com/dabhe8ggx/image/upload/v1733596034/IMG-20180123-WA0017_csattx.jpg

//Nova 
// https://res.cloudinary.com/dabhe8ggx/image/upload/v1744468024/PR%C3%89_WEDDING-69_udb2wc.jpg
// ou
// https://res.cloudinary.com/dabhe8ggx/image/upload/v1744467849/PR%C3%89_WEDDING-14_yygyl4.jpg

/* Simbolos para separar a data
  ✢ ✣ ✤ ✥ ❋ ✦ ✧ ✩ ╰☆╮ ✪ ✫ ✬ ✭ ✮ ✯ ✰  ★ ✱ ✲   ❂ ✵ ✶ ✷ ✸ ✹ ✺ ✻ ✼  ❅ ❆  ❈ ❉ ❊
  ◉ ○ ◌ ◍ ◎ ● ◐ ◑ ◒ ◓ ◔ ◕ ◖ ◗ ❂  ⊗ ⊙ ◘ ◙ ◍
*/