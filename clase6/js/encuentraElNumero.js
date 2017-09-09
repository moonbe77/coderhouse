/*
definie un numero aleatorio entre 0 y 10
comparar el numero ingresado por el usuario
si es igual ganaste si no sumar otro intento
definir cuantos intentos le quedan y si estuvo cerca o no??
*/ 

var nroRandom = Math.floor(Math.random()*11)
var intentos = 0
var intentosRestante = true //pasara a false cuando se cumplan 10 intentos con la funcion validar intentos
var compararNumeros = function(nR, nU){
    if (nR - nU == 0){
            console.log("ganaste")
        }else if (nU+2 == nR || nU-2 == nR){
            intentos++
            console.log("Intentos: ",intentos)        
            console.log("El numero ",nU," esta cerca")
            juegar()
        }else{
            intentos++
            console.log("Intentos: ",intentos)        
            juegar()
        }
    }
var validarIntentos = function(){
    if (intentos == 8){
        console.log("te queda 2 intento")
        intentosRestante=true  //no es necesario aclararlo
    }else if(intentos==9){
        console.log("te queda 1 intento")
        intentosRestante=true  //no es necesario aclararlo       
    }else if (intentos==10){
        console.log("PERDISTE")
        intentosRestante=false        
    }    
    return intentosRestante
}

var juegar = function(){
    if(validarIntentos()){
        var numUsr = Number(prompt("ingresa un numero",0))
        compararNumeros(nroRandom,numUsr)
    }
}
juegar()