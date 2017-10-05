$(document).ready(function(){
    var contenedor = $('.ships')
    var result
    $.ajax({
        type: "json",
        url: "https://swapi.co/api/people/",
        //data: "",
        type: "get",
        dataType: "json",
        success: function (response) {       
        console.log(response)
        result = response.results                 
    },
        error: function(data){
        console.log("ERROR")
    },
        complete: function (xhr,status){
            console.log("COMPLETO")
            addHome(result)
    }
});

var returnHomeworld = function (url) {   
$.get(url, function (data, textStatus, jqXHR) {      
        console.log("Origen: ",data.name)
        return data.name    
    });
}

// console.log(value)  
//var casa = returnHomeworld(value.homeworld)
/*$.get(value.homeworld, function (data, textStatus, jqXHR) {
    console.log("Origen: ",data.name)
    return  data
});   */  
//console.log(casa) 

var addHome = function (result){
    for (var datos in result) {
        var value = result[datos] 
        if (value.homeworld){
            $.get(value.homeworld, function (data, textStatus, jqXHR) {      
                console.log("Origen: ",data.name)
                value = data.name  
            })
        }       
        mostrar (value)
    } 
}

var mostrar = function (value){
    console.log("home: ",value.homeworld)    
    contenedor.append('<tr>'+
    '<td>'+value.name+'</td>'+
    '<td>'+value.birth_year +'</td>'+//llamaar a una funcion que devuelva los nombres 
    '<td>'+value.homeworld+'</td>'+                             
    '<td>'+value.film+'</td>'+ 
    '<td>'+value.species+'</td>'+ 
    '</tr>')
}
})