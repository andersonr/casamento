import { createPawDecoration } from "../utils/decorations.js";

export function createDoacaoSection() {
  return `
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
          ${createPawDecoration()}
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
  `;
}