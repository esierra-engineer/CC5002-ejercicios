const USERNAME = "Erick";
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
    } else if(input_name == USERNAME){
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

// funcion para validar si una variable es un numero entero
const validateNumber = (value) =>  {
    return Number.isInteger(Number(value));
};

// Asignar eventos
buttonSend.onclick = mostrarMensaje;
buttonUp.onclick = aumentarCalificacion;
buttonDown.onclick = disminuirCalificacion;
