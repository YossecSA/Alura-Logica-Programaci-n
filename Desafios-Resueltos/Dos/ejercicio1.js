//Ejercicio 1
let diaSemana = prompt('¿Qué día de la semana es?')
let diaSemanaMinuscula = diaSemana.toLocaleLowerCase();

if(diaSemanaMinuscula == 'sabado' || diaSemanaMinuscula == 'domingo'){
    alert('¡Buen fin de semana!');
}else{
    alert('¡Buena semana!');
}