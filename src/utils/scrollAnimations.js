export function initScrollAnimations() {
  // Set the --vh custom property to fix mobile viewport height issues
  function setVhProperty() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  // Set it on initial load
  setVhProperty();
  
  // Update on resize
  window.addEventListener('resize', setVhProperty);
  
  // Get all major sections
  const sections = document.querySelectorAll('section');
  const heroSection = document.getElementById('hero-section');
  const agendaSection = document.getElementById('agenda-section');
  const curiosidadesSection = document.getElementById('curiosidades-section');
  const albumSection = document.getElementById('album-section');
  const doacaoSection = document.getElementById('doacao-section');
  
  // Set initial opacity for special sections - slightly visible instead of completely hidden
  if (agendaSection) agendaSection.style.opacity = '0.0';
  if (curiosidadesSection) curiosidadesSection.style.opacity = '0.2';
  if (albumSection) albumSection.style.opacity = '0.2';
  if (doacaoSection) doacaoSection.style.opacity = '0.2';
  
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Gentler parallax effect for hero background
    if (heroSection) {
      const heroBackground = heroSection.querySelector('.bg-cover');
      heroBackground.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      
      // More subtle fade out for hero content
      const heroContent = heroSection.querySelector('.absolute');
      heroContent.style.opacity = 1 - (scrollPosition / 800);
    }
    
    // Handle special sections visibility with more subtle transitions
    [agendaSection, curiosidadesSection, albumSection, doacaoSection].forEach((section, index) => {
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        // Start fading in earlier and more gradually
        const fadeRatio = 1 - Math.max(0, Math.min(1, sectionTop / (windowHeight * 0.8)));
        // Apply a minimum opacity so sections are slightly visible even when not in focus
        section.style.opacity = Math.max(0.2, fadeRatio).toString();
        
        // Add a slight vertical movement for a more dynamic effect
        const translateY = Math.max(0, sectionTop * 0.05);
        section.style.transform = `translateY(${translateY}px)`;
      }
    });
    
    // Fade in other sections as they enter viewport - more subtle approach
    sections.forEach(section => {
      if (section.id !== 'hero-section' && 
          section.id !== 'agenda-section' && 
          section.id !== 'curiosidades-section' &&
          section.id !== 'album-section' &&
          section.id !== 'doacao-section') {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        
        if (sectionTop < windowHeight - 50) { // Start transition earlier
          const opacity = 1 - Math.max(0, Math.min(1, (sectionTop * -1) / sectionHeight));
          section.style.opacity = Math.min(1, opacity + 0.4); // Higher starting opacity
          section.style.transform = `translateY(${Math.max(0, sectionTop * 0.05)}px)`; // Gentler movement
        }
      }
    });
  });
}