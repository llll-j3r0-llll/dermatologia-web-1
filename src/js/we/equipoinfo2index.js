async function cargarQuienesSomos() {
    try {
      const response = await fetch('public/we/equipoinfo2data.json');
      const data = await response.json();
  
      const seccion = document.querySelector('.quienes-somos');
      if (!seccion) return;
  
      seccion.innerHTML = `
        <h1>${data.titulo}</h1>
        <p>${data.descripcion}</p>
        <img src="${data.imagen}" alt="${data.alt}" class="img-equipo"/>
      `;
    } catch (error) {
      console.error('Error al cargar la sección ¿Quiénes Somos?:', error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', cargarQuienesSomos);
  