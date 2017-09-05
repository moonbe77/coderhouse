/*
# Crear una funcion para cargar un autos a un camion
​
- El auto tendra que tener al menos patente y peso
- El camnion tiene un peso maximo de carga
- El objeto camnion Debera validar con cada auto ingresado si esta por debajo del peso o si ya no lo puede agregar
- Ademas de almacenar los autos debe tener la posibilidad de validar que no tenga patentes repetidas y que me devuelva todas las patentes que tiene a bordo.
Crear una funcion para cargar un autos a un camion

El auto tendra que tener al menos patente y peso
El camnion tiene un peso maximo de carga
El objeto camnion Debera validar con cada auto ingresado si esta por debajo del peso o si ya no lo puede 
agregar
Ademas de almacenar los autos debe tener la posibilidad de validar 
que no tenga patentes repetidas y que me devuelva todas las patentes que tiene a bordo.
*/

//constructor

function Auto (pat,peso){
     this.patente = pat
     this.peso = peso
}
var camion ={
    pesoMax:10000,
    pesoRestante: 10000,
    petentes :[],
    qtyAuto : 0
}

var crearAuto = function (){
    var patente = "NNN123"//prompt("ingresa la patente", "123NNN")
    //var peso = Math.ceil(Math.random()*10000)
    var peso = Math.floor(Math.random() * (3000 - 1000) ) + 1000
    var autoNuevo =  new Auto(patente,peso) 
   // alert(peso)
     //console.log(autoNuevo)
    return autoNuevo   
}

//validar la patente
var validarPatente = function(patente){
    var estadoAuto= camion.petentes.indexOf(petente)
    return  estadoAuto
}

var cargarAuto = function (peso,patente){
   var estadoPatente=validarPatente(patente)
   if (estadoPatente === -1){
       camion.petentes.push(patente)
        camion.pesoRestante = camion.pesoRestante-peso
        camion.qtyAuto = camion.qtyAuto+1
   }

         
   
    //validar el peso restante con el auto que se creo para subir
 
}

//debugger
/*while (camion.pesoRestante >= 0 ){
    autoNuevo =  crearAuto()
    cargarAuto(autoNuevo.peso, autoNuevo.patente)
    console.log("Peso Restante disponible:",camion.pesoRestante)
    console.log(camion.patente) 
}*/

console.log("Autos cargados: ",camion.qtyAuto)
console.log(camion.petentes)
console.log("Le sobra de peso:", camion.pesoMax-camion.pesoRestante)