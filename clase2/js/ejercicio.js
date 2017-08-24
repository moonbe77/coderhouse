//var num1=prompt("ingresa un numero")

do{
    var num1=Number(prompt("ingresa un numero")) 
}while( isNaN(num1) )

do{
    var num2=Number(prompt("ingresa otro numero")) 
}while( isNaN(num2) )

//otra forma usando operador logico pero siempre te pide los dos numeros
do{
    var num3=Number(prompt("ingresa un numero log")) 
    var num4=Number(prompt("ingresa otro numero log")) 
    
}while( isNaN(num3)||isNaN(num4) )


var res = num1 + num2
console.log("La suma es", res)
var res2 = num3 + num4
console.log("La suma es", res2)

var number = "123"
//if (number == NaN){
   var verificar= isNaN(number)
    console.log(verificar)
    console.log(typeof(number))
    
//}