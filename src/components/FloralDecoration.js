export function createFloralDecoration(position = 'top') {
  return `
    <div class="floral-decoration ${position} w-full overflow-hidden">
      <div class="floral-branch-container flex justify-between items-center px-4 max-w-6xl mx-auto">
        <img 
          src="/images/floral-left.png" 
          alt="Decoração floral esquerda" 
          class="floral-branch ${position === 'top' ? 'rotate-0' : 'rotate-180'} w-48 md:w-64 h-auto"
        />
        <img 
          src="/images/floral-right.png" 
          alt="Decoração floral direita" 
          class="floral-branch ${position === 'top' ? 'rotate-0' : 'rotate-180'} w-48 md:w-64 h-auto"
        />
      </div>
    </div>
  `;
}
