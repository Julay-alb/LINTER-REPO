export function setupFormHandler() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Aquí puedes agregar la lógica para enviar los datos del formulario
        console.log('Nombre:', name);
        console.log('Correo Electrónico:', email);
        console.log('Mensaje:', message);

        // Mostrar mensaje de confirmación
        const confirmationMessage = document.getElementById('confirmationMessage');
        confirmationMessage.style.display = 'block';

        // Ocultar el formulario
        form.style.display = 'none';
    });
}


