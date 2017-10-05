cargarDatos = function() {
    $.ajax({
        url: 'https://swapi.co/api/planets',
        type: 'get',
        dataType: 'json',
        success: function(data) {
            console.log('llego la data' + data);
            console.log('llego la data' + JSON.stringify(data));
            var arrResults = data.results
            for (var info in arrResults) {
              var objDatos = arrResults[info];
              $('#contenedorGeneral').append('<tr>'+
                                              '<td>'+objDatos.name+'</td>'+
                                              '<td>'+objDatos.rotation_period+'</td>'+
                                              '<td>'+objDatos.orbital_period+'</td>'+
                                              '<td>'+objDatos.diameter+'</td>'+
                                              '<td>'+objDatos.population+'</td>'+
                                              '<td>'+objDatos.films+'</td>'+
                                              '</tr>')

            }
        },
        error: function(data) {
            console.log('no llego la data' + data);
        },
        complete: function(){
            //asd
        }
    })
};

cargarDatosLocales = function() {
    $.get('https://mblayer.github.io/githubPages/index.html', function(carlos) {
        $('#inicio').html(carlos);
    });

};
