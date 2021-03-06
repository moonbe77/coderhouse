var page=0
var arrayObjetosPersonajes = []
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


var callApi = function (nextUrl) {   
    $.ajax({
        type:"json",
        url: nextUrl,
        //data: "",
        type: "get",
        dataType: "json",
        ajaxSend: function (){
            $(".loader").show() 
            alert("ajaxSend")           
        },
        success: function (response) {
            result = response.results 
            cargaDePersonajes(result)        
        },
        error: function(status){
            console.log("ERROR CARGA de  personajes")
        },
        complete: function (xhr,status){
                console.log("CARGADA pagina: "+page)
                page++
                PersonajesCargarados +=result.length                            

            //instancia para recorrer las paginas de la api
            if  (xhr.responseJSON.next == null){
                console.log("no hay mas paginas")
                $(".loader").hide()
                //el parametro "0" es el primer indice [0] para la iteracion de el array de objetos
                returnHomeworld(0)
            }else{
                if( PersonajesCargarados < qtyPersonajesCargar ){
                    //console.log(xhr.responseJSON.next)
                    callApi(xhr.responseJSON.next)
                }else{
                    returnHomeworld(0)
                }
            }
        }
    })
}
   
//push de personajes es un for porque la api devuelve 10 personajes por consulta
var cargaDePersonajes = function (result){    
    for (var datos in result) {
        var value = result[datos]        
        var crearObjetoPersonaje = new Personaje (value.name,value.birth_year,value.homeworld,value.films,value.species)
        arrayObjetosPersonajes.push(crearObjetoPersonaje)       
    }        
}

var returnHomeworld = function (i) {
    console.log("*********")         
    console.log("iterador:",i)
    var items = Number(arrayObjetosPersonajes.length)
    console.log("items",items)
    if(i <= items-1){
        $.ajax({
            type: "get",
            url: arrayObjetosPersonajes[i].homeworld,
            dataType: "json",
            success:function (response){
                $(".loader").show()
                console.log("Carga de homeworld")
                },
                error: function(){
                    console.log("/////// ERROR HomeWorld ////////")
                    arrayObjetosPersonajes[i].homeworld = "no hay dato"
                },
                complete: function(xhr,status){
                    //almaceno el resultado de homeworld
                    arrayObjetosPersonajes[i].homeworld = xhr.responseJSON.name
                    $.ajax({
                        type: "get",
                        url: arrayObjetosPersonajes[i].species,
                        dataType: "json",
                        success:function (responseSpecies){
                            console.log("Carga de Species")
                        },
                        error: function(xhr){
                            console.log("///// ERROR spices ///////")
                            arrayObjetosPersonajes[i].species = "no hay dato"
                          // mostrar (arrayObjetosPersonajes[i],i+1)
                            i++
                            returnHomeworld(i)
                        },
                        complete: function(xhrSpecies){
                            console.log(xhrSpecies)
                            if( xhrSpecies.responseJSON ){                          
                                arrayObjetosPersonajes[i].species = xhrSpecies.responseJSON.name 
                            }                    
                            mostrar (arrayObjetosPersonajes[i],i+1)
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
   $("#mensajes").text("Cargando Personajes en " + p.name )   
    contenedor.append('<tr>'+
    '<td>'+indice+'</td>'+
    '<td>'+p.name+'</td>'+
    '<td>'+p.birth_year +'</td>'+//llamaar a una funcion que devuelva los nombres 
    '<td class="nameWorld">'+p.homeworld+'</td>'+                             
    //'<td>'+p.film+'</td>'+ 
    '<td>'+p.species+'</td>'+ 
    '</tr>')  
      $(".loader").hide()       
    console.log("Render en DOM")  
    console.log("*********")  
}

$(".loader").hide() 
})