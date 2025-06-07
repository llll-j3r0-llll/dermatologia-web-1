async function obtenerCarrusel() {
    try {
      const response = await fetch('/carruseldata.json'); // ✅ Se sirve desde public/
      if (!response.ok) {
        throw new Error(`Error al cargar datos: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error.message);
      return [];
    }
  }
  
  async function loadCarrusel() {
    const slides = document.getElementById('slides');
    if (!slides) return;
  
    const images = await obtenerCarrusel();
  
    slides.innerHTML = ''; // Limpia contenido previo
  
    images.forEach(img => {
      const image = document.createElement('img');
      image.src = img.image;
      image.alt = img.alt;
      image.className = 'w-full h-96 object-cover rounded-2xl';
      slides.appendChild(image);
    });
  }
  
  document.addEventListener('DOMContentLoaded', loadCarrusel);
  