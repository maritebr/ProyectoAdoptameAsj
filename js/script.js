const hamburguesa = document.getElementById('hamburguesa-menu');
const header = document.getElementById('header');

//menu hamburguesa

hamburguesa.addEventListener('click', function () {
    header.classList.toggle('visible')
})

header.addEventListener('click', function () {
    if (header.classList.contains('visible')) {
        header.classList.remove('visible')
    }
}) 


//modal busqueda

let modals = document.getElementsByClassName("modal");
let modalOpenBtn = document.getElementsByClassName("modalOpenBtn");
let currentModal = null;

// funcion para abrir el modal a traves del id
function openModal(id) {
  for (i = 0; i < modals.length; i++) {
    if (modals[i].getAttribute('id') == id) {
      currentModal = modals[i];
      currentModal.style.display = "block";
      break;
    }
  }
}

// Cuando el usuario hace clic en el botón, abre modal con el mismo identificación
modalOpenBtn.onclick = function() {
  let currentID = modalOpenBtn.getAttribute('id');
  openModal(currentID);
}

// Cuando el usuario haga clic en cualquier lugar fuera del modal o la X, cierre
window.onclick = function(event) {
  if (event.target == currentModal || event.target.getAttribute('class') == 'modalClose') {
    currentModal.style.display = "none";
  }
}
