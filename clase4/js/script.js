//Clase 4

//como crear un objeot?

//var miObjeto = new Object()
//var miObjeto = {}
var miObjeto = {
    nombre: "matias",
    apellido: "Blayer",
    edad: 31
}

function FabricaAutos (modeloAuto, annoAuto, colorAuto, llantasAuto){
    this.modelo = modeloAuto
    this.anno = annoAuto
    this.color = colorAuto
    this.eq = {
        llantas: llantasAuto,
        vidriosElectricos: true
    }
    this.sonar= function (sonido){
        console.log("este auto hace.....", sonido)
    }
}

var palio =new FabricaAutos("fiat",2010,["Blanco","Verde","Rojo"])
var ford = new FabricaAutos("fiesta",2017,["rojo","azul"],"eq")