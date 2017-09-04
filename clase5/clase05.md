# Métodos String


-----


## Lenght
Calcula la longitud de una cadena de texto (el número de caracteres que la forman)

```
var mensaje = "Hola Mundo";
var numeroLetras = mensaje.length; // numeroLetras = 10
```

## IndexOf

Calcula la primera posición en la que se encuentra el carácter indicado dentro de la cadena de texto. Si la cadena no contiene el carácter, la función devuelve el valor -1:

```
var mensaje = "Hola";
var posicion = mensaje.indexOf('a'); // posicion = 3
posicion = mensaje.indexOf('b'); // posicion = -1
````

La función `indexOf()` comienza su búsqueda desde el principio de la palabra y solo devuelve la primera posición de todas las existentes. Su función análoga es `lastIndexOf()`.

`lastIndexOf(letra)`, calcula la última posición en la que se encuentra el carácter indicado dentro de la cadena de texto. Si la cadena no contiene el carácter, la función devuelve el valor -1:
```
var mensaje = "Hola";
var posicion = mensaje.lastIndexOf(‘a’); // posicion = 3
posicion = mensaje.lastIndexOf(‘b’); // posicion = -1
La función lastIndexOf() comienza su búsqueda desde el final de la cadena hacia el principio, aunque la posición devuelta es la correcta empezando a contar desde el principio de la palabra.
```

## CharAt

Obtiene el carácter que se encuentra en la posición indicada:
```
var mensaje = "Hola";
var letra = mensaje.charAt(0); // letra = ‘H’
letra = mensaje.charAt(2); // letra = ‘l’
```

## Substring (Inicio-Final)


Extrae una porción de una cadena de texto. El segundo parámetro es opcional. Si solo se indica el parámetro inicio, la función devuelve la parte de la cadena original correspondiente desde esa posición hasta el final:
```
var mensaje = "Hola Mundo";
var porcion = mensaje.substring(2); // porcion = "la Mundo"
porcion = mensaje.substring(5); // porcion = "Mundo"
porcion = mensaje.substring(7); // porcion = "ndo"
```
Si se indica un inicio negativo, se devuelve la misma cadena original:
```
var mensaje = "Hola Mundo";
var porcion = mensaje.substring(-2); // porcion = "Hola Mundo"
```
Si se indica el inicio y el final, se devuelve la parte de la cadena original comprendida entre la posición inicial y la inmediatamente anterior a la posición final (es decir, la posición inicio está incluida y la posición final no):
```
var mensaje = "Hola Mundo";
var porcion = mensaje.substring(1, 8); // porcion = "ola Mun"
porcion = mensaje.substring(3, 4); // porcion = "a"
```
Si se indica un final más pequeño que un inicio, JavaScript los considera de forma inversa, ya que automáticamente asigna el valor más pequeño al inicio y el más grande al final:
```
var mensaje = "Hola Mundo";
var porcion = mensaje.substring(5, 0); // porcion = "Hola "
porcion = mensaje.substring(0, 5); // porcion = "Hola "
```
## toLowerCase

Transforma todos los caracteres de la cadena a sus correspondientes caracteres en minúsculas:
```
var mensaje1 = "HolA";
var mensaje2 = mensaje1.toLowerCase(); // mensaje2 = "hola"
```

## toUpperCase

Transforma todos los caracteres de la cadena a sus correspondientes caracteres en mayúsculas:
```
var mensaje1 = "Hola";
var mensaje2 = mensaje1.toUpperCase(); // mensaje2 = "HOLA"
```

## Concat

Fa función concat() se utiliza para concatenar.
```
var mensaje1 = "Hola";
var mensaje2 = mensaje1.concat(" Mundo"); // mensaje2 = "Hola Mundo"
```

## Split

Convierte una cadena de texto en un array de cadenas de texto. La función parte una cadena de texto dividiendo sus trozos a partir del carácter delimitador indicado:
```
var mensaje = "Hola Mundo, soy una cadena de texto!";
var palabras = mensaje.split(" ");
// palabras = ["Hola", "Mundo,", "soy", "una", "cadena", "de", "texto!"];
```
Con esta función se pueden extraer fácilmente las letras que forman una palabra:
```
var palabra = "Hola";
var letras = palabra.split(""); // letras = ["H", "o", "l", "a"]
```

# Métodos Array


-----


## toString

El método `toString()` retorna una cadena de caracteres representando el array especificado y sus elementos.


### Sintaxis

 
`arr.toString()`


-----

## Push
Transforma un array añadiendole los elementos proporcionados y devolviendo la nueva longitud del array.

El método push depende de la propiedad length para decidir dónde empezar a insertar los valores dados. Si el valor de la propiedad length no puede ser convertido en numérico, el índice 0 es usado. Esto permite la posibilidad de que la propiedad length sea inexistente, y en este caso length será creado.

### Síntaxis


`array.push(element1, ..., elementN)`


-----

## Join
El método `join()` une todos los elementos de un arreglo en una cadena.


### Sintaxis

```
str = arr.join([separador = ','])
```


-----

## Sort

El metodo `sort()` ordena los elementos de un array localmente y retorna el  array. El ordenamiento no es necesariamente estable. El orden de ordenamiento por omisión es acorde a la posición valor del string en Unicode.


### Sintaxis


`arr.sort([compareFunction])`


-----

## Pop


El método pop() elimina el último elemento de un array y lo devuelve.


### Sintaxis


`arr.pop()`


-----


##  Reverse
El metodo reverse() coloca al revés (inversamente) una matriz. El primer elemento pasa a ser el ultimo y el ultimo pasa a ser el primero.


### Sintaxis

`arr.reverse()`


-----
##  Concat

El método concat() retorna un vector compuesto por los elementos del vector en el que fue invocado y los elementos del/de los vector/es y/o valores pasados como argumentos.
 

### Sintaxis


```
var nuevo_vector = viejo_vector.concat(valor1[, valor2[, ...[, valorN]]])
```

`concat()`, se emplea para concatenar los elementos de varios arrays:




-----
## Slice

El medoto `slice()` devuelve una copia de una parte del array dentro de un nuevo array. Devuelve una sección de una matriz.

### Sintaxis

```
arrayObj.slice(start, [end])

```



-----


## Splice

El método splice () agrega / elimina los elementos  de una matriz y devuelve el elemento (s) que se retiró.

### Sintaxis

```
array .splice( index , howmany , item1 ,....., itemX )

```
