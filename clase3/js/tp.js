/* var nombreUsuario = prompt("dime tu nombre", "Matias")
var apellidoUsuario =prompt("dime tu apellido", "Blayer")

var datosUsuario = function(nombre, apellido){
    return nombre + apellido
}

datosUsuario(nombreUsuario, apellidoUsuario) */

var arrayDias = ["lunes", "martes", "miercoles", "sabado","domingo"]
var diaUsuario = "lunes"
var compararDias = function(listadoDias, dia){
    for (var i = 0; i < listadoDias.length; i++) {
        console.log(listadoDias[i])
       if(listadoDias[i] === dia){
        if(i > 2 ){
            return "es fin de semana"
        }else{
            return "es dia de semana"
        }
       }
    }
}
var res = compararDias(arrayDias, diaUsuario)
console.log("hoy es", res)