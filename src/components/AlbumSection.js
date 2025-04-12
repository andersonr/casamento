import { createPawDecoration } from "../utils/decorations.js";

export function createAlbumSection() {
  return `
    <section id="album-section" class="album-section w-full h-screen">
      <div class="flex flex-col md:flex-row w-full h-full">
        <div class="relative w-full md:w-[65%] h-full">
          <div class="w-full h-full bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/dabhe8ggx/image/upload/v1744467843/PR%C3%89_WEDDING-116_sxtpkc.jpg')"></div>
        </div>
        <div class="w-full md:w-[35%] flex items-center justify-center p-8 h-full relative" style="background-color: rgba(252, 207, 152, 0.7);">
          ${createPawDecoration()}
          <div class="text-center font-raleway relative z-10">
            <h2 class="text-2xl font-delius font-bold mb-5 text-primary tracking-wider">WedShoots</h2>
            <div class="w-12 h-px bg-verde-musgo mx-auto my-2"></div>
            <div class="space-y-6">
              <div class="album-item">
                <div class="text-xl font-bold text-primary">Como funciona?</div>
                
                <div class="text-lg text-verde-musgo">
                  Queremos ver o nosso dia pelos olhos de vocês!<br/>
                  Com o app WedShoots, todos os convidados podem compartilhar fotos do casamento num único lugar. Assim, a gente guarda não só memórias, mas também aqueles cliques espontâneos e maravilhoso que só vocês conseguem registrar!
                </div>
              </div>
              
              <div class="album-item">
                <div class="text-xl font-bold text-primary">Como baixar</div>
                <div class="text-lg text-verde-musgo">É grátis! <br/> 
                É só procurar por "WedShoots" na App Store e Google Play ou <a href="https://play.google.com/store/search?q=wedshoots&c=apps&hl=pt_BR" target="_blank" class="text-primary hover:text-rosa-forte underline">clicar aqui</a></div>
              </div>
              
              <div class="album-item">
                <div class="text-xl font-bold text-primary">Código do nosso casamento</div>
                <div class="text-lg text-verde-musgo font-bold">BR00c7ea6b</div>
                <div class="flex justify-center mt-4">
                    <img src="https://res.cloudinary.com/dabhe8ggx/image/upload/v1742758137/qrcode_wedshoots_ekxeca.png" alt="QR Code WedShoots" class="w-32 h-32">
                </div>
              </div>              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}


// Old
// https://res.cloudinary.com/dabhe8ggx/image/upload/v1733596036/IMG_20221028_200744_qtsyrx.jpg 
// Nova
// https://res.cloudinary.com/dabhe8ggx/image/upload/v1744467889/PR%C3%89_WEDDING-220_ecyyqp.jpg
// ou
// https://res.cloudinary.com/dabhe8ggx/image/upload/v1744467843/PR%C3%89_WEDDING-116_sxtpkc.jpg