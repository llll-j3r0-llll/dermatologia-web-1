async function loadBanner() {
    try {
      // Ruta a JSON en carpeta pública
      const response = await fetch('/bannerdata.json');
      if (!response.ok) {
        throw new Error(`Error loading banner: ${response.status} ${response.statusText}`);
      }
  
      const banner = await response.json();
  
      // Selecciona los elementos ya existentes en el HTML
      const titleEl = document.querySelector('.hero-texto h1');
      const descEl = document.querySelector('.hero-texto p');
      const imageEl = document.querySelector('.imagen-banner');
  
      if (!titleEl || !descEl || !imageEl) {
        console.error('Elementos del banner no encontrados en el HTML');
        return;
      }
  
      // Asigna dinámicamente el contenido del JSON
      titleEl.textContent = banner.title;
      descEl.textContent = banner.description;
      imageEl.src = banner.image;
      imageEl.alt = banner.title;
  
    } catch (error) {
      console.error('Error cargando el banner:', error.message);
    }
  }
  
  document.addEventListener('DOMContentLoaded', loadBanner);
  