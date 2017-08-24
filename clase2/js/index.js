/*var edad = Number(prompt("dime tu edad", 20))

if (edad === 20){
    console.log ("tienes " + edad)
} else if (edad < 25){
    console.log("tienes ahora ", edad)
    if (edad > 19){
        console.log("eres mayor de 19")
    }
}else{
    console.log('por defecto tienes', edad) //la coma en EC6 se usa para concatenar 
}*/

var diaDeSemana = prompt("decime un dia de la semana", 'lunes').toLowerCase()
    dia4semana = "jueves"
switch (diaDeSemana){
    case 'lunes':
        console.log("es lunes")
        break
    case 'martes': 
        console.log("es martes")
        break
    case 'miercoles': 
        console.log("es miercoles")
        break
    case dia4semana: 
        console.log("es jueves")
        break
    case 'viernes':  
        console.log("es viernes")
        break
    case 'sabado': 
        console.log("es sabado")
        break
    case 'domingo': 
        console.log("es domingo")
        break 
    default:
        console.log("ningun dia valido",diaDeSemana)       
}

//la primer parte de la sentencia se ejecuta una vez y no se ejecuta el incremento
for (var i = 0; i <= 10; i++) {
    console.log ("i",i)    
}
n = 0
while(n < 10){
    n++
    console.log("n",n)
}
console.log("fuera del while",n)

var n=8
var x=0
do{
n++
x +=n
console.log(x)
}while(n < 8)



/*var  numeroDia = 6;

switch (numeroDia) { 
   	case 1: 
      	    console.log("Es Lunes");
      	    break 
   	case 2: 
      	    console.log("Es Martes"); 
      	break 
   	case 3: 
      	    console.log("Es Miércoles");
      	    break 
   	case 4: 
      	    console.log("Es Jueves");
      	    break 
   	case 5: 
      	    console.log("Es viernes"); 
      	    break 
   	case 6:                              //como 6 y 7 son fin de semana lo correcto es que segun cualquier de esos valores se ejecuta la misma sentencia
   	case 7: 
      	    console.log("Es fin de semana"); 
      	    break 
   	default: 
      	    document.write("Ese día no existe"); 
};*/