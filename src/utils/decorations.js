// Utility function to generate dog paw trail SVGs in zigzag pattern
export function generatePawTrail(count, direction) {
  const pawSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" class="fill-verde-musgo"><path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/></svg>';
  
  let trail = '';
  
  for (let i = 0; i < count; i++) {
    let style = '';
    
    if (direction === 'right') {
      style = `position: absolute; transform: rotate(${45 + ((i % 2) * 45)}deg); top: ${i * 60}px; right: ${(i % 2) * 20}px;`;
    } else if (direction === 'left') {
      style = `position: absolute; transform: rotate(${-45 - ((i % 2) * 45)}deg); top: ${200 + (i * 60)}px; left: ${(i % 2) * 20}px;`;
    } else { // horizontal
      style = `position: absolute; transform: rotate(${(i % 2) * 45}deg); left: ${i * 50}px; bottom: ${(i % 2) * 15}px;`;
    }
    
    trail += `<div style="${style}">${pawSvg}</div>`;
  }
  
  return trail;
}

// Function to create the complete paw decoration HTML
export function createPawDecoration() {
  return `
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Right side zigzag -->
      <div class="absolute right-4 top-16 opacity-20">
        ${generatePawTrail(6, 'right')}
      </div>
      <!-- Left side zigzag -->
      <div class="absolute left-4 top-32 opacity-20">
        ${generatePawTrail(6, 'left')}
      </div>
      <!-- Bottom zigzag -->
      <div class="absolute bottom-8 left-12 opacity-20">
        ${generatePawTrail(9, 'horizontal')}
      </div>
    </div>
  `;
}