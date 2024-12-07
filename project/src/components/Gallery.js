export function createGallery() {
  // Array of Cloudinary image URLs (replace with your actual image URLs)
  const images = [
    'https://res.cloudinary.com/dabhe8ggx/image/upload/v1733596034/IMG-20180123-WA0017_csattx.jpg',
    'https://res.cloudinary.com/dabhe8ggx/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1733596034/IMG-20180421-WA0064_qvsngo.jpg',
    'https://res.cloudinary.com/dabhe8ggx/image/upload/v1733596034/IMG_0778_py59zz.jpg',
    'https://res.cloudinary.com/dabhe8ggx/image/upload/v1733596036/IMG_0996_xznh8b.jpg',
    'https://res.cloudinary.com/dabhe8ggx/image/upload/v1733596036/IMG_20221028_200744_qtsyrx.jpg',
    'https://res.cloudinary.com/dabhe8ggx/image/upload/v1733596033/IMG_20230325_174457_brqcw7.jpg',
  ];

  const galleryHTML = images.map(url => `
    <div class="aspect-square overflow-hidden rounded-lg shadow-md">
      <img 
        class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        data-src="${url}"
        src="${url}"
        alt="Momento especial"
        loading="lazy"
      >
    </div>
  `).join('');

  return `
    <section class="section py-8">
      <h2 class="text-3xl md:text-4xl font-dancing text-center mb-12">Momentos Especiais</h2>
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          ${galleryHTML}
        </div>
      </div>
    </section>
  `;
}