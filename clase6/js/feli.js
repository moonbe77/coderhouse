var CrearPeliculas = function (id, titulo){
    this.id= id
    this.titulo= titulo
}

pelicula0= new CrearPeliculas(33,"titanic")
pelicula1= new CrearPeliculas(001, "frozen")
pelicula2= new CrearPeliculas(002, "la cordillera")
pelicula3= new CrearPeliculas(003, "schreck")

var libreria= {
    peliculasEnLibreria: ["pelicula0", "pelicula1"],
    IdpeliculasEnLibreria: [33, 001]
}

var validar = function(pelicula, libreria){
    var estadoPelicula = libreria.IdpeliculasEnLibreria.indexOf(pelicula.id)
    return estadoPelicula
}

var agregador = function (pelicula,libreria){
    if(validar(pelicula,libreria)<0){
        libreria.peliculasEnLibreria.push(pelicula)
        libreria.IdpeliculasEnLibreria.push(pelicula.id)
    }
    else{
        console.log("esta pelicula ya se encuentra en la librería")
    }
}