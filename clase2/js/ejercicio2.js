var diaSelUsuario= prompt("Ingresa un dia de la semana","Lunes").toLowerCase() //unificar minusculas
var dias =["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]

for (var i = 0; i < dias.length; i++) {    

    if (dias[i]=="Sabado" || dias[i]=="Domingo") {
        console.log('Hoy es', dias[i])
    }
}

switch (diaSelUsuario) {
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
        console.log("es dia de la semana")
        break;
    case 'sabado':
    case 'domingo':
        console.log("es fin de semana")
        break;
    default:
    console.log("No se que dia es")
        break;
}