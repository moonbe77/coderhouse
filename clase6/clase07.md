# Patrones
​
Los patrones de diseño son un conjunto de prácticas de óptimo diseño que se utilizan para abordar problemas recurrentes en la programación orientada a objetos.
​
El concepto de patrones de diseño fue el resultado de un trabajo realizado por un grupo de 4 personas (Erich Gamma, Richard Helm, Ralph Johnson y John Vlissides, conocidos como "la pandilla de los cuatro") que se publicó en 1995 en un libro titulado "Patrones de diseño: Elementos de software orientado a objetos reutilizables" en el que se esbozaban 23 patrones de diseño.
​
Un patrón de diseño puede considerarse como un documento que define una estructura de clases que aborda una situación particular. Los patrones de diseño se dividen en tres grupos principales:
​
* **Patrones de creación:** Patrón de Fábrica Abstracta, Patrón Constructor, Patrón del Método de Fabricación, Patrón Prototipo, Patrón de Instancia Única (Singleton).
* **Patrones estructurales:** Patrón Adaptador, Patrón Puente, Patrón Compuesto, Patrón Decorador, Patrón de Fachada, Patrón de Peso Mosca, Patrón Apoderado.
* **Patrones funcionales:** Patrón de Cadena de Responsabilidad, Patrón de Comando, Patrón Intérprete, Patrón Iterador, Patrón Mediador, Patrón Memento, Patrón Observador, Patrón de Estado, Patrón de Estrategia, Patrón del Método Plantilla, Patrón Visitante.

# Singleton

El Patrón Singleton también se conoce como Instancia única, su objetivo es restringir la creación de objetos  pertenecientes a una clase, de modo que solo se tenga una única instancia de la clase para toda la aplicación, garantizando así un punto de acceso global al objeto creado. 


Para implementarlo, la clase Singleton debe tener un constructor privado que solo sera accedido desde la misma clase, se crea también una instancia privada de la clase, así como un método estático que permita el acceso a dicha instancia de la forma **ClaseSingleton.getInstanciaSingleton();**

Este patrón es  muy útil cuando necesitamos crear un clase común y global para todo el sistema, donde no nos interese crear varias instancias de la misma, por ejemplo podríamos pensar en una clase conexión que utiliza toda la aplicación, si creamos varias instancias de esta podríamos llenar el heap del sistema con muchos objetos innecesarios que se crean cada vez que instanciamos la clase, por eso restringiendo la creación a un único objeto evitamos problemas de rendimiento y trabajo para el garbage collector.

Otro ejemplo podría ser la creación de un objeto que carga los parámetros de un archivo de propiedades, de esta manera evitaríamos que el sistema lea el archivo cada vez que lo necesite, en vez de eso tan solo llamaríamos al objeto que contiene los parámetros necesarios.

# Facade

Un facade es un patrón de diseño que nos permite simplificar el interface de comunicación entre dos objetos A y B de tal forma que para el objeto A sea más sencillo interactuar con el objeto B.

El patrón facade viene motivado por la necesidad de estructurar un entorno de programación y reducir su complejidad con la división en subsistemas, minimizando las comunicaciones y dependencias entre éstos.

La principal ventaja de este patrón consiste en que para modificar las clases de los subsistemas, sólo hay que realizar cambios en la interfaz/fachada, y los clientes pueden permanecer ajenos a ello. Además, y como se mencionó anteriormente, los clientes no necesitan conocer las clases que hay tras dicha interfaz.

Como inconveniente, si se considera el caso de que varios clientes necesiten acceder a subconjuntos diferentes de la funcionalidad que provee el sistema, podrían acabar usando sólo una pequeña parte de la fachada, por lo que sería conveniente utilizar varias fachadas más específicas en lugar de una única global.

# Mixin

Un mixin es una clase que ofrece cierta funcionalidad para ser heredada por una subclase, pero no está ideada para ser autónoma. Heredar de un mixin no es una forma de especialización sino más bien un medio de obtener funcionalidad. Una subclase puede incluso escoger heredar gran parte o el total de su funcionalidad heredando de uno o más mixins mediante herencia múltiple.

Un mixin puede aplazar la definición y la vinculación de métodos hasta el tiempo de ejecución, aunque los atributos y los parámetros de instanciación siguen siendo definidos en tiempo de compilación. Esto se diferencia del enfoque más comúnmente utilizado, originario del lenguaje de programación Simula, en el que se definen todos los atributos, métodos e inicialización en tiempo de compilación.

Los mixins fueron utilizados por primera vez en Flavors, que era un enfoque a la orientación a objetos utilizado en Lisp Machine Lisp. La ventaja de los mixins es que fomentan la reutilización de código y evitan problemas típicos asociados con la herencia múltiple. Sin embargo, los mixins tienen sus propias limitaciones.

# Factory
 El patrón de diseño Factory consiste en utilizar una clase constructora (al estilo del Abstract Factory) abstracta con unos cuantos métodos definidos y otro(s) abstracto(s): el dedicado a la construcción de objetos de un subtipo de un tipo determinado.
 
 Es una simplificación del Abstract Factory, en la que la clase abstracta tiene métodos concretos que usan algunos de los abstractos; según usemos una u otra hija de esta clase abstracta, tendremos uno u otro comportamiento.
 
 Las clases principales en este patrón son el creador y el producto. El creador necesita crear instancias de productos, pero el tipo concreto de producto no debe ser forzado en las subclases del creador, porque las posibles subclases del creador deben poder especificar subclases del producto para utilizar.

El patrón Abstract Factory está aconsejado cuando se prevé la inclusión de nuevas familias de productos, pero puede resultar contraproducente cuando se añaden nuevos productos o cambian los existentes, puesto que afectaría a todas las familias creadas.
