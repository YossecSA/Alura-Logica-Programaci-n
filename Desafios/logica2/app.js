
//Ejercicio 2
let titulo = document.querySelector('h1');
titulo.textContent = 'Hora del Desafio';

//Ejercicio 3
function consola(){
    console.log('El botón fue clicado');
}

//Ejercicio 4
function ciudad(){
    let nombreCiudad = prompt('¿Nombre de la ciudad de Brasil?')
    alert(`Estuve en ${nombreCiudad} y me acordé de ti`)
}

//Ejercicio 5
function mensaje(){
    alert('Yo amo JS');
}
function suma(){
    let valor1 = Number(prompt('Ingresa un número: '))
    let valor2 = Number(prompt('Ingresa un número: '))
    let suma = valor1 + valor2;
    alert(`El resultado es ${suma}`)
}