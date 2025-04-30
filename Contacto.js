document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Previene el envío real

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        let errores = [];

        if (nombre === "") {
            errores.push("El nombre es obligatorio.");
        }

        if (!email.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)) {
            errores.push("El correo electrónico no es válido.");
        }

        if (mensaje.length < 10) {
            errores.push("El mensaje debe tener al menos 10 caracteres.");
        }

        if (errores.length > 0) {
            alert("Por favor corrija los siguientes errores:\n\n" + errores.join("\n"));
        } else {
            alert("Formulario enviado correctamente.");
            form.reset();
        }
    });
});
