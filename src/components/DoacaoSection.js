import { createPawDecoration } from "../utils/decorations.js";

export function createDoacaoSection() {
  return `
    <section id="doacao-section" class="doacao-section w-full h-screen">
      <div class="flex flex-col md:flex-row w-full h-full">
        <div class="relative w-full md:w-[65%] h-full">
          <div class="w-full h-full bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/dabhe8ggx/image/upload/v1744467881/PR%C3%89_WEDDING-200_jb4fbk.jpg')"></div>
        </div>
        <div class="w-full md:w-[35%] flex items-center justify-center p-8 h-full relative" style="background-color: rgba(252, 207, 152, 0.7);">
          ${createPawDecoration()}
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
  `;
}

// Old 
// https://res.cloudinary.com/dabhe8ggx/image/upload/v1733596034/IMG-20180421-WA0064_qvsngo.jpg
// Novo
// https://res.cloudinary.com/dabhe8ggx/image/upload/v1744467881/PR%C3%89_WEDDING-200_jb4fbk.jpg