// Para retornar contenido de una funcion usamos la palabra reservada return
function sumar (){
    return 2+2
}

// La idea de una funcion es poder reutilizar codigo por eso la mayoria de las veces vamos a pasar parametros
var sumar = function (a,b){
    // Las variables a y b existen unicamente dentro de nuestra funcion y no hace falta declararlas
    return a + b
}

var sumarTresNumeros = function (a,b,c){
    // Las variables a y b existen unicamente dentro de nuestra funcion y no hace falta declararlas
    return a + b + c
    console.log('Esto no se ejecuta')
}

// para pasar los parametros llamamos a la funcion indicandole el contenido por el que vamos a reemplazar nuestras variables.
sumar(9,8)

sumarTresNumeros(1,2,3)