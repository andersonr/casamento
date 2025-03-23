import { createPawDecoration } from "../utils/decorations.js";

export function createHero() {
  return `
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
          ${createPawDecoration()}
          <div class="text-center relative z-10">
            <div class="text-2xl font-dancing mb-5 text-primary tracking-wider">14 ● Junho ● 2025</div>
            <div class="w-16 h-px bg-verde-musgo mx-auto mb-5"></div>
            <div class="text-xl text-primary font-medium">
              Cerimônia e celebração do nosso casamento<br>
              <span class="font-dancing text-2xl mt-2 block">Locomotiva eventos - Gaspar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* Simbolos para separar a data
  ✢ ✣ ✤ ✥ ❋ ✦ ✧ ✩ ╰☆╮ ✪ ✫ ✬ ✭ ✮ ✯ ✰  ★ ✱ ✲   ❂ ✵ ✶ ✷ ✸ ✹ ✺ ✻ ✼  ❅ ❆  ❈ ❉ ❊
  ◉ ○ ◌ ◍ ◎ ● ◐ ◑ ◒ ◓ ◔ ◕ ◖ ◗ ❂  ⊗ ⊙ ◘ ◙ ◍
*/