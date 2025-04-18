
export function createHeader(title, description) {
	return `
    <header class="relative flex items-center justify-center h-64 text-primary text-center">
      
      <div>
        <h1 class="text-4xl font-delius font-bold">${title}</h1>
        <p class="mt-4 max-w-xl font-raleway mx-auto">${description}</p>
      </div>
    </header>
  `;
}
