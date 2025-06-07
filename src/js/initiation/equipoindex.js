async function obtenerEquipo() {
    try {
      const response = await fetch('public/initiation/equipodata.json'); // ✅ Se asume que está en `public/`
      if (!response.ok) {
        throw new Error(`Error al cargar datos: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error al obtener el equipo médico:', error.message);
      return [];
    }
  }
  
  async function cargarEquipo() {
    const contenedor = document.querySelector('.equipo-grid');
    if (!contenedor) return;
  
    const equipo = await obtenerEquipo();
  
    contenedor.innerHTML = ''; // Limpia el contenido anterior
  
    equipo.forEach(miembro => {
      const card = document.createElement('div');
      card.className = 'doctor-card';
  
      card.innerHTML = `
        <img src="${miembro.imagen}" alt="${miembro.alt}">
        <h3>${miembro.nombre}</h3>
        <p>${miembro.especialidad}</p>
        <p>${miembro.descripcion}</p>
      `;
  
      contenedor.appendChild(card);
    });
  }
  
  document.addEventListener('DOMContentLoaded', cargarEquipo);
  