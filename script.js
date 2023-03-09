const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const errorMessage = document.querySelector('#error-message');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting
  
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email regex pattern
  
  if (!email) {
    errorMessage.textContent = 'Oops! Please add your email';
    errorMessage.classList.add('show');
    emailInput.focus();
  } else if (!emailRegex.test(email)) {
    errorMessage.textContent = 'Oops! Please check your email';
    errorMessage.classList.add('show');
    emailInput.focus();
  } else {
    // Email is valid, submit form
    form.submit();
  }
});
