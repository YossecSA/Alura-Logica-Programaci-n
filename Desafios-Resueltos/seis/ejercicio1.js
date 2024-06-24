//Ejercicio 1
function calculoIMC(altura, peso) {
    return altura * peso;
}

//Ejercicio 2

function factorial(numero) {
    // Verificar si el número es negativo
    if (numero < 0) {
        return "Error: No se puede calcular el factorial de un número negativo";
    }

    // valor es 0 = 1
    if (numero === 0) {
        return 1;
    }

    let resultado = 1;

    // Calcular el factorial usando un bucle while
    while (numero > 0) {
        resultado *= numero;
        numero--;
    }

    return resultado;
}
//console.log(factorial(5))

//Ejercicio 3
function convertirDolaresAReales(valorEnDolares) {
    const tasaDeCambio = 4.8;
    return valorEnDolares * tasaDeCambio;
}

//Ejercicio 4
function perimetro(altura, ancho) {
    return 2(altura + ancho);
}
function area(altura, ancho) {
    return altura * ancho;
}

function monstrarInformacion(altura, ancho) {
    return `El perimetro es ${perimetro(altura, ancho)} y el area es ${
        (altura, ancho)
    }`;
}

//Ejercicio 5
function informacionCircular(radio) {
    return `El perimetro circular es ${perimetroCircular(
        radio
    )} y el area circular es: ${areaCirular(radio)}`;
}
function areaCirular(radio) {
    return 3.14 * radio ** 2;
}
function perimetroCircular(radio) {
    return 2 * 3.14 * radio;
}

//Ejercicio 6
function tablaMultilicarValor(numero) {
    let inicializar = 0;

    while (inicializar <= 12) {
        console.log(`${inicializar} * ${numero} = ${inicializar * numero}`);
        inicializar++;
    }
    return;
}
tablaMultilicarValor(5);
