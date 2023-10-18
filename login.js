function validateForm() {
    let isValid = true;
const email = document.getElementById('email').value;

  const emailError = document.getElementById('emailError');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    emailError.textContent = 'Please enter a valid email address';
    isValid = false;
  } else {
    emailError.textContent = ''; 
  }
  const password = document.getElementById('pwd').value;
  const passwordError = document.getElementById('passwordError');
  if (password.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long';
    isValid = false;
  } else {
    passwordError.textContent = ''; 
  }

  return isValid;
}
