async function cargarServicios() {
    try {
      const response = await fetch('public/services/nuestrosserviciosdata.json'); // Ruta relativa desde el servidor (carpeta `public`)
      const servicios = await response.json();
  
      const contenedor = document.querySelector('.servicios-lista');
  
      servicios.forEach(servicio => {
        const articulo = document.createElement('article');
        articulo.classList.add('servicio');
  
        articulo.innerHTML = `
          <img src="${servicio.imagen}" alt="${servicio.alt}" />
          <h2>${servicio.titulo}</h2>
          <p>${servicio.descripcion}</p>
        `;
  
        contenedor.appendChild(articulo);
      });
  
    } catch (error) {
      console.error('Error al cargar los servicios:', error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', cargarServicios);
  