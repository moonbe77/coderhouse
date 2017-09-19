// LocalStorage

// Localstorage es un espacio que nos brinda el navegador dedicado a nuestra web, seria como las cookies.
// El tipo de dato a guardar es un Objeto pero en formato de string.

// Para revisar localstorage tenemos un método que nos permite revisar el mismo: localStorage
// Para cargar un elemento en localStorage vamos a utilizar: localStorage.setItem("usuario", "matias")
// Para acceder al nombre de las propiedades se realiza por medio de la posición de cada propiedad: localStorage.key(0)
// Para acceder al valor de cada propiedad tenemos que indicarle el nombre de la propiedad: localStorage.getItem("usuario")

// La forma correcta para usarlo para aprovechar el espacio seria indicarle directamente un objeto localStorage.setItem("usuario", {nombre: "matias", edad:31})
// Pero el sistema solo permite guardar string, para eso tenemos 2 métodos del objeto JSON: 
//      JSON.stringify
//      JSON.parse



function nueva() {
    var nombreActual = localStorage.getItem(localStorage.key(0))
    var usuario = document.getElementById("usuario");
    usuario.innerText = nombreActual;
}

