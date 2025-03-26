# Ejercicio 1

**Nombre**: Erick Manuel Sierra Baeza

---

## Pregunta 1 (6 puntos)

# 1.1 (3 puntos)
Explique por que el realizar validaciones del input del usuario en el front-end es una facilidad pero no una medida de seguridad. 

**Respuesta:**

El principio de defensa en profundidad dice que la entrada validarse en varias capas de la aplicación web, no se debe confiar en un único punto de validación, sino aplicar la validación en diferentes etapas, como del lado del cliente, del lado del servidor y de la base de datos. La validación del lado del cliente puede mejorar la experiencia del usuario, pero no puede garantizar la seguridad. Por lo tanto, debe usarse con la validación del lado del servidor para garantizar la seguridad, ya que esta puede rechazar entradas maliciosas o no válidas que omiten la validación del lado del cliente.

# 1.2 (3 puntos)
Explique en detalle el rol de **HTML, CSS y JavaScript** en la creación del front-end de una aplicación web. Especifique la función de cada tecnología y cómo se combinan para construir una interfaz interactiva y visualmente atractiva.

**Respuesta:**

La forma más simple de una página web es un
documento estático, HTML es un lenguaje de hipertexto que permite escribir una serie de comandos de marcado. Un usuario cuando consulta una página web, lo que ve y utiliza es una página en HTML (front-end). 

Por otro lado, CSS es un archivo de hojas de estilos, que indican al navegador como dibujar el contenido de un elemento HTML, puede definir valores específicos para una o más propiedades de un elemento como el color, tipos de letras, espacio entre lineas, márgenes, bordes, etc.

Por su parte, Javascript es un lenguaje de programación que interviene la funcionalidad de los navegadores y permite cambiar la apariencia del documento, generar validaciones de datos, manipular elemento de un formulario, realizar cálculos, etc. También permite controlar eventos que se pueden ejecutar cuando el usuario ingresa datos, pulsa un botón o mueve el puntero del mouse.

Estas tres tecnologías se combinan en la web moderna para construir interfaces que permitan interacción con el usuario mediante el uso de Javascript, y que tengan una apariencia visualmente atractiva con el uso de CSS, el cual permite modificar la apariencia de una página en HTML sin alterar el código de esta.

## Pregunta 2 (6 puntos)
A continuación, se presentan dos tareas prácticas:  

1. **(3 puntos)** Implementar un código que reciba un nombre ingresado por el usuario y muestre un mensaje de bienvenida.  
   - Si el usuario se llama **[Tu Nombre]**, debe mostrarse un mensaje especial en negrita y en color azul.  
   - El contenido debe actualizarse sin recargar la página.  

2. **(3 puntos)** Implementar un contador de calificación con dos botones para aumentar y disminuir la nota actual.  
   - La calificación debe tener valores apropiados.  
   - La calificación debe actualizarse sin recargar la página.  

### Código HTML:
```html
<div>
    <h3>Parte 1: Mensaje de Bienvenida</h3>
    <label for="nombre">Ingrese su nombre:</label>
    <input type="text" id="nombre">
    <button type="button" id="btn-enviar">Enviar</button>
    <p id="mensaje"></p>
</div>

<hr>

<div>
    <h3>Parte 2: Contador de Calificación</h3>
    <p>Nota actual: <span id="calificacion">1</span></p>
    <button type="button" id="btn-disminuir">Disminuir</button>
    <button type="button" id="btn-aumentar">Aumentar</button>
</div>
```

Implemente un sistema para modificar la nota actual, utilizando la plantilla disponible más abajo, y programe únicamente donde se le indica. Se espera que tras apretar un botón, la nota se actualice sin la necesidad de recargar la página. No está permitido modificar el HTML.

**Respuesta**:
```js
// Obtener elementos para el mensaje de bienvenida
let pMessage = document.getElementById("mensaje");
let buttonSend = document.getElementById("btn-enviar");

// Obtener elementos para el contador
let buttonUp = document.getElementById("btn-aumentar");
let buttonDown = document.getElementById("btn-disminuir");

// Calificación inicial
let grade = document.getElementById("calificacion");

// Función para mostrar mensaje de bienvenida
const mostrarMensaje = () => {
    const input_name = document.getElementById("nombre").value;

    // validar nombre no vacio
    if (input_name.length < 1) {
        alert("Debe ingresar un nombre");
    } else {
    // variable del mensaje
    const message = `Hello, ${input_name}, how are you?`;
    
    pMessage.style.color = "blue";
    pMessage.style.fontWeight = "bold";
    pMessage.innerHTML = message;
    };
};

// Función para aumentar la calificación
const aumentarCalificacion = () => {
    if (validateNumber(grade.innerHTML)){
        grade.innerHTML = Number(grade.innerHTML) + 1;
    } else {
        alert("La calificacion no es un numero entero");
    };
};

// Función para disminuir la calificación
const disminuirCalificacion = () => {
    if (validateNumber(grade.innerHTML)){
        grade.innerHTML = Number(grade.innerHTML) - 1;
    } else {
        alert("La calificacion no es un numero entero");
    };
};

// funcion para validar sin una variable es un numero entero
const validateNumber = (value) =>  {
    return Number.isInteger(Number(value));
};

// Asignar eventos
buttonSend.onclick = mostrarMensaje;
buttonUp.onclick = aumentarCalificacion;
buttonDown.onclick = disminuirCalificacion;
```
