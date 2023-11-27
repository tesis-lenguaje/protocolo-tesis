# Diseño Metodológico

## Tipo de investigación
La clasificación de esta investigación es exploratoria ya que estudiará las necesidades de los estudiantes y experimental debido al prototipo que se desarrollará. La naturaleza de la información recolectada es cualitativa, ya que será interpretada con base aspectos subjetivos y no numéricos.

### Universo
El universo de esta investigación son los estudiantes universitarios de introducción a la programación.

### Muestra
La muestra son los estudiantes de ingeniería de sistemas de la universidad nacional de ingeniería, sede Estelí. Específicamente, se realizarán entrevistas a estudiantes que han cursado recientemente la clase de introducción a la programación.

## Fuentes de información
### Fuentes de información primarias
- Encuestas a estudiantes de ingeniería de sistemas de la UNI, sede Estelí.
- Entrevistas con profesores que enseñan clases de programación en la UNI.

### Fuentes de información secundarias
- El temario de la clase de introducción a la programación de la UNI.
- Libros de texto de programación.
- Estudios académicos sobre la enseñanza de la programación.
- Recursos en linea relacionados al diseño de lenguajes de programación.

## SCRUM Simplificado
Se tomará de base la metodología Scrum Simplificado [(De Smet, 2020)](#scrum-ref), ya que es una metodología ágil que se adapta a equipos pequeños y que permite cambios en el producto en base al feedback de los usuarios, lo que es ideal para el desarrollo de un prototipo. El prototipo se desarrollará en base a la recopilación inicial de información, y se irá modificando incrementalmente.

## Actividades
### Examinar las necesidades actuales
A travez de encuestas y entrevistas, se recopilará información sobre las necesidades pedagógicas de los estudiantes, y se analizará el temario de la clase de introducción a la programación para identificar los conceptos más importantes que se deben cubrir. Con base a esta información se creará un backlog de tareas que se deben realizar para el desarrollo del prototipo.

### Crear un prototipo incremental
Se creará un prototipo inicial que cubra las necesidades más importantes luego de la recopilación de información. Este prototipo se escribirá en el lenguaje Rust, y se utilizará la biblioteca Pest [(Pest, 2023)](#pest-ref), para el análisis léxico y sintáctico. Se utilizará la metodología Scrum Simplificado para el desarrollo del prototipo, y se realizarán reuniones semanales para evaluar el progreso y planificar las tareas de la siguiente semana. La estructura del prototipo se muestra a continuación, en la figura 1.

<figure>
    <figcaption style="text-align: center;">Figura 1: Estructura del prototipo</figcaption>
    <img src="assets/imagenes/estructura-interprete.png" alt="Estructura del prototipo" style="width: 100%; max-width: 600px; margin: 0 auto; display: block;">
</figure>

### Evaluación del prototipo
Se planificará una reunión con un grupo de estudiantes para que prueben el prototipo y den retroalimentación sobre su usabilidad. Se observarán aspectos como la facilidad de uso, la comprensión de la sintaxis y la familiaridad con los conceptos de programación. 

@.salto
### Interpretación de resultados
Con base a la retroalimentación recopilada se realizarán pruebas de usabilidad, comparando el prototipo con otros lenguajes de programación, para evaluar la efectividad del prototipo.
