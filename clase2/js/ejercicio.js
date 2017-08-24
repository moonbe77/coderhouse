//var num1=prompt("ingresa un numero")

do{
    var num1=Number(prompt("ingresa un numero")) 
}while( isNaN(num1) )

do{
    var num2=Number(prompt("ingresa otro numero")) 
}while( isNaN(num2) )

var res = num1 + num2
console.log("La suma es", res)
