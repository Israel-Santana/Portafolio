// Inicializa EmailJS con tu user ID
//emailjs.init("israelsantana373@gmail.com"); // Reemplaza con tu user ID
emailjs.init({
    publicKey: 'YOUR_PUBLIC_KEY',
  });

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene el envío del formulario por defecto

    // Recolecta los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const numero = document.getElementById("numero").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;

    // Envía el formulario usando EmailJS
    emailjs.sendForm("default_service", "template_ea40br3", this)
        .then(function(response) {
            document.getElementById("resultado").innerHTML = "Mensaje enviado. ¡Gracias por contactarnos!";
            document.getElementById("contact-form").reset();
        }, function(error) {
            document.getElementById("resultado").innerHTML = "Error al enviar el mensaje. Por favor, inténtalo de nuevo.";
        });
});
