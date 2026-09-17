document.addEventListener("DOMContentLoaded", function () {
    const anioActual = new Date().getFullYear();
    const elementoAnio = document.getElementById("anio");
    if (elementoAnio) {
        elementoAnio.textContent = anioActual;
    }

    // Mensaje de bienvenida en la consola (solo como ejemplo de JS)
    console.log("Bienvenido al sitio del Instituto Académico del Valle");
});