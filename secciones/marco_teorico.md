# Marco Teórico

## Generalidades

1.1. **Lenguaje de programación**:
Un lenguaje de programación se refiere a un conjunto de vocabulario, símbolos y reglas sintácticas y semánticas que permiten a un
programador comunicar claramente qué acciones debe realizar una computadora. El lenguaje de programación es "una notación para expresar
algoritmos de manera que puedan ser entendidos por humanos y procesados por máquinas" [(Rebelsky, 2006)](#rebelsky-ref).

## Diseño de lenguajes de programación

2.1. **Especificación**:
La especificación de un lenguaje es un tipo de documentación que describe sus características y su comportamiento. Puede incluir simplemente
la sintaxis y semántica del lenguaje, o también puede definir detalles de implementación. Cabe recalcar que la especificación para
un lenguaje de programación de propósito general es comúnmente agnóstica al ambiente de ejecución. La especificación puede ser un documento
escrito en prosa, una serie de ecuaciones matemáticas o incluso una implementación que se considere estándar [(Jones, 2008)](#spec-ref).

2.2. **Implementación**:
La implementación de un lenguaje es una pieza de software que toma un programa escrito por el programador, lo procesa siguiendo las reglas
del lenguaje, y si es correcto realiza el objetivo de esta implementación. Este objetivo puede ser generar otro tipo de código, generar un
archivo ejecutable, o interpretar el programa directamente. Por ejemplo, una implementación de Python llamada [Cython (2023)](#cython-ref)
lo traduce a código válido en C. La implementación puede ser un compilador, un intérprete o un traductor y debe estar consciente del
ambiente de ejecución.

2.3. **Compilador**:
Un compilador es un tipo de implementación que toma un programa escrito en el lenguaje de programación fuente y lo traduce a otro lenguaje.
"El término compilador generalmente se refiere a la traducción de una representación de alto nivel a una de nivel inferior. La conversión
entre representaciones de alto nivel es una traducción de fuente a fuente o *transpilación*" [(Baker, 2023)](#baker-ref). La definición
coloquial de compilador implica una traducción a código de máquina, generando como producto final un archivo ejecutable. En esencia, el
compilador no ejecuta directamente el código que se le provee sino que lo prepara para ser ejecutado por la máquina directamente o por
cualquier ambiente que el lenguaje objetivo soporte. Una vez compilado el programa, el compilador no necesita existir en el ambiente de
ejecución.

2.4. **Objetivo de compilación**:
El objetivo de compilación es el lenguaje en el que se genera el resultado del compilador. Este termino se usa generalmente para referirse
a la arquitectura de la máquina en la que se ejecutará el programa final, ya que cada unidad de procesamiento central (CPU) tiene su propio
lenguaje o conjunto de instrucciones.

2.5. **Interprete**:
"Un interprete es un programa de computadora que ejecuta o lleva a cabo instrucciones escritas en un lenguaje de programación"
[(Alegsa, 2023)](#alegsa-ref). Los interpretes también suelen incluir un modo interactivo llamado ciclo de lectura, evaluación e
impresión (REPL) que permite introducir instrucciones individuales que se ejecutan inmediatamente. A diferencia de un compilador, el
programa interprete necesita estar presente en la máquina donde se ejecuta el programa, pero esto también significa que el programador no
necesita preocuparse por soportar las arquitecturas de máquina del ambiente de ejecución. En algunos casos, un interprete puede tener un
aspecto de compilación si se combina con una máquina virtual.

> [...] la principal desventaja de los intérpretes, es que cuando un programa es interpretado, suele ejecutarse más lento que si el
> mismo programa estuviese compilado. Esto se debe a que el intérprete debe analizar cada sentencia en el programa en cada ejecución (un
> análisis en tiempo real) [(Alegsa, 2023)](#alegsa-ref).


2.6. **Máquina virtual**:
La máquina virtual es un programa que simula una computadora, definiendo su propio conjunto de instrucciones y arquitectura. De acuerdo a
[Azure (2023)](#azure-ref), la virtualización es el proceso de crear una versión basada en software o virtual de un equipo, con
cantidades dedicadas de CPU, memoria y almacenamiento que se toman prestadas de un equipo host físico. Toma una serie de instrucciones en
forma de un arreglo de bytes (Bytecode) y las ejecuta. El Bytecode y sus instrucciones es un lenguaje intermedio, un lenguaje que sirve
como puente entre código fuente original y código de máquina. Una máquina virtual es útil para que interpretes generen
código que pueda ejecutarse con más rapidez y eficiencia. También permite utilizar técnicas de optimización similares a las que un
compilador utilizaría con código de máquina.

2.7. **Lenguaje de programación de alto nivel**:
El nivel de abstracción de un lenguaje de programación se refiere a qué tan cerca están los conceptos y estructuras de este lenguaje al
lenguaje de máquina en el que se ejecuta el programa. "Los lenguajes de programación de alto nivel se caracterizan porque su estructura
semántica es muy similar a la forma como escriben los humanos" [(Ceballos, 2004)](#ceballos-ref). Un lenguaje de alto nivel generalmente
hace más trabajo por el programador, permitiendo que se concentre en la lógica y estructura del programa. Es relevante mencionar que el
nivel de abstracción es un concepto relativo, siendo el código de máquina el nivel más bajo de abstracción, y cualquier lenguaje que haga
más fácil escribir programas que código de máquina es un lenguaje de *más* alto nivel que este.

2.8. **Lenguaje de programación de bajo nivel**:
"Un lenguaje de programación de bajo nivel es el que proporciona poca o ninguna abstracción del microprocesador de una computadora"
[(Ceballos, 2004)](#ceballos-ref). Estos permiten un mayor control sobre la máquina, por lo que el programador puede conseguir un mejor
rendimiento y uso eficiente de los recursos del sistema.


## Elementos de un lenguaje

3.1. **Léxica**:
La léxica de un lenguaje de programación se refiere al aspecto textual o literal de este. Es decir, a los caracteres que se escriben y
cómo estos son procesados para encontrar trozos de información (llamados "tokens") que el lenguaje puede ver como únicos o relevantes.
Por ejemplo, las reglas léxicas de un lenguaje de programación pueden decir que un espacio o un salto de linea no son relevantes, pero
cuando encuentra una serie continua de dígitos los reconoce como un token relevante, de tipo número. Es en este elemento del lenguaje
donde se controla que toda la información escrita en el código sea al menos válidamente reconocida como un aspecto del lenguaje, pero no
se concentra en verificar si ese token está ubicado correctamente en el contexto del programa. "Siempre hay que tener en cuenta que
existen algunos identificadores o palabras dentro de cada lenguaje que vienen definidos como parte del lenguaje, como lo haríamos en
algún idioma o lenguaje natural" [(Juventino, 2022)](#lexico-ref).

3.2. **Sintaxis**:
La sintaxis del lenguaje es el conjunto de reglas que define las combinaciones válidas de tokens. La sintaxis, o gramática, del lenguaje de
programación define la estructura del programa y sus componentes abstractos, como las expresiones, sentencias o declaraciones. En la
implementación de un lenguaje, el analizador sintáctico se encarga de "tomar la secuencia plana de tokens y construir una estructura de
árbol que refleje la naturaleza anidada de la gramática" [(Nystrom, 2023)](#nystrom-ref).

3.3. **Semántica**:
De acuerdo a [Nystrom (2023)](#nystrom-ref), "donde un analizador sintáctico solo dice si un programa es gramaticalmente correcto [...],
el análisis semántico va más allá y comienza a descifrar qué significan realmente las piezas del programa". La semántica también se
encarga de definir el comportamiento del lenguaje, es decir, qué ocurrirá cuando se ejecute una pieza de código. Dependiendo de la
implementación, algunos aspectos de la semántica pueden evaluarse antes de generar el ejecutable y otros pueden ocurrir durante la
ejecución del programa. Por ejemplo, la semántica de un lenguaje puede definir que la operación de suma solo puede ocurrir entre
elementos del mismo tipo. Si asumimos que en este lenguaje los números enteros y números decimales tienen tipos diferentes, la expresión
"30 + 10.0" sería sintácticamente válida pero semánticamente incorrecta.

## Herramientas

4.1. **Gramáticas de expresión analítica (PEG)**:
Las PEG son un lenguaje formal con el que se puede especificar la sintaxis de un lenguaje. Proveen un formato con el que comunicar sin
ambigüedad las reglas gramaticales del lenguaje de programación. Son especialmente útiles porque funcionan a la vez como una
especificación y como una herramienta para la implementación, porque su formato puede ser procesado por un generador de analizadores
sintácticos y convertido en una implementación funcional [(Ford, 2004)](#ford-ref).

4.2. **Generador de analizadores sintácticos**:
Son programas que permiten tomar una especificación de sintaxis escrita en un lenguaje formal y generan una implementación de analizador
sintáctico. Este analizador sintáctico es capaz de procesar código fuente y convertirlo a una representación útil para el lenguaje de
programación.

4.3. **Combinador de analizadores sintácticos**:
Es un método alternativo para construir analizadores sintácticos, y consiste en escribir funciones pequeñas que se encargan de una parte
única del proceso de análisis, y luego combinarlas de manera que sean capaces de procesar conceptos y estructuras complejas. Este método
es menos automatizado que el uso de un generador de analizador sintáctico, pero significa que al diseñar el lenguaje se tiene mayor
control sobre el procesado de código fuente, principalmente a la hora de generar reportes y mensajes de error.

4.4. **Rust**:
Rust es un lenguaje de programación de propósito genera, compilado y relativamente moderno que se enfoca en la seguridad y el rendimiento.
Es un lenguaje de bajo nivel, pero su sintaxis es cómoda y familiar para programadores de lenguajes de alto nivel. El compilador de Rust
es sumamente estricto, lo que ayuda a detectar y evitar posibles errores de programación en el momento de compilación.

4.5. **Pest**:
Pest es una utilidad de Rust que permite escribir la gramática de un lenguaje de programación usando PEG, y genera un analizador
sintáctico que puede ser utilizado para procesar código fuente en este lenguaje [(Pest, 2023)](#pest-ref). Ya que utiliza PEG, Pest
asegura que la gramática del lenguaje es exactamente como se define en la especificación.

4.6. **Nom**:
Nom es una librería de Rust que facilita la creación de combinadores de analizadores sintácticos [(Nominomicon, 2023)](#nominomicon-ref).
Provee un formato de trabajo estándar a la hora de escribir funciones que procesan y analizan el código fuente. Nom permite tener más
control sobre el proceso de análisis, pero significa escribir más código y la posibilidad de cometer errores al implementar la gramática
del lenguaje.

## Metodología

5.1. **Scrum**:
Es un marco de trabajo ligero que ayuda a las personas, organizaciones y equipos a generar valor a través de soluciones adaptativas para
problemas complejos [(Schwaber y Sutherland, 2020)](#scrum-guide-ref). Su naturaleza ágil es útil en proyectos donde los requerimientos
no están completamente definidos, porque hace espacio para cambios en el producto en base a retroalimentación de los usuarios y cambios
en las circunstancias. Tiene roles definidos y reuniones periódicas que se encargan de mantener al equipo concentrado en las tareas
que se tienen que hacer y en qué hay que hacer en el momento para lograrlas.

5.2. **Scrum simplificado**:
Es una simplificación de Scrum enfocada a equipos pequeños y proyectos pequeños [(De Smet, 2020)](#scrum-ref), donde se eliminan algunos
roles y se reducen las reuniones requeridas.

5.4. **Sprint**:
Es el evento principal de Scrum, un periodo de tiempo fijo en el que se desarrolla un incremento del producto. Según la guía de scrum,
durante el sprint no se deben realizar cambios que afecten el objetivo del sprint, la calidad del producto no debe disminuir, el backlog
del producto se puede ajustar según sea necesario y el alcance del sprint puede ser clarificado o renegociado con el product owner; cada
sprint puede considerarse un proyecto pequeño por sí solo [(Schwaber y Sutherland, 2020)](#scrum-guide-ref). Durante el sprint se
realizan reuniones diarias, llamadas daily scrum, para sincronizar al equipo y planificar las tareas del día.

5.5. **Backlog**:
En Scrum hay un backlog de producto, que se refiere a la lista creciente de requerimientos que el producto final debe cumplir, y un
backlog del sprint, que es el conjunto de objetivos y tareas que se deben alcanzar para considerar un sprint como exitoso
[(Schwaber y Sutherland, 2020)](#scrum-guide-ref).

5.6. **Product owner**:
El product owner, o dueño del produccto, es quien se encarga de definir los requerimientos del producto, priorizarlos y asegurarse de que
el equipo los entienda. También es quien se encarga de aceptar o rechazar el producto final del sprint
[(Schwaber y Sutherland, 2020)](#scrum-guide-ref).

5.7. **Scrum master**:
Es quien se encarga de asegurar que el equipo siga las reglas de Scrum, que se alcance el objetivo del sprint y cualquier impedimento que
surja durante el sprint sea resuelto. También se encarga de facilitar las reuniones y asegurarse que se cumplan los tiempos establecidos
[(Schwaber y Sutherland, 2020)](#scrum-guide-ref).