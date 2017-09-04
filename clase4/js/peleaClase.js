//Programa echo por matias  en clase con todos

function Personaje (nombre, vida, golpe, turno){
    this.nombre = nombre
    this.vida = vida
    this.golpe = golpe
    this.turno = turno // true false
}

var jugador1 = new Personaje('hulk', 5000, 2000, false)
var jugador2 = new Personaje('thor', 4500, 3000, true, 5000)

var accionGolpear =  function (vidaOponente, golpeMax, nombreGolpea, nombreRecibe){
    var golpeAtacante = Math.round(Math.random() * golpeMax)
    var resto = vidaOponente - golpeAtacante
    console.log(nombreGolpea," golpeo", golpeAtacante , " la vida de ",nombreRecibe,"es ", vidaOponente, " le queda de vida ", resto )
    return resto //devuelve el resto de vida del oponente
}
var juego= function(jugador1, jugador2){
    if(jugador1.turno){
        //si es turno de golpear del jugador 1
        jugador2.vida = accionGolpear(jugador2.vida, jugador1.golpe, jugador1.nombre, jugador2.nombre)
        jugador2.turno = true
        jugador1.turno = false
        
    }else{
        //si es turno del jugador 2
        jugador1.vida = accionGolpear(jugador1.vida, jugador2.golpe, jugador2.nombre, jugador1.nombre)
        jugador1.turno = true
        jugador2.turno = false
    }
}

while(jugador1.vida > 0 && jugador2.vida > 0){
    juego(jugador1, jugador2)
}

if(jugador1.vida <= 0){
    console.log("gano",jugador2.nombre)
}else{
    console.log("gano",jugador1.nombre)
}
