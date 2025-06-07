// src/js/initiation/serviciosolicitadosdata.js

async function obtenerServicios() {
    try {
      const response = await fetch("serviciosolicitadosdata.json");
      if (!response.ok) {
        throw new Error(`Error al cargar los datos: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener los servicios:", error.message);
      return null;
    }
  }
  
  async function cargarServicios() {
    const grid = document.querySelector(".servicios-grid");
    if (!grid) {
      console.error("No se encontró el contenedor .servicios-grid");
      return;
    }
  
    const servicios = await obtenerServicios();
    if (!servicios) return;
  
    servicios.forEach(servicio => {
      const card = document.createElement("div");
      card.classList.add("servicio-card");
  
      card.innerHTML = `
        <img src="${servicio.imagen}" alt="${servicio.alt}">
        <h3>${servicio.titulo}</h3>
        <p>${servicio.descripcion}</p>
        <blockquote>${servicio.testimonio}</blockquote>
      `;
  
      grid.appendChild(card);
    });
  }
  
  document.addEventListener("DOMContentLoaded", cargarServicios);
  