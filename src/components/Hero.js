export function createHero() {
  return `
    <section class="hero-section w-full">
      <div class="flex flex-col md:flex-row w-full">
        <div class="relative w-full md:w-[65%] h-[100vh]">
          <div class="w-full h-full bg-cover bg-center" style="background-image: url('https://res.cloudinary.com/dabhe8ggx/image/upload/v1733596034/IMG-20180123-WA0017_csattx.jpg')"></div>
          <div class="absolute bottom-12 left-12 text-white">
            <h1 class="font-dancing text-4xl md:text-5xl lg:text-6xl mb-2">Anderson & Bruna</h1>
            <p class="text-xl">Nós mal podemos esperar para dividir nosso dia especial com você!</p>
          </div>
        </div>
        <div class="w-full md:w-[35%] flex items-center justify-center p-8">
          <div class="text-center">
            <div class="text-xl font-bold mb-4">14 - Junho - 2025</div>
            <div class="w-12 h-px bg-dark-gray mx-auto mb-4"></div>
            <div class="text-lg">
              Cerimônia e celebração<br>
              Locomotiva eventos - Gaspar
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}