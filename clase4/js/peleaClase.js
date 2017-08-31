//Programa echo por matias  en clase con todos

function Personaje (nombre, vida, golpe, turno){
    this.nombre = nombre
    this.vida = vida
    this.golpe = golpe
    this.turno = turno // true false
}

var jugador1 = new Personaje('hulk', 5000, 2000, false)
var jugador2 = new Personaje('thor', 4500, 3000, true, 5000)

var accionGolpear =  function (vidaOponente, golpeMax){
    var golpeAtacante = Math.round(Math.random() * golpeMax)
    var resto = vidaOponente - golpeAtacante
    console.log("el jugador golpeo", golpeAtacante , " y la vida es del oponente ", vidaOponente, " le queda de vida ", resto )
    return resto
}
var juego= function(jugador1, jugador2){
    if(jugador1.turno){
        jugador2.vida = accionGolpear(jugador2.vida, jugador1.golpe)
        jugador2.turno = true
        jugador1.turno = false
        
    }else{
        jugador1.vida = accionGolpear(jugador1.vida, jugador2.golpe)
        jugador1.turno = true
        jugador2.turno = false
    }
}

while(jugador1.vida > 0 && jugador2.vida > 0){
    juego(jugador1, jugador2)
}

if(jugador1.vida <= 0){
    console.log("gano el jugador 2")
}else{
    console.log("gano el jugador 1")
}