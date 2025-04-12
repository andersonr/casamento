import { createPawDecoration } from "../utils/decorations.js";

export function createCuriosidadesSection() {
  return `
    <section id="curiosidades-section" class="curiosidades-section w-full h-screen">
      <div class="flex flex-col md:flex-row w-full h-full">
        <div class="relative w-full md:w-[65%] h-full">
          <div class="w-full h-full bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/dabhe8ggx/image/upload/v1744467893/PR%C3%89_WEDDING-27_uu4gmn.jpg')"></div>
        </div>
        <div class="w-full md:w-[35%] flex items-center justify-center p-8 h-full relative" style="background-color: rgba(252, 207, 152, 0.7);">
          ${createPawDecoration()}
          <div class="text-center font-raleway relative z-10">
            <h2 class="text-2xl font-delius font-bold mb-5 text-primary tracking-wider">Nossa História</h2>
            <div class="w-12 h-px bg-verde-musgo mx-auto my-2"></div>

            <div class="space-y-6">
              <div class="curiosidade-item">
                <div class="text-lg font-bold text-primary">Quem deu o primeiro passo?</div>
                <div class="text-base text-verde-musgo">O Anderson, que fingiu precisar de "mais sessões" de fisioterapia só para ver a recepcionista de sorriso encantador. <br/> Estratégia digna de comédia romântica 🤣</div>
              </div>
              
              <div class="curiosidade-item">
                <div class="text-lg font-bold text-primary">Quem é o mais bagunceiro?</div>
                <div class="text-base text-verde-musgo">O Anderson jura que é a Bruna, a Bruna tem certeza que é o Anderson. Enquanto isso, a Mel🐕 e o Floquinho🐶 observam tudo e pensam: "a gente tenta acompanhar, mas é difícil competir com esses dois!"</div>
              </div>              
              
              <div class="curiosidade-item">
                <div class="text-lg font-bold text-primary">Quem cozinha melhor?</div>
                <div class="text-base text-verde-musgo">A Bruna é a chef da casa - cozinha com amor e talento.<br/>O Anderson? Ele domina a arte do churrasco e é mestre em pedidos estratégicos no ifood (o verdadeiro salvador nos momentos de fome súbita)</div>
              </div>

              <div class="curiosidade-item">
                <div class="text-lg font-bold text-primary">Qual a viagem mais marcante que fizeram?</div>
                <div class="text-base text-verde-musgo">O Anderson acha que é Maragogi e suas lindas praias e pra Bruna, nada supera a arquitetura charmosa, os parques e, claro, o doce de leite de Buenos Aires. (E sim, já estamos aceitando sugestões pro próximo destino!)</div>
              </div>              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Old
// https://res.cloudinary.com/dabhe8ggx/image/upload/v1733596036/IMG_0996_xznh8b.jpg
// Nova
// https://res.cloudinary.com/dabhe8ggx/image/upload/v1744467893/PR%C3%89_WEDDING-27_uu4gmn.jpg