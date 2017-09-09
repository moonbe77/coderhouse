var desarrolloJuego = (function() {
    var juego;

    function init() {
        function crearJugadores() {
            var jugador1 = new Personaje("Hulk", 5000, true);
            var jugador2 = new Personaje("Thor", 2000, false);

            return {
                jugador1: jugador1,
                jugador2: jugador2
            }
        }

        return {
            metodoJugadoresNuevos: function() {
                crearJugadores();
            }
        }
    }

    return {
        crearInstanciaJuego: function() {
            if (!juego) {
                juego = init();
                return juego;
            }
        }
    }
}())

var testeoInstancia = desarrolloJuego.crearInstanciaJuego();