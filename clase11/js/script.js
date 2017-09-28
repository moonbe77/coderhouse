/*
**cargar texto desde textarea
**al presionar una tecla escribiendo en el textarea recalcular los datos
**al presionar el boton formatear texto dar espacio despues de los puntos y poner en mayuscula
**
*/
var parrafo = $("#parrafo").val();

var datosParrafo = {
    qtyLetras :0 ,
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


    $('#parrafo').keyup(function (e) {
      analizar()                 
    })

var analizar = function () {
   parrafo = $("#parrafo").val()
//cantida de letras
    letras = parrafo.length
    datosParrafo.qtyLetras = letras
//cantidad de vocales
    const regexVocales = /[aeiou]/i  
    var parrafoArray= parrafo.split("")

    for (var i = 0; i < parrafoArray.length; i++) {
    //Cantidad de vocales
        if (regexVocales.test(parrafoArray[i])) {
            datosParrafo.qtyVocales ++
        }
    //cantidad de espacios
        if (parrafoArray[i] == " ") {
            datosParrafo.qtyEspacios ++
        }        
    //formateado de letras    
        if (parrafoArray[i] == "." ){
            if(parrafoArray[i+1] != undefined){
                var letra = parrafoArray[i+1]  //cree esta variable para ver si no me daba el error la funcion toUpperCase linea 36
                 parrafoArray[i+1]=letra.toUpperCase() // me da error pero hace lo que tiene que hacer
               parrafoArray[i] = ". "
               datosParrafo.txtNew += parrafoArray[i]
            }
    //cantidad de puntos
            datosParrafo.qtyPuntos ++ 
        }else{
            datosParrafo.txtNew += parrafoArray[i]
        }
    }
//
    
//dar formato
$("#formatear").on("click", function () {
    alert(parrafo)
});

actualizarDatos(datosParrafo)
}      

var actualizarDatos = function (datosParrafo){
    $('#qtyLetras').text(datosParrafo.qtyLetras)
    $('#qtyPuntos').text(datosParrafo.qtyPuntos)
    $('#qtyEspacios').text(datosParrafo.qtyEspacios)
    $('#qtyVocales').text(datosParrafo.qtyVocales)
    $('#nuevoParrafo').text(datosParrafo.txtNew)
}