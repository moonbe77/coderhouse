var soyGlobal = "Soy global"
console.log(soyGlobal)
var unaFuncion = function(a){
    var soyLocal = "soy local"
    console.log(soyGlobal, "dentro de una funcion")
    return a + soyLocal
}
console.log(unaFuncion(soyGlobal))

console.log("lo mas importante es que soy una varible: ", soyGlobal)

