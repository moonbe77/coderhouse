//Clase 6
/*
## Crear una o mas funciones que efectuen las siguientes tareas

* Contar la cantidad de caracteres tiene el string y guardarlo en una variable llamada *cantidadCaracteres*.

* Contabilizar la cantidad de parrafos existentes.
* La primer letra de cada parrafo convertirla a mayuscula y dejar un espacio luego del punto
* Contabilizar la cantidad de espacios y puntos y guardarlo en una variable llamada *cantidadEspaciosPuntos*
* Guardar en una variable *cantidadLetras* la cantidad de letras del string
*contar la cantidad de vocales
*/
var texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.morbi vel gravida diam, ultricies interdum libero.etiam tempor, nunc eu dignissim rutrum, erat enim blandit magna, ut pretium risus nulla a sem.sed ut augue est.quisque pellentesque condimentum ligula vulputate tempus.curabitur non ex vitae urna vehicula gravida sit amet sit amet quam.phasellus et scelerisque sapien.donec finibus ac odio ac consectetur.integer ligula eros, posuere ac mauris non, pretium euismod elit.fusce porttitor sem quis neque varius ultricies.sed elementum blandit faucibus.donec nisi est, tempor eu neque eget, tempus dignissim libero.ut porttitor sapien eget placerat tristique.ut lacus sem, pulvinar et accumsan vitae, tristique quis sem.lorem ipsum dolor sit amet, consectetur adipiscing elit.nulla facilisi.suspendisse feugiat tempus lectus, ut venenatis lacus.sed et urna purus.morbi tincidunt volutpat consectetur.praesent vel diam efficitur, rhoncus lacus sit amet, feugiat mi.praesent egestas dignissim bibendum.ut congue porta est non maximus.vivamus quis imperdiet risus.cras vitae feugiat leo.fusce bibendum leo eu nisl cursus, quis tempor mi pulvinar.cras vel semper ante.aliquam tristique mauris sit amet viverra hendrerit."

var cantidadCaracteres = texto.length //1218



var parrafos = function (txt) {
     parrafosArray = txt.split(" ")
    return parrafosArray
}
var cantidadParrafos = parrafos(texto).length //158

var txtMayusculaEspacioPunto;

var arrLet=texto.split("")
var posPunto =[]
var newText ="" //texto con los espacios despues de el punto
var cantidadEspaciosPuntosLetras ={
        qtyPuntos : 0,
        qtyEspacios: 0,
        qtyLetras : 0,
        qtyVocales : 0
    }

var arrLet=texto.split("")
  //Pasar a mayuscula despues del punto
  for (var p = 0; p < arrLet.length; p++) {
     var caracter = arrLet[p]  
    if (caracter == "." ){
        if(arrLet[p+1] != undefined){
            var letra = arrLet[p+1]  //cree esta variable para ver si no me daba el error la funcion toUpperCase linea 36
             arrLet[p+1]=letra.toUpperCase() // me da error pero hace lo que tiene que hacer
           arrLet[p] = ". "
           cantidadEspaciosPuntosLetras.qtyPuntos++ //cuento la cantidad de puntos
        }
    }

    if (caracter == "a" || caracter == "e" ||caracter == "i" || caracter == "o" || caracter == "u") {
        cantidadEspaciosPuntosLetras.qtyVocales++
    }
  }    

//espacio despues del punto y parrafo terminado
for (var n = 0; n < arrLet.length; n++) {
    newText += arrLet[n].toString()   
    if (arrLet[n]==" "){
        cantidadEspaciosPuntosLetras.qtyEspacios++
        }
    if (arrLet[n] != " " || arrLet[n] != "."){
        cantidadEspaciosPuntosLetras.qtyLetras++
    }    
  }

    console.log("Qty Puntos = ",cantidadEspaciosPuntosLetras.qtyPuntos)
    console.log("Qty Espacios = ",cantidadEspaciosPuntosLetras.qtyEspacios)
    console.log("Qty Letras = ",cantidadEspaciosPuntosLetras.qtyLetras)
    console.log("Qty Vocales = ",cantidadEspaciosPuntosLetras.qtyVocales)
    console.log(newText)
    