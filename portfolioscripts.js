document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert(`Thank you for your message, ${name}!`);
        // Here you can add functionality to send the form data to a server if needed
    } else {
        alert('Please fill out all fields.');
    }
});
