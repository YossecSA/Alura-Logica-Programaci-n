let numeroSecreto = generarNumeroSecreto();

//Funciones del Sistema

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.textContent = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === numeroSecreto) {
        
    }

    alert(numeroDeUsuario);
    return;
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    return numeroSecreto;
}

//Llamada de las funciones
asignarTextoElemento("h1", "Juego del número secreto!");
asignarTextoElemento("p", "Indica un número del 1 al 10");
