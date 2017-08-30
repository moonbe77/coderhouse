/*
Bernardo Munz 
moonbe77@gmail.com
camada 2390
*/

var pedirDatos = function(){
  var datos =[]  
     datos[0] = Number(prompt("Ingresa un numero"))
     datos[1] = Number(prompt("Ingresa otro numero"))
     datos[2] = prompt("Ingresa el tipo de operacion que desear realizar, +, -, *, /,")
        
     if (datos[0] != "" && datos[1] != "" && datos[2] != "" ){
            calcular (datos[0],datos[1],datos[2])
        }else{
            pedirDatos()
        }
}

var calcular=function(num1, num2, operacion){
    switch (operacion) {
        case "+":
            var res = num1 + num2              
            break;
        case "-":
            var res = num1 - num2            
            break;
        case "*":
            var res = num1 * num2              
            break;
        case "/":
            var res = num1 / num2              
            break;
    
        default:
        console.log("El Operador no es correcto")
            break;
    }    
    console.log("El resultado de",num1,operacion,num2,"=", res)
    return res
}

pedirDatos()