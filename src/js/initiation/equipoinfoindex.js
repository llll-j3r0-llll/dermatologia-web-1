async function obtenerInfoEquipo() {
    try {
      const response = await fetch('/equipoinfodata.json'); // Se sirve desde /public/
      if (!response.ok) {
        throw new Error(`Error al cargar los datos: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener la información del equipo:', error.message);
      return null;
    }
  }
  
  async function cargarInfoEquipo() {
    const contenedorImagen = document.querySelector('.imagen-equipo img');
    const contenedorTexto = document.querySelector('.info-equipo p');
  
    const datos = await obtenerInfoEquipo();
    if (!datos) return;
  
    if (contenedorImagen) {
      contenedorImagen.src = datos.imagen;
      contenedorImagen.alt = datos.alt;
    }
  
    if (contenedorTexto) {
      contenedorTexto.textContent = datos.descripcion;
    }
  }
  
  document.addEventListener('DOMContentLoaded', cargarInfoEquipo);
  