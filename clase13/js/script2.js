var page=0
var arrayObjetosPersonajes = []
var arrayObjetosPlanetas = []
var arrayObjetosSpecie = []
var qtyPersonajesCargar = 0
var PersonajesCargarados = 0
var Personaje = function (name,birth,homeworld,films,species){
    this.name = name,
    this.birth_year = birth,
    this.homeworld = homeworld,
    this.films = films,
    this.species = species 
}

$(document).ready(function(){
    var contenedor = $('.ships')
    var result

    $('#btnCargar').click(function (e) { 
        e.preventDefault();
        arrayObjetosPersonajes = []
        contenedor.html("")
        var val = $("#qty").val();
        console.log("btn click",val)
        if (val == 0){
            qtyPersonajesCargar = 87
        }else{
            qtyPersonajesCargar = val
        }        
        callApi("https://swapi.co/api/people/")
    });


var callAPI = function (nextUrl) {   
    $.ajax({
        type:"json",
        url: nextUrl,
        //data: "",
        type: "get",
        dataType: "json",
        beforeSend: function (nextUrl) {
            //console.log("///////////////"+nextUrl)
            $("#mensajes").text("Buscando en " + nextUrl )
            },
        success: function (response) {       
            result = response.results 
            arrayPush(resultCallApi)        
        },
        error: function(data){
            console.log("ERROR")
        },
        complete: function (xhr,status){
                console.log("COMPLETO "+ nextUrl)                          

            //instancia para recorrer las paginas de la api
            if  (xhr.responseJSON.next == null){
                console.log("no hay mas paginas")
                $(".loader").hide()                
            }else{
                callApi(xhr.responseJSON.next)                         }
        }
    })
}
   
var arrayPush = function (resultCallApi, cualArray){    
    for (var datos in result) {
        var value = result[datos]
        $("#mensajes").text("Cargando Personajes en " + value.name )
        var crearObjetoPersonaje = new Personaje (value.name,value.birth_year,value.homeworld,value.films,value.species)
        arrayObjetosPersonajes.push(crearObjetoPersonaje)       
    }     
   // console.log(arrayObjetosPersonajes) 
    //returnHomeworld(0)  
}


var returnHomeworld = function (i) {         
    console.log("iterador:",i)
    var items = Number(arrayObjetosPersonajes.length)
    console.log("items",items)
    if(i <= items){
        $.ajax({
            async:true,
            type: "get",
            url: arrayObjetosPersonajes[i].homeworld,
            dataType: "json",
            success:function (response){
                $(".loader").show()
                },
                error: function(){
                    console.log("ERROR HomeWorld")
                    arrayObjetosPersonajes[i].homeworld = "no hay dato"
                },
                complete: function(xhr,status){
                    arrayObjetosPersonajes[i].homeworld = xhr.responseJSON.name
                    $.ajax({
                        async:true,
                        type: "get",
                        url: arrayObjetosPersonajes[i].species,
                        dataType: "json",
                        success:function (responseSpecies){
                            console.log("Carga de homeworld")
                        },
                        error: function(xhr){
                            console.log("spices error" + status)                            
                            arrayObjetosPersonajes[i].species = "no hay dato"
                            mostrar (arrayObjetosPersonajes[i],i)
                            i++
                            returnHomeworld(i)
                        },
                        complete: function(xhrSpecies){                            
                            
                            arrayObjetosPersonajes[i].species = xhrSpecies.responseJSON.name
                            mostrar (arrayObjetosPersonajes[i],i)
                            i++
                            returnHomeworld(i)
                        }
                    });
                }                                                      
        });
    }            
}


var mostrar = function (p,indice){
   // console.log("home: ",p.homeworld) 
     
    contenedor.append('<tr>'+
    '<td>'+indice+'</td>'+
    '<td>'+p.name+'</td>'+
    '<td>'+p.birth_year +'</td>'+//llamaar a una funcion que devuelva los nombres 
    '<td class="nameWorld">'+p.homeworld+'</td>'+                             
    //'<td>'+p.film+'</td>'+ 
    '<td>'+p.species+'</td>'+ 
    '</tr>')  
      $(".loader").hide() 
}

$(".loader").hide() 
})