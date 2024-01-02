document.getElementById("registrationForm").addEventListener("submit", function(event) {
    var password = document.getElementById("password").value;
    if (!validatePassword(password)) {
      event.preventDefault();
      alert("La contraseña no cumple con los criterios de seguridad.");
    }
  });
  
  document.getElementById("password").addEventListener("input", function() {
    var password = document.getElementById("password").value;
    var strengthElement = document.getElementById("passwordStrength");
    strengthElement.innerHTML = getPasswordStrength(password);
  });
  
  function validatePassword(password) {
    
    return password.length >= 8 && /[a-zA-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
  }
  
  function getPasswordStrength(password) {
    var strength = 0;
  
  
    strength += password.length >= 8 ? 1 : 0;
    strength += /[a-z]/.test(password) ? 1 : 0;
    strength += /[A-Z]/.test(password) ? 1 : 0;
    strength += /\d/.test(password) ? 1 : 0;
    strength += /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password) ? 1 : 0;
  
    switch (strength) {
      case 0:
        return "Contraseña débil";
      case 1:
      case 2:
        return "Contraseña moderada";
      case 3:
      case 4:
        return "Contraseña fuerte";
      case 5:
        return "Contraseña muy fuerte";
    }
  }
  