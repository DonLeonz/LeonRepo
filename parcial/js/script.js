
function signUp() {
  window.location.href = 'signup.html';
}

function cancel() {
  window.location.href = 'index.html';
}

/* Sign up */

const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóú\s]{2,50}$/;
const apellidosRegex = /^[A-Za-zÁÉÍÓÚáéíóú\s]{2,50}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const celularRegex = /^\d{10}$/;
const estratoRegex = /^[1-9]$|^10$/;
const grupoSanguineoOptions = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const horaTestRegex = /^(7:([0-5][0-9])|([89]|1[01]):([0-5][0-9]))\s?(am)|(2:([0-5][0-9])|([34]|5|6):([0-5][0-9]))\s?pm$/;


function registrar() {

  const nombre = document.getElementById('nombre').value.trim();
  const apellidos = document.getElementById('apellidos').value.trim();
  const email = document.getElementById('email').value.trim();
  const celular = document.getElementById('celular').value.trim();
  const estrato = document.getElementById('estrato').value.trim();
  const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  const grupoSanguineo = document.getElementById('grupoSanguineo').value;
  const fechaTest = document.getElementById('fechaTest').value;
  const horaTest = document.getElementById('horaTest').value.trim();


  const generoElems = document.getElementsByName('genero');
  let genero = '';
  for (let elem of generoElems) {
    if (elem.checked) {
      genero = elem.value;
      break;
    }
  }
  

  const actividadesElems = document.getElementsByName('actividades');
  let actividades = [];
  for (let elem of actividadesElems) {
    if (elem.checked) {
      actividades.push(elem.value);
    }
  }


  if (!nombreRegex.test(nombre)) {
    alert("Nombre inválido. Solo letras y espacios, entre 2 y 50 caracteres.");
    return;
  }

  if (!apellidosRegex.test(apellidos)) {
    alert("Apellidos inválidos. Solo letras y espacios, entre 2 y 50 caracteres.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Email inválido. Por favor, ingrese un email válido.");
    return;
  }

  if (!celularRegex.test(celular)) {
    alert("Celular inválido. Debe contener exactamente 10 dígitos.");
    return;
  }

  if (!estratoRegex.test(estrato)) {
    alert("Estrato inválido. Debe ser un número entre 1 y 10.");
    return;
  }

  if (fechaNacimiento === "") {
    alert("Fecha de nacimiento es requerida.");
    return;
  }

  if (!grupoSanguineoOptions.includes(grupoSanguineo)) {
    alert("Grupo sanguíneo inválido. Seleccione una opción válida.");
    return;
  }

  if (genero === "") {
    alert("Género es requerido.");
    return;
  }

  if (actividades.length === 0) {
    alert("Seleccione al menos una actividad favorita.");
    return;
  }
  
  if (fechaTest === "") {
    alert("Fecha de test es requerida.");
    return;
  }

  if (!horaTestRegex.test(horaTest)) {
    alert("Hora invalida, solo se permiten horas de 7:00 AM a 12:59 PM y 2:00 PM a 7:00 PM");
    return;
  }

  const info = `
    Nombre: ${nombre}
    Apellidos: ${apellidos}
    Email: ${email}
    Celular: ${celular}
    Estrato: ${estrato}
    Fecha de Nacimiento: ${fechaNacimiento}
    Grupo Sanguíneo: ${grupoSanguineo}
    Género: ${genero}
    Actividades Favoritas: ${actividades.join(', ')}
    Fecha Test: ${fechaTest}
    Hora Test: ${horaTest}
  `;
  alert(`Información Registrada:\n${info}`);
}

function cancelar() {
  window.location.href = 'admin.html';
}

/* Parcial */

