import { createPawDecoration } from "../utils/decorations.js";

export function createAgendaSection() {
  return `
    <section id="agenda-section" class="agenda-section w-full h-screen">
      <div class="flex flex-col md:flex-row w-full h-full">
        <div class="relative w-full md:w-[65%] h-full">
          <div class="w-full h-full bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/dabhe8ggx/image/upload/v1744467895/PR%C3%89_WEDDING-39_fgrg0o.jpg')"></div>
          
        </div>
        <div class="w-full md:w-[35%] flex items-center justify-center p-8 h-full relative" style="background-color: rgba(252, 207, 152, 0.7);">
          ${createPawDecoration()}
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
  `;
}


//Old
// https://res.cloudinary.com/dabhe8ggx/image/upload/v1742748168/IMG_20241016_201110_rlo2pt.jpg

//Nova
// https://res.cloudinary.com/dabhe8ggx/image/upload/v1744467895/PR%C3%89_WEDDING-39_fgrg0o.jpg
// OU
// https://res.cloudinary.com/dabhe8ggx/image/upload/v1744467893/PR%C3%89_WEDDING-33_ltrgul.jpg