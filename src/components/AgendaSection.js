import { createPawDecoration } from "../utils/decorations.js";

export function createAgendaSection() {
  return `
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
          ${createPawDecoration()}
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
  `;
}


//<div class="agenda-item-static">
//                 <div class="text-lg font-bold text-primary">Fotos e Coquetel</div>
//                 <div class="text-base text-verde-musgo">Fotos com os convidados e drinks de boas-vindas</div>
//               </div>
