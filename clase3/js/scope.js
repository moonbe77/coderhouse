// Variable global
var variableGlobal = "Soy una variable global";
console.log(variableGlobal)
// Definimos una funcion para conocer el scope
var estadoVariables = (function (){
    // cuando declaramos una variable en dentro de una funcion esta es local a la funcion
    var local = "Soy una variable Local"
    // Tenemos acceso a las variables globales y podemos modificarlas
    variableGlobal = "soy global pero estoy dentro de una funcion"
    // Podemos crear variables globales dentro de una funcion pero no se tiene que hacer
    variableGlobalDesdeFuncion = "soy una variable global definida dentro de una funcion y esto no se HACE"
    console.log(local)
    console.log(variableGlobal)
    console.log(variableGlobalDesdeFuncion)
}())
console.log(variableGlobal)
console.log("Estoy afuera de la funcion y "+variableGlobalDesdeFuncion)
