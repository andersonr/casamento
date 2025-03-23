import { createPawDecoration } from "../utils/decorations.js";

export function createCuriosidadesSection() {
  return `
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
          ${createPawDecoration()}
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
  `;
}