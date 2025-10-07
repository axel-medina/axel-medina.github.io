let boton_like1 = document.getElementById("like_button1");
let contador = document.getElementById("contador");

var clics = 0;

boton_like1.addEventListener("click", function(){
    clics++;
    if (clics == 1){
        contador.textContent = clics + " like";
    }else{
        contador.textContent = clics + " likes";
    }
 
    setTimeout(() => {
        alert('Has dado me gusta a "ninja"');
    }, 10); // 10 ms bastan para dejar que el DOM se actualice
}
);

let boton_like2 = document.getElementById("like_button2");
let contador2 = document.getElementById("contador2");

var clics2 = 0;

boton_like2.addEventListener("click", function(){
    clics2++;
    if (clics2 == 1){
        contador2.textContent = clics2 + " like";
    }else{
        contador2.textContent = clics2 + " likes";
    }
    setTimeout(() => {
        alert('Has dado me gusta a "ninja"');
    }, 10); // 10 ms bastan para dejar que el DOM se actualice
}
);

function changeText(element){
    element.innerText = "Cerrar sesión";
    element.style.backgroundColor = "red";
}
function hide(element){
    element.remove();
}