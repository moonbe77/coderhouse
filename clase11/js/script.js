$(document).ready(function () {
    var parrafo = ""
    var qtyLetras = parrafo.length
    var qtyVocales = ""
    var qtyPuntos = ""
    
    var parrafoAnalizado = {
        carcateres : "",
    }

    $('#parrafo').keydown(function (e) {
        parrafo = $("#parrafo").val();
        qtyLetras = parrafo.length;        
        $('#qtyLetras').text(qtyLetras); 
        console.log(qtyLetras)           
    });
    
    //contar letras
    
});
console.log($("#parrafo").val())        