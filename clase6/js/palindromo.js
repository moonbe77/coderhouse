// palindromos

var palabaraReves=""

var comparar = function (){
    var palabra = prompt("ingresa una palindromo")
    var preves = palabra.split("").reverse() 
for (var i = 0; i < preves.length; i++) {
   palabaraReves =palabaraReves + preves[i].toString()
    console.log(palabaraReves)    
}  
    console.log(preves)
    if (palabra == palabaraReves) {
        console.log(palabra," Es Palindromo")
    }else{
        console.log("No es palindromo")
    }
    
}

comparar()