filterObjects("all");

function filterObjects(caracteristica){
    let box= document.getElementsByClassName("box")
    if(caracteristica == "all"){
      caracteristica="";  
    } 
    for (let i = 0; i < box.length; i++) {
        removeClass(box[i], "show");
        if (box[i].className.indexOf(caracteristica) > -1) addClass(box[i],"show")
    }
}

function addClass(element,name){
    let array1= element.className.split(" ");
    let array2= name.split(" ");
    for ( let i = 0; i < array2.length; i++) {
        if(array1.indexOf(array2[i]) == -1){
            element.className += " "+ array2[i];
        }
    }
}

function removeClass(element, name){
    let array1= element.className.split(" ");
    let array2= name.split(" ");
    for (let i = 0; i < array2.length; i++) {
        while(array1.indexOf(array2[i])> -1){
            array1.splice(array1.indexOf(array2[i]),1);
        }
    }
    element.className =array1.join(" ")
}


