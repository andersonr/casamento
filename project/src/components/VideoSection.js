export function createVideoSection() {
  return `
    <section class="w-full relative overflow-hidden">
      <div class="h-[50vh] relative">
        <iframe 
          class="w-full h-full object-cover"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&loop=1&playlist=YOUR_VIDEO_ID&mute=1&controls=0"
          title="Save the Date"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </section>
  `;
}