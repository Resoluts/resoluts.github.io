// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const form = document.querySelector('form[action="#"]');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = {
            nome: document.getElementById('nome').value,
            empresa: document.getElementById('empresa').value,
            celular: document.getElementById('celular').value,
            email: document.getElementById('email').value,
            mensagem: document.getElementById('mensagem').value
        };

        // Send data to the webhook
        fetch('https://hook.us2.make.com/dzpwtfmhwpicq79g7x94zt3q8slb2klq', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                alert('Mensagem enviada com sucesso!');
                form.reset(); // Reset the form after successful submission
            } else {
                alert('Erro ao enviar a mensagem. Tente novamente.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao enviar a mensagem. Tente novamente.');
        });
    });
});
