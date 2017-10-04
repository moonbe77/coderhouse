$(document).ready(function(){
    var contenedor = $('.ships')
    
    $.ajax({
        type: "json",
        url: "https://swapi.co/api/people/",
        //data: "",
        type: "get",
        dataType: "json",
        success: function (response) {
       
        console.log(response)
        var result = response.results
         for (var datos in result) {
            var value = result[datos] 
            console.log(value)  
            contenedor.append('<tr>'+
                            '<td>'+value.name+'</td>'+
                            '<td>'+value.birth_year +'</td>'+
                            '<td>'+value.homeworld +'</td>'+
                            '<td>'+value.films+'</td>'+ //llamaar a una funcion que devuelva los nombres  
            '</tr>')
        }
        contenedor.append('</table>');
    },
    error: function(data){
        console.log("ERROR")
    }
});
})


var returnName = function (url) {

    
}