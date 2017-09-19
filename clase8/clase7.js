var nuestroH1 = document.getElementsByTagName('h1')
var nuestrosUl = document.getElementsByTagName('ul')
var miLi = document.getElementById('nombrePepe')

var nuevoLi = document.createElement('li')
var contenidoLi = document.createTextNode("Juan Mariano carlos alberto")

nuevoLi.appendChild(contenidoLi)

nuestrosUl[0].appendChild(nuevoLi)
