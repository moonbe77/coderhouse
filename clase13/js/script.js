var url
var Personaje = {
    name:"",
    birth_year:"",
    homeworld:"",
    film:"",
    species:""
}

$(document).ready(function(){
    var contenedor = $('.ships')
    var result
var callApi = function (url) {
    $.ajax({
        type:"json",
        url: url,
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
    complete: function (response,xhr,status){
            console.log("COMPLETO")  
            addHome(result)
            /*if  (response.next == null){
                console.log("no hay mas paginas")
            }else{
                console.log(response.next)
                callApi(response.next)
            }*/
    }
})
}
   

var returnHomeworld = function (url) { 
    $.ajax({
        type: "get",
        url: url,
        dataType: "json",
        success:function (response){
            console.log("Origen: ",{response})
            Personaje.homeworld=response.name
            mostrar (Personaje)
        }
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
        console.log(value)
        Personaje.name=value.name
        Personaje.birth_year=value.birth_year        
        Personaje.film=value.films
        Personaje.species=value.species
        returnHomeworld(value.homeworld)        
    } 
}

var mostrar = function (p){
    console.log("home: ",p.homeworld)    
    contenedor.append('<tr>'+
    '<td>'+p.name+'</td>'+
    '<td>'+p.birth_year +'</td>'+//llamaar a una funcion que devuelva los nombres 
    '<td class="nameWorld">'+p.homeworld+'</td>'+                             
    //'<td>'+p.film+'</td>'+ 
    '<td>'+p.species+'</td>'+ 
    '</tr>')
}

callApi( "https://swapi.co/api/people/" )
})