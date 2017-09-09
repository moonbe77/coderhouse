function Facebook(nombre, apellido, pais, fecha) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
    this.edad = 31
    this.calcularEdad = function(fecha) {
        //calcula tu edad segun la fecha
    }
}
var matiasFacebook = new Facebook("matias", "blayer", "argentina")



function UsuariosFacebook(nombre, apellido, pais, fecha, fotos) {
    Facebook.call(this, nombre, apellido, pais, fecha);
    this.fotos = fotos;
    this.permisos = false;
}


function UsuariosFacebookAdminGrupos(nombres, apellido, pais, fecha, fotos, grupos) {
    UsuariosFacebook.call(this, nombres, apellido, pais, fecha, fotos);
    this.grupos = grupos;

}




// var matiasFacebook2 = new UsuariosFacebook("fede", "artia", "Uru", 53)

var matiasFacebook2 = new UsuariosFacebookAdminGrupos("fede", "artia", "Uru", 53, "fotos SI", "5 grupos")






console.log(matiasFacebook2)