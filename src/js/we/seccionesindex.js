async function cargarPorqueElegirnos() {
    try {
      const response = await fetch('/porqueElegirnos.json'); // Ajusta si está en otra ruta
      if (!response.ok) {
        throw new Error(`Error al cargar datos: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
  
      const contenedor = document.querySelector('.porque-elegirnos .card-container');
      if (!contenedor) {
        console.error('Contenedor .porque-elegirnos .card-container no encontrado en el HTML.');
        return;
      }
  
      // Limpia el contenido previo si lo hay
      contenedor.innerHTML = '';
  
      // Recorre el arreglo y crea las tarjetas dinámicamente
      data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
  
        card.innerHTML = `
          <img src="${item.image}" alt="${item.title}" />
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        `;
  
        contenedor.appendChild(card);
      });
  
    } catch (error) {
      console.error('Error al cargar sección ¿Por qué elegirnos?:', error.message);
    }
  }
  
  // Ejecuta al cargar el DOM
  document.addEventListener('DOMContentLoaded', cargarPorqueElegirnos);
  