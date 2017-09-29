/*
**cargar texto desde textarea
**al presionar una tecla escribiendo en el textarea recalcular los datos
**al presionar el boton formatear texto dar espacio despues de los puntos y poner en mayuscula
**
*/
var parrafo = $("#parrafo").val();

var datosParrafo = {
    qtyLetras : 0,
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
            actualizarDatos()
            //cargarDatos();
            //cargarDatosLocales();

        });
    }();
    return myApp;
}();

var analizar = function () {
    contarLetras()
    contarDatos()    
} 
//accion al teclear texto en el textarea
$('#parrafo').keyup(function (e) {
      analizar()                
    })



var contarLetras =function(){
    parrafo = $("#parrafo").val()
//cantida de letras
    letras = parrafo.length
    datosParrafo.qtyLetras = letras
    return letras
}

var contarDatos =function(){
    //cantidad de vocales
    const regexVocales = /[aeiou]/i  
    var parrafoArray= parrafo.split("")
    var vocales = 0
    var espacios = 0
    var puntos = 0
    var newTexto = ""

    for (var i = 0; i < parrafoArray.length; i++) {
        //Cantidad de vocales
            if (regexVocales.test(parrafoArray[i])) {
                vocales ++                                
            }
        //cantidad de espacios
            if (parrafoArray[i] == " ") {
                espacios ++
            }        
            //formateado de letras    
            if (parrafoArray[i] == "." ){
                if(parrafoArray[i+1] != undefined){
                    var letra = parrafoArray[i+1]  //cree esta variable para ver si no me daba el error la funcion toUpperCase linea 36
                    parrafoArray[i+1]=letra.toUpperCase() // me da error pero hace lo que tiene que hacer
                    parrafoArray[i] = ". "
                    newTexto += parrafoArray[i]
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


     

//dar formato
var darFormato = function() {
    $("#formatear").on("click", function () {
        alert(parrafo)
})
}

var actualizarDatos = function (datosParrafo){
    $('#qtyLetras').text(datosParrafo.qtyLetras)
    $('#qtyPuntos').text(datosParrafo.qtyPuntos)
    $('#qtyEspacios').text(datosParrafo.qtyEspacios)
    $('#qtyVocales').text(datosParrafo.qtyVocales)
    $('#nuevoParrafo').text(datosParrafo.txtNew)
}