var diaSemana=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]

var diaUsuario = prompt("Escribe un dia de la semana").toLowerCase()

// posicion devuelta por indexOf()
var a = diaSemana.indexOf(diaUsuario);
console.log("IndexOf: "+a) 

for (var i = 0; i < diaSemana.length; i++) {

    if (diaUsuario == diaSemana[i]){
    var element = diaSemana[i]    
        //console.log(element)        

        if (i>=0 && i <= 4){
            console.log("Es dia de semana")
        }else{
            console.log("Es fin de semana")
        }
    break
    }else if(i == 6){
        console.log("Dato invalido")        
    }
}
 

//usando la funcion indexOf()
console.log("usando la funcion indexOf()")
    //var element = diaSemana[i]    
if( a >= 0 && a <= 4 ){        
        console.log("Dia de semana")
       // console.log(element)         
    }else if(a==5 || a ==6){
        console.log("fin de semana")
        //console.log(element)
    }else{
        console.log("Dato invalido")
    }



 

 

 