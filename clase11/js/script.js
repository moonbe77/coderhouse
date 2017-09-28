/*
**cargar texto desde textarea
**al presionar una tecla escribiendo en el textarea recalcular los datos
**al presionar el boton formatear texto dar espacio despues de los puntos y poner en mayuscula
**
*/

app = function() {
    var myApp = {};
    myApp.init = function() {
        $(document).ready(function() {
            console.log("-----Se inicio  la app-----------");
            analizar();
            //cargarDatos();
            //cargarDatosLocales();

        });
    }();
    return myApp;
}();


var analizar = function () {
    var parrafo = $("#parrafo").val();
    var qtyLetras = parrafo.length  
    var qtyVocales = ""
    var qtyPuntos = ""
    
    var parrafoAnalizado = {
        carcateres : "",
    }

//contar letras
    $('#qtyLetras').text(qtyLetras);

    $('#parrafo').keyup(function (e) {
        parrafo = $("#parrafo").val()
        qtyLetras = parrafo.length;        
         actualizarDatos(qtyLetras,"1","2","3")
        console.log(qtyLetras)           
    })
    
//dar formato
$("#formatear").on("click", function () {
    alert(parrafo)
});
    
}      

var actualizarDatos = function (a,b,c,d){
    $('#qtyLetras').text(a)
    $('#qtyPuntos').text(b)
    $('#qtyEspacios').text(c)
    $('#qtyVocales').text(d)
}