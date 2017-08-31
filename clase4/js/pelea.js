//ejercicio pasado por Matias PELEA DE DOS SUPERHEROE

function Heroe(nombreH, vidaH){
    this.nombre = nombreH
    this.vida = vidaH  
    /*this.golpear = function (){
        var g=Math.floor(Math.random() * 11);
        return g
    } */
}

var pepe = new Heroe ("pepe", 100)
var tito = new Heroe ("tito", 100)

var golpear = function(heroe){
    var golpe=Math.floor(Math.random() * 11);
   heroe.vida = heroe.vida - golpe
   console.log("La vida de ",heroe.nombre,"es de",heroe.vida) 
}

/*var turno = function (){
console.log("cambiar de turno")
}*/

while (pepe.vida > 0 && tito.vida > 0) {
    golpear(pepe)
    golpear(tito)
}