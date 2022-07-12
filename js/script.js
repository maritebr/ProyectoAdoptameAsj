const hamburguesa = document.getElementById('hamburguesa-menu');
const header = document.getElementById('header');
let modals = document.getElementsByClassName("modal");
let modalOpenBtn = document.getElementsByClassName("modalOpenBtn");
let currentModal = null;
const formulario1 = document.getElementById('formulario1');
const inputs = document.querySelectorAll('#formulario1 input');


//MENU HAMBURGUESA
hamburguesa.addEventListener('click', function () {
    header.classList.toggle('visible')
})

header.addEventListener('click', function () {
    if (header.classList.contains('visible')) {
        header.classList.remove('visible')
    }
}) 

//MODALES
// funcion para abrir el modal a traves del id
const openModal = (id) => {
  for (let i = 0; i < modals.length; i++) {
    if (modals[i].getAttribute('id') == id) {
      currentModal = modals[i];
      currentModal.style.display = "block";
      break;
    }
  }
}
// Cuando el usuario hace clic en el botón, abre modal con el mismo identificación
modalOpenBtn.onclick = () => {
  let currentID = modalOpenBtn.getAttribute('id');
  openModal(currentID);
}
// Cuando el usuario haga clic en cualquier lugar fuera del modal o la X, cierre
window.onclick = (event) => {
  if (event.target == currentModal || event.target.getAttribute('class') == 'modalClose') {
    currentModal.style.display = "none";
  }
}

//VALIDACION LOGIN
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	password: /^.{4,12}$/, // 4 a 12 digitos.
}

const campos = {
	usuario: false,
	password: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


//ACCESO LOGIN
const login = () =>{

	let user = document.getElementById("usuario").value;
	let pass = document.getElementById("password").value;

	if (user == "Maria" && pass == "123456") {
		window.location="index1.html"
	}else{
		launch_toast()
	}
} 

//toast
const launch_toast =() => {
    
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}
