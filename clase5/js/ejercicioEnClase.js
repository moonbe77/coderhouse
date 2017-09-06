// Definimos nuestro constructor de autos
var GenerarAutos = function(patente, peso){
    this.patente = patente
    this.peso = peso
}

// Definimos nuestro constructor de camiones
var GenerarCamiones = function(pesoMax){
    this.pesoMax = pesoMax
    this.patentesEnCamion = []
    this.pesoActual= 0
}

// Creamos nuestro camion y autos
var nuevoCamionRojo = new GenerarCamiones(8000)

var auto1 = new GenerarAutos("aaa000", 1000)
var auto2 = new GenerarAutos("aaa001", 200)
var auto3 = new GenerarAutos("aaa002", 3000)
var auto4 = new GenerarAutos("aaa003", 4000)
var auto5 = new GenerarAutos("aaa004", 100)

// Nuestros autos los agregamos en un listado de autos
var galpoAutos = [auto1, auto2, auto3, auto4, auto5]

// comparamos el peso limite del camion con el peso del auto mas el peso del camion en ese momento
// Comparamos el peso actual del camion con el limite
// Validad si esta ya el auto y despues agregar el auto si entra

// Modularizamos nuestro sistema en 3 funciones
// Comparamos las patentes de los autos con los autos ya cargados en el camion
var validarPatentes = function(auto, camion){
    var estadoAuto = camion.patentesEnCamion.indexOf(auto.patente)
    return estadoAuto
}

// Verificamos si el peso del camion sumado el del nuevo auto, supera el limite de peso del camion.
var validarPeso = function(auto, camion){
    if (camion.pesoActual+ auto.peso < camion.pesoMax) {
        return true
    }else{
        return false
    }
}
// Nuestra funcion que se encarga de cargar los autos al camion una vez que ya verificamos que el auto a cargar
// no se encuentra en el camion y el peso lo permite.
var montaCargas = function(auto, camion){
    var estadoAutoEnCamion = validarPatentes(auto, camion)
    var estadoPesoEnCamion = validarPeso(auto, camion)
    console.log("estado del auto para subir: ", estadoAutoEnCamion)
    if(estadoAutoEnCamion === -1 && estadoPesoEnCamion){
        camion.patentesEnCamion.push(auto.patente)
        camion.pesoActual += auto.peso
    }
}
