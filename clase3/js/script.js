
console.log("test load script")
/*
//diferentes formas de declarar una funciones
const nuevaFuncion=function (){
    console.log("hola 1")
}  //Matias recomineda usar esta forma de declarar

function otraFuncion (){
    console.log("hola 2")    
}
nuevaFuncion()
otraFuncion()
var nuevaFuncion="sdkjfvhxcvkj"  //al haber declarado la var con "const" no se modifica
nuevaFuncion()*/

var sumar =function (a,b){
    console.log("el valor de la suma es: ",a+b) //la coma se usa para concatenar como el +
    return a+b; //return detiene la ejecucion de la funcion
}

sumar(55,2)
//console.log(sumar(55,10))

/*var operar = function(a,b,c){
    var arrayOpera =[]
        arrayOpera[0] = a+b+c;
        arrayOpera[1] = a-b-c
        return arrayOpera 
}

var resultado = operar(1,2,3)
console.log(operar(1,2,3))
console.log(resultado[0])
console.log(resultado[1])*/

var numerosOperar=[2,3,5]
var operar = function(arr){
    var arrayOpera =[]
        arrayOpera[0] = arr[0]+arr[1]+arr[2]
        arrayOpera[1] = arr[0]-arr[1]-arr[2]
        return arrayOpera 
}

var resultado = operar(numerosOperar)  //para utilizar el resultado de la suma se asigna a una variable que en este caso es una variable
//console.log(operar(1,2,3))
console.log(resultado[0])
console.log(resultado[1])