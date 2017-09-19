var parrafoOriginal = document.getElementById("parrafoOriginal")
parrafoOriginal.innerText = texto

var parrafoEditado = document.getElementById("parrafoEditado")
parrafoEditado.innerText = newText

var puntos = document.getElementById("puntos")
puntos.innerText = "Puntos" +cantidadEspaciosPuntosLetras.qtyPuntos
var espacios = document.getElementById("espacios")
espacios.innerText = "Espacios" +cantidadEspaciosPuntosLetras.qtyEspacios
var letras = document.getElementById("letras")
letras.innerText = "Lestras" +cantidadEspaciosPuntosLetras.qtyLetras
var vocales = document.getElementById("vocales")
vocales.innerText = "Vocales" +cantidadEspaciosPuntosLetras.qtyVocales



console.log("Qty Puntos = ",cantidadEspaciosPuntosLetras.qtyPuntos)
console.log("Qty Espacios = ",cantidadEspaciosPuntosLetras.qtyEspacios)
console.log("Qty Letras = ",cantidadEspaciosPuntosLetras.qtyLetras)
console.log("Qty Vocales = ",cantidadEspaciosPuntosLetras.qtyVocales)
console.log(newText)