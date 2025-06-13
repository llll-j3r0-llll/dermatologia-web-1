// Crear un mensaje
async function createMessage(data) {
  try {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(data);
    localStorage.setItem('messages', JSON.stringify(messages));
  } catch (error) {
    console.error('Error al crear el mensaje:', error.message);
  }
}

// Actualizar un mensaje
async function updateMessage(index, newData) {
  try {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    if (messages[index]) {
      messages[index] = { ...messages[index], ...newData };
      localStorage.setItem('messages', JSON.stringify(messages));
    } else {
      throw new Error('Índice no encontrado');
    }
  } catch (error) {
    console.error('Error al actualizar el mensaje:', error.message);
  }
}

// Eliminar un mensaje
async function deleteMessage(index) {
  try {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    if (messages[index]) {
      messages.splice(index, 1);
      localStorage.setItem('messages', JSON.stringify(messages));
    } else {
      throw new Error('Índice no encontrado');
    }
  } catch (error) {
    console.error('Error al eliminar el mensaje:', error.message);
  }
}

// Obtener todos los mensajes
async function getMessages() {
  try {
    return JSON.parse(localStorage.getItem('messages')) || [];
  } catch (error) {
    console.error('Error al obtener los mensajes:', error.message);
    return [];
  }
}

// Renderizar mensajes en la lista
async function renderMessages() {
  const lista = document.getElementById('lista-mensajes');
  lista.innerHTML = '';
  const messages = await getMessages();

  messages.forEach((msg, index) => {
    const li = document.createElement('li');
    li.classList.add('mensaje-item');
    li.innerHTML = `
      <strong>${msg.nombre}</strong> (${msg.correo})<br>
      <em>${msg.asunto}</em><br>
      ${msg.mensaje}<br>
      <button class="editar-mensaje" data-index="${index}">Editar</button>
      <button class="eliminar-mensaje" data-index="${index}">Eliminar</button>
    `;
    lista.appendChild(li);
  });

  // Botones de eliminar
  document.querySelectorAll('.eliminar-mensaje').forEach(btn => {
    btn.addEventListener('click', async function () {
      const idx = this.getAttribute('data-index');
      await deleteMessage(idx);
      renderMessages();
    });
  });

  // Botones de editar
  document.querySelectorAll('.editar-mensaje').forEach(btn => {
    btn.addEventListener('click', async function () {
      const idx = this.getAttribute('data-index');
      const messages = await getMessages();
      const mensajeActual = messages[idx];

      // Pedir todos los campos
      const nuevoNombre = prompt('Editar nombre:', mensajeActual.nombre) || mensajeActual.nombre;
      const nuevoCorreo = prompt('Editar correo:', mensajeActual.correo) || mensajeActual.correo;
      const nuevoAsunto = prompt('Editar asunto:', mensajeActual.asunto) || mensajeActual.asunto;
      const nuevoMensaje = prompt('Editar mensaje:', mensajeActual.mensaje) || mensajeActual.mensaje;

      const nuevosDatos = {
        nombre: nuevoNombre.trim(),
        correo: nuevoCorreo.trim(),
        asunto: nuevoAsunto.trim(),
        mensaje: nuevoMensaje.trim()
      };

      await updateMessage(idx, nuevosDatos);
      renderMessages();
    });
  });
}

// Cargar y asignar eventos
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-contacto');
  renderMessages();

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !correo || !asunto || !mensaje) {
      alert('Por favor completa todos los campos.');
      return;
    }

    const nuevoMensaje = {
      nombre,
      correo,
      asunto,
      mensaje
    };

    await createMessage(nuevoMensaje);
    form.reset();
    renderMessages();
  });
});
