let numUsuario = prompt('¿Ingresa un numero entero?')

if(numUsuario >= 0){
    alert(`El numero es postivio, el número es: ${numUsuario}`)
}else if(numUsuario <= 0){
    alert(`El numero es negativo, el número es: ${numUsuario}`)
}else{
    alert(`El numero: ${numUsuario} es neutro`)
}