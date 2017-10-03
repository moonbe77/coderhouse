/*
**cargar texto desde textarea
**al presionar una tecla escribiendo en el textarea recalcular los datos
**
*/
var parrafo = $("#parrafo").val();
const regExVocales = /[aeiou]/ig  //la i es par que no sea case-insensitive
const regExLetra = /([a-z])/ig   // expresion para validar si es letra
var datosParrafo = {
    qtyCaracteres : 0,
    qtyVocales : 0,
    qtyPuntos : 0,
    qtyEspacios : 0,
    txtNew:""
}

app = function() {
    var myApp = {};
    myApp.init = function() {
        $(document).ready(function() {
            console.log("-----Se inicio  la app-----------");
            analizar();           
        });
    }();
    return myApp;
}();

var analizar = function () {
   // contarLetras()
    contarDatos()    
} 

//accion al teclear texto en el textarea
$('#parrafo').keyup(function (e) {
      analizar()                
    })

var contarDatos =function(){
    parrafo = $("#parrafo").val()
    //cantida de caracteres       
        datosParrafo.qtyCaracteres = parrafo.length

    //cantidad de vocales
    
    var parrafoArray= parrafo.split("")
    var vocales = 0
    var espacios = 0
    var puntos = 0
    var newTexto = ""

    for (var i = 0; i < parrafoArray.length; i++) {

        //Cantidad de vocales
            if (regExVocales.test(parrafoArray[i])) {
                vocales ++  
                newTexto += parrafoArray[i]                              
            }else if (parrafoArray[i] == " ") {//cantidad de espacios
                espacios ++    
                newTexto += parrafoArray[i]         
                //console.log("soy un espacio")                
            } else if (parrafoArray[i] == "." ){//formateado de letras   

                if (parrafoArray[i+1] == " " && parrafoArray[i+2] != undefined ){  
                    //letra siguiente a un punto con espacios en mayusculas  / el condicional != undefined es para que no de error el metodo toUpperCase en el ultimo punto del texto
                    var letra = parrafoArray[i+2]
                    parrafoArray[i+2]=letra.toUpperCase() 
                    //console.log("mayuscula despues punto espacio")
                }

                if(parrafoArray[i+1] != undefined){
                    var letra = parrafoArray[i+1]  
                    parrafoArray[i+1]=letra.toUpperCase() 
                    parrafoArray[i] = ". "
                    newTexto += parrafoArray[i]
                   // console.log("soy letra despues de un punto")
                }

                if(parrafoArray[i] == parrafoArray.length){
                    //var letra = parrafoArray[i+1] 
                    parrafoArray[i] = "."
                    newTexto += parrafoArray[i]
                    console.log("soy la ultima letra")
                }    
                //cantidad de puntos
                    puntos ++
            }else{
                newTexto += parrafoArray[i]
            }
        }
        datosParrafo.qtyVocales = vocales
        datosParrafo.qtyEspacios = espacios
        datosParrafo.qtyPuntos = puntos
        datosParrafo.txtNew = newTexto

        actualizarDatos(datosParrafo)
} 

var actualizarDatos = function (datosParrafo){
    $('#qtyLetras').text(datosParrafo.qtyCaracteres)
    $('#qtyPuntos').text(datosParrafo.qtyPuntos)
    $('#qtyEspacios').text(datosParrafo.qtyEspacios)
    $('#qtyVocales').text(datosParrafo.qtyVocales)
    $('#nuevoParrafo').text(datosParrafo.txtNew)
}