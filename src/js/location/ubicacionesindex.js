// Función para obtener los datos desde el JSON
async function cargarUbicaciones() {
    try {
      const response = await fetch('/ubicacionesdata.json');
      if (!response.ok) {
        throw new Error(`Error al cargar los datos: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error.message);
      return [];
    }
  }
  
  // Función para renderizar las ubicaciones
  async function renderUbicaciones() {
    const ubicaciones = await cargarUbicaciones();
    const container = document.querySelector('.ubicaciones');
  
    ubicaciones.forEach((ubicacion) => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      card.innerHTML = `
        <div class="ubicacion-tag">${ubicacion.sede}</div>
        <iframe src="${ubicacion.mapa}" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <h3>${ubicacion.direccion}</h3>
      `;
  
      container.appendChild(card);
    });
  }
  
  document.addEventListener('DOMContentLoaded', renderUbicaciones);
  