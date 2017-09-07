//Clase 6
/*
## Crear una o mas funciones que efectuen las siguientes tareas

* Contar la cantidad de caracteres tiene el string y guardarlo en una variable llamada *cantidadCaracteres*.

* Contabilizar la cantidad de parrafos existentes.
* La primer letra de cada parrafo convertirla a mayuscula y dejar un espacio luego del punto
* Contabilizar la cantidad de espacios y puntos y guardarlo en una variable llamada *cantidadEspaciosPuntos*
* Guardar en una variable *cantidadLetras* la cantidad de letras del string
*/
var texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.morbi vel gravida diam, ultricies interdum libero.etiam tempor, nunc eu dignissim rutrum, erat enim blandit magna, ut pretium risus nulla a sem.sed ut augue est.quisque pellentesque condimentum ligula vulputate tempus.curabitur non ex vitae urna vehicula gravida sit amet sit amet quam.phasellus et scelerisque sapien.donec finibus ac odio ac consectetur.integer ligula eros, posuere ac mauris non, pretium euismod elit.fusce porttitor sem quis neque varius ultricies.sed elementum blandit faucibus.donec nisi est, tempor eu neque eget, tempus dignissim libero.ut porttitor sapien eget placerat tristique.ut lacus sem, pulvinar et accumsan vitae, tristique quis sem.lorem ipsum dolor sit amet, consectetur adipiscing elit.nulla facilisi.suspendisse feugiat tempus lectus, ut venenatis lacus.sed et urna purus.morbi tincidunt volutpat consectetur.praesent vel diam efficitur, rhoncus lacus sit amet, feugiat mi.praesent egestas dignissim bibendum.ut congue porta est non maximus.vivamus quis imperdiet risus.cras vitae feugiat leo.fusce bibendum leo eu nisl cursus, quis tempor mi pulvinar.cras vel semper ante.aliquam tristique mauris sit amet viverra hendrerit."

var cantidadCaracteres = texto.length //1218
//cantidad de parrafos
var parrafosArray;
function parrafos (txt) {
     parrafosArray = txt.split(" ")
    return parrafosArray
}
var cantidadParrafos = parrafos(texto).length //158

var txtMayusculaEspacioPunto;
var arrLet=texto.split("")
var posPunto =[]
for (var i = 0; i < arrLet.length; i++) {
  // debugger
    if (arrLet[i] == ".") {
        posPunto.push(i)
        arrLet[i]= ". "
       // arrLet.splice(i,0,". ")
    }    
    
}

console.log(posPunto)


//usar match()