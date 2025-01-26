export function createHeader(title, description) {
	return `
    <header class="flex items-center justify-center h-64 text-black text-center">
      <div>
        <h1 class="text-4xl font-bold">${title}</h1>
        <p class="mt-4 max-w-xl mx-auto">${description}</p>
      </div>
    </header>
  `;
}
