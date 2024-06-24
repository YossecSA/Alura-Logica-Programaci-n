//Ejercicio 3 - 4 -5

let listaGenerica = [];

function mostrarElementosLista() {
    listaGenerica.push("Ruby");
    listaGenerica.push("GoLang");

    let cantidad = listaGenerica.length;
    while (cantidad >= 0) {
        console.log(listaGenerica[cantidad]);
        cantidad--;
    }
}

// mostrarElementosLista();

//Ejercicio 6
let listaNotas = [17, 18, 10, 5, 20];

function promedioLista(lista) {
    let suma = 0;
    let contador = 0;
    while (contador < lista.length) {
        suma += lista[contador];
        contador++;
    }
    return suma / lista.length;
}
//console.log(promedioLista(listaNotas));

//Ejercicio 7
function numeroMayorMenor(lista) {

    let mayor = 0;
    let contador = 0;
    let menor = lista[contador];

    while (contador < lista.length) {

        if (lista[contador] > mayor) {
            mayor = lista[contador];
        }

        if(lista[contador] < menor){
            menor = lista[contador]
        }

        contador++;
    }

    console.log(`El número mayor es: ${mayor}`);
    console.log(`El número menor es: ${menor}`);
}

numeroMayorMenor(listaNotas)