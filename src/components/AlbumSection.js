import { createPawDecoration } from "../utils/decorations.js";

export function createAlbumSection() {
  return `
    <section id="album-section" class="album-section w-full h-screen">
      <div class="flex flex-col md:flex-row w-full h-full">
        <div class="relative w-full md:w-[65%] h-full">
          <div class="w-full h-full bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/dabhe8ggx/image/upload/v1733596036/IMG_20221028_200744_qtsyrx.jpg')"></div>
          <div class="absolute bottom-12 left-12 text-primary">
            <h1 class="font-dancing text-4xl md:text-5xl lg:text-6xl mb-3  font-bold tracking-wide">Álbum de Fotos</h1>
            <p class="text-xl  italic">Compartilhe seus momentos especiais conosco</p>
          </div>
        </div>
        <div class="w-full md:w-[35%] flex items-center justify-center p-8 h-full relative" style="background-color: rgba(252, 207, 152, 0.7);">
          ${createPawDecoration()}
          <div class="text-center relative z-10">
            <h2 class="text-2xl font-bold mb-5 text-primary font-dancing tracking-wider">WedShoots</h2>
            <div class="w-12 h-px bg-verde-musgo mx-auto my-2"></div>
            <div class="space-y-6">
              <div class="album-item">
                <div class="text-xl font-bold text-primary">Como funciona?</div>
                
                <div class="text-lg text-verde-musgo">É um app que permite que todos os convidados compartilhem suas fotos do nosso casamento em um único lugar.</div>
              </div>
              
              <div class="album-item">
                <div class="text-xl font-bold text-primary">Como baixar</div>
                <div class="text-lg text-verde-musgo">Gratuitamente na App Store e Google Play e procurar por "WedShoots" ou <a href="https://play.google.com/store/search?q=wedshoots&c=apps&hl=pt_BR" target="_blank" class="text-primary hover:text-rosa-forte underline">clique aqui</a></div>
              </div>
              
              <div class="album-item">
                <div class="text-xl font-bold text-primary">Código do evento</div>
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