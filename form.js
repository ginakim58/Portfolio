document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Collect form data
    const firstName = document.getElementById('f_name').value;
    const lastName = document.getElementById('l_name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a confirmation message
    alert('Thank you for your message!');

    // Log the collected data
    console.log('Form Submission:');
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
  });
});