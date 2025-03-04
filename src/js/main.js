import { setupFormHandler } from './src/js/modules/formhandler.js';
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Validar el formulario
        if (validateForm()) {
            // Ocultar el formulario y mostrar el mensaje de confirmación
            contactForm.style.display = "none";
            confirmationMessage.style.display = "block";
        }
    });

    function validateForm() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!name) {
            alert("Por favor, ingrese su nombre.");
            return false;
        }

        if (!email || !validateEmail(email)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            return false;
        }

        if (!message) {
            alert("Por favor, ingrese su mensaje.");
            return false;
        }

        return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
