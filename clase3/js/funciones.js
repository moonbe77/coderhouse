
var nuevaFuncion = function () {
    console.log('Hola mundo de las funciones')
}

nuevaFuncion()
// prompt("dime un numero", 55)
var sumar =  function (a, b){
    console.log("resultado es: ", a + b)

    return a+b
}
// console.log(sumar(55, 2))
var numerosAOperar= [2,3,5]


var operar = function (arr){
    var arrayOpera = []
    arrayOpera[0]= arr[0]+arr[1]+arr[2]
    // arrayOpera[1]= a-b-c

    return arrayOpera
}

// var res = operar([55,33,11])

var operar = function (a,b){
    var arrayOpera = []
    arrayOpera[0]= a+b
    arrayOpera[1]= a-b

    return arrayOpera
}
var operarAutomatico = (function(a, b){
    console.log(a+b)
    return a+b
})(2,6)

/* operarAutomatico()
var a = Number(prompt("primer numero", 55))
var b = Number(prompt("segundo numero", 33))
var res = operar(a,b)

console.log("resultado es: ", res) */