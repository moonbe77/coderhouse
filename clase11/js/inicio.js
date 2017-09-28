arrayEfectos = ['animate', 'delay', 'hide', 'show', 'stop', 'slideUp', 'toggle', 'slideDown', 'slideToggle', 'fadeTo'];

iniciarEfectos = function() {
    console.log("-----iniciamos nuestros efectos--------");

    for (var idElemento in arrayEfectos) {
        $('#btnEfectos').append('<button class="btnAcciones" id="' + arrayEfectos[idElemento] + '">' + arrayEfectos[idElemento] + '</button>');
        //$('#btnEfectos').append('<button class="pepe"> </button>').attr("id", arrayEfectos[idElemento]).text(arrayEfectos[idElemento])

    }


    $('.btnAcciones').on('click', function() {
        var btnClick = $(this).attr('id');
        console.log(btnClick);

        switch (btnClick) {
            case "animate":
                $("#cuadrado").animate({ //Nos permite animar un elemento mediante el css
                    marginLeft: "+=50" //Desplazamos el margen izquierdo 50px de la posicion anterior
                }, 5000); // Le indicamos la duraccion del efecto
                $('#ejemploTexto').text(' $("#cuadrado").animate({ marginLeft: "+=50"}, 5000);');
                break;

            case "delay":
                //Fadein y fadeout: Cambian gradualmente la opacidad para mostrar u ocultar el elemento:
                $("#cuadrado").delay("slow").fadeOut(); // Con este efecto demoramos la ejecucion de una accion (desaparecer)
                console.log("se va");
                $("#cuadrado").delay("fast").fadeIn(function() {
                    console.log("vuelve");
                });
                $('#ejemploTexto').text('  $("#cuadrado").delay("slow").fadeOut();');

                break;

            case "hide":
                $("#cuadrado").hide(); // Desaparece un elemento
                $('#ejemploTexto').text('  $("#cuadrado").hide();');

                break;
            case "show":
                $("#cuadrado").show(); // Aparece un elemento
                $('#ejemploTexto').text('  $("#cuadrado").show();');
                break;
            case "stop":
                $("#cuadrado").stop(); // Detiene una accion
                $('#ejemploTexto').text('$("#cuadrado").stop();');
                break;
            case "slideUp":
                $("#cuadrado").slideUp(); // Desliza un elemento para arriba y desaparece
                $('#ejemploTexto').text('$("#cuadrado").slideUp();');

                break;
            case "toggle":
                $("#cuadrado").toggle();
                $('#ejemploTexto').text('$("#cuadrado").toggle();');
                break;
            case "slideDown":
                $("#cuadrado").slideDown();
                $('#ejemploTexto').text('$("#cuadrado").slideDown();');

                break;
            case "slideToggle":
                $("#cuadrado").slideToggle();
                $('#ejemploTexto').text('$("#cuadrado").slideToggle();');
                break;
            case "fadeTo":
                $("#cuadrado").fadeTo('fast', "0.35");
                $('#ejemploTexto').text('$("#cuadrado").fadeTo("fast", "0.35");');
                break;
            default:
                alert("si llegamos aca, algo se rompio");
                break;

        }

    });


    $(document).keydown(function(event) {
        var teclaDetectada = event.which;
        console.log("El código de la tecla " + String.fromCharCode(teclaDetectada) + " es: " + teclaDetectada);

    });
}