app = function() {
    var myApp = {};
    myApp.init = function() {
        $(document).ready(function() {
            console.log("-----Se inicio  la app-----------");
            iniciarEfectos();
            cargarDatos();
            cargarDatosLocales();

        });
    }();
    return myApp;
}();