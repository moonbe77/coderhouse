function pepe(donde) {
    console.log("ejecutamos pepe " + donde);
}
pepe("afuera")

function yaCargamos() {
    pepe("adentro")
        /*Acciones para el header, detectamos el header por el tagName*/
    var header = document.getElementsByTagName("header")[0];
    /*Cuando detecta el mouse realiza una verificacion del color actual y lo cambia por otro.*/
    header.onmouseover = function() {
        if (header.style.color === "red") {
            header.style.color = 'black';
            header.style.fontSize = "50px";
        } else {
            header.style.color = 'red';
        }
    }

    var formulario = document.getElementById("formulario");

    formulario.onsubmit = function(event) {
        var usuario = formulario[0].value;
        var clave = formulario[1].value;
        var alertasErrorFormulario = document.getElementById("avisoError");
        if (clave === "") {
            alertasErrorFormulario.innerText = "Falta cargar la clave";
        } else {
            alertasErrorFormulario.innerText = "";

            switch (usuario) {
                case "matias":
                    if (clave === "pepe") {

                        localStorage.setItem("usuario", usuario);
                        document.location.href = "nueva.html";
                    } else {
                        alertasErrorFormulario.innerText = "Clave Incorrecta";
                    }
                    break;
                case "Marta":
                    if (clave === "pepe") {
                        localStorage.setItem("usuario", usuario);
                        document.location.href = "nueva.html";
                    } else {
                        alertasErrorFormulario.innerText = "Clave Incorrecta";
                    }
                    break;

            }

        }
       event.preventDefault();

    }

    var inputUsuario = document.getElementById("select");

    inputUsuario.onchange = function() {
        console.log("hicimos un cambio: " + inputUsuario.value);
    }

    var cuadrado = document.getElementsByClassName("cuadrado");

    function cambioColor(event) {
        console.log("pasamos por aca " + event.currentTarget.id);

        var selec = document.getElementById(event.currentTarget.id);

        selec.classList.add("claseNueva");
        selec.style.backgroundColor = event.currentTarget.id;


    }


    for (var i = 0; i < cuadrado.length; i++) {
        cuadrado[i].addEventListener('click', cambioColor);
    }


}