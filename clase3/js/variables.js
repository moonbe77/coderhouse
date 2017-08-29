
var global="global"

var func = function (){
    var local = "local"
        console.log(global)
        global = "cambie"   //MALA PRACTICA no modificar variables globales dentro de una funcion
        console.log(global)
}

func()
console.log(global)