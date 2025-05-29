document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-cita');
  const listaCitas = document.getElementById('lista-citas');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const medico = document.getElementById('medico').value;

    if (!nombre || !fecha || !hora || !medico) {
      alert('Por favor completa todos los campos');
      return;
    }

    const citaItem = document.createElement('li');
    citaItem.classList.add('cita-item');
    citaItem.innerHTML = `
      <strong>${nombre}</strong><br>
      Fecha: ${fecha}<br>
      Hora: ${hora}<br>
      Médico: ${medico}<br>
      Estado: <span style="color: green;">Agendada</span>
    `;

    listaCitas.appendChild(citaItem);
    form.reset();
  });
});
