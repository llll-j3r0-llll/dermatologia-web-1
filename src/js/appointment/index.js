// Crear una cita
async function createAppointment(data) {
  try {
    // Obtiene el array de citas desde localStorage o un array vacío si no existe
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    // Agrega la nueva cita al array
    appointments.push(data);
    // Guarda el array actualizado en localStorage
    localStorage.setItem('appointments', JSON.stringify(appointments));
  } catch (error) {
    // Muestra el error en consola si ocurre alguno
    console.error('Error:', error.message);
  }
}

// Actualizar una cita (por índice)
async function updateAppointment(index, newData) {
  try {
    // Obtiene el array de citas desde localStorage o un array vacío si no existe
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    // Verifica si existe una cita en el índice dado
    if (appointments[index]) {
      // Actualiza la cita en el índice con los nuevos datos
      appointments[index] = { ...appointments[index], ...newData };
      // Guarda el array actualizado en localStorage
      localStorage.setItem('appointments', JSON.stringify(appointments));
    } else {
      // Lanza un error si el índice no existe
      throw new Error('Índice no encontrado');
    }
  } catch (error) {
    // Muestra el error en consola si ocurre alguno
    console.error('Error:', error.message);
  }
}

// Eliminar una cita (por índice)
async function deleteAppointment(index) {
  try {
    // Obtiene el array de citas desde localStorage o un array vacío si no existe
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    // Verifica si existe una cita en el índice dado
    if (appointments[index]) {
      // Elimina la cita del array en el índice dado
      appointments.splice(index, 1);
      // Guarda el array actualizado en localStorage
      localStorage.setItem('appointments', JSON.stringify(appointments));
    } else {
      // Lanza un error si el índice no existe
      throw new Error('Índice no encontrado');
    }
  } catch (error) {
    // Muestra el error en consola si ocurre alguno
    console.error('Error:', error.message);
  }
}

// Obtener todas las citas
async function getAppointment() {
  try {
    // Devuelve el array de citas desde localStorage o un array vacío si no existe
    return JSON.parse(localStorage.getItem('appointments')) || [];
  } catch (error) {
    // Muestra el error en consola si ocurre alguno y retorna un array vacío
    console.error('Error:', error.message);
    return [];
  }
}

// Renderizar la lista de citas en el DOM
async function renderAppointments() {
  // Obtiene el elemento UL o contenedor donde se mostrarán las citas
  const listaCitas = document.getElementById('lista-citas');
  // Limpia el contenido actual del contenedor
  listaCitas.innerHTML = '';
  // Obtiene todas las citas almacenadas
  const appointments = await getAppointment();
  // Recorre cada cita y la agrega al DOM
  appointments.forEach((cita, index) => {
    // Crea un elemento de lista para la cita
    const citaItem = document.createElement('li');
    citaItem.classList.add('cita-item');
    // Agrega el contenido HTML de la cita
    citaItem.innerHTML = `
      <strong>${cita.nombre}</strong><br>
      Fecha: ${cita.fecha}<br>
      Hora: ${cita.hora}<br>
      Médico: ${cita.medico}<br>
      Estado: <span style="color: green;">${cita.estado}</span>
      <br>
      <button class="editar-cita" data-index="${index}">Editar</button>
      <button class="eliminar-cita" data-index="${index}">Eliminar</button>
    `;
    // Añade el elemento de la cita al contenedor
    listaCitas.appendChild(citaItem);
  });

  // Asigna el evento click a todos los botones de eliminar
  document.querySelectorAll('.eliminar-cita').forEach(btn => {
    btn.addEventListener('click', async function () {
      // Obtiene el índice de la cita a eliminar
      const idx = this.getAttribute('data-index');
      // Llama a la función para eliminar la cita
      await deleteAppointment(idx);
      // Vuelve a renderizar la lista de citas
      renderAppointments();
    });
  });

  // Asigna el evento click a todos los botones de editar
  document.querySelectorAll('.editar-cita').forEach(btn => {
    btn.addEventListener('click', async function () {
      // Obtiene el índice de la cita a editar
      const idx = this.getAttribute('data-index');
      // Solicita al usuario el nuevo estado de la cita
      const nuevoEstado = prompt('Nuevo estado de la cita:', 'Agendada');
      // Si el usuario ingresa un estado, actualiza la cita
      if (nuevoEstado) {
        await updateAppointment(idx, { estado: nuevoEstado });
        // Vuelve a renderizar la lista de citas
        renderAppointments();
      }
    });
  });
}

// Espera a que el DOM esté cargado para asignar eventos y renderizar citas
document.addEventListener('DOMContentLoaded', function () {
  // Obtiene el formulario de citas
  const form = document.getElementById('form-cita');
  // Renderiza las citas existentes al cargar la página
  renderAppointments();

  // Asigna el evento submit al formulario
  form.addEventListener('submit', async function (e) {
    // Previene el comportamiento por defecto del formulario (recargar la página)
    e.preventDefault();

    // Obtiene los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const medico = document.getElementById('medico').value;

    // Valida que todos los campos estén completos
    if (!nombre || !fecha || !hora || !medico) {
      alert('Por favor completa todos los campos');
      return;
    }

    // Crea el objeto de la nueva cita
    const appointmentData = {
      nombre,
      fecha,
      hora,
      medico,
      estado: 'Agendada'
    };
    // Llama a la función para crear la cita
    await createAppointment(appointmentData);
    // Limpia el formulario
    form.reset();
    // Vuelve a renderizar la lista de citas
    renderAppointments();
  });
});
