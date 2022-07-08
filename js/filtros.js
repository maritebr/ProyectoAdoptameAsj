filterObjects("all");

function filterObjects(c){
    let x, i;
    x= document.getElementsByClassName("box")
    if(c == "all") c="";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i],"show")
    }

}

function addClass(element,name){
    let i,arr1,arr2;
    arr1= element.className.split(" ");
    arr2= name.split(" ");
    for ( i = 0; i < arr2.length; i++) {
        if(arr1.indexOf(arr2[i]) == -1){
            element.className += " "+ arr2[i];
        }
        
    }
}

function removeClass(element, name){
    let i,arr1,arr2;
    arr1= element.className.split(" ");
    arr2= name.split(" ");
    for ( i = 0; i < arr2.length; i++) {
        while(arr1.indexOf(arr2[i])> -1){
            arr1.splice(arr1.indexOf(arr2[i]),1);
        }
    }
    element.className =arr1.join(" ")
}

//menu hamburguesa

const hamburguesa = document.getElementById('hamburguesa-menu');
const header = document.getElementById('header');

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
