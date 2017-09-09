function Personaje(nombre, vida, turno) {
    this.nombre = nombre;
    this.vida = vida;
    this.golpe = function(maxGolpe) {
        return Math.round(Math.random() * maxGolpe);
    }
    this.turno = turno;

}