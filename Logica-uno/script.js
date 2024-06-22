//Variables
let numeroSecreto = 7;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximoIntentos = 3;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);

    /*Este codigo realiza la comparacion */

    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadero la condicion
        alert(
            `Acertaste, el número es: ${numeroUsuario}. Lo hiciste en  ${intentos} ${
                intentos == 1 ? "vez" : "veces"
            } `
        );
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert(`El número secreto es menor`);
        } else {
            alert(`El número secreto es mayor`);
        }
        //Incrementamos el contador cuando no acierta
        //intentos += 1;
        intentos++;

        //palabraVeces = "veces";

        if (intentos > maximoIntentos) {
            alert(`Llegaste al maximo de ${maximoIntentos} intentos`);
            break;
        }
    }
}
