//ejercicios clase 3
/*var nombre = prompt("Escribe tu nombre", nombre)
var apellido = prompt("Escribe tu Apellido", apellido)

var mostrarDatos = function (n,a){    
    console.log("datos del usuario: ", n ," ",a)
} 
mostrarDatos(nombre,apellido)*/

var diaSemana=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]
var diaUsuario = prompt("Escribe un dia de la semana").toLowerCase()

/*var dia = function(i,dS,dU){
    if (dU == dS[i]){
        console.log(i)
            if(i>4){console.log("Es fin de semana")
                }else{
                    console.log("Es dia de semana")
                }        
        }
    }       

for (var i = 0; i < diaSemana.length; i++) {
    //var element = diaSemana[i];
      dia(i,diaSemana,diaUsuario)       
}*/


//version Matias

var compararDias=function(listadoDias,dia){
    for (var i = 0; i < diaSemana.length; i++) {
        //console.log(diaSemana[i])
        if (listadoDias[i]===dia){
            console.log(i)
            if(i>4){
                console.log("Es fin de semana")
                return dia
            }else{
                console.log("Es dia de semana")     
                return dia           
            }
        }        
    }
}

compararDias(diaSemana,diaUsuario)

