

function addColor (color){
    var selector = document.querySelector("select")
    var newOption = document.createElement("option")
    var contenido = document.createTextNode(color)
    newOption.appendChild(contenido)
    selector.appendChild(newOption)
}