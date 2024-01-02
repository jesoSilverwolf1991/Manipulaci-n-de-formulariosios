function validateUsername() {
    var usernameInput = document.getElementById("username");
    var usernameError = document.getElementById("usernameError");
  
    if (usernameInput.value.length < 3) {
      usernameError.textContent = "El nombre de usuario debe tener al menos 3 caracteres.";
    } else {
      usernameError.textContent = "";
    }
  }
  
  function validatePassword() {
    var passwordInput = document.getElementById("password");
    var passwordError = document.getElementById("passwordError");
  
    if (passwordInput.value.length < 6) {
      passwordError.textContent = "La contraseña debe tener al menos 6 caracteres.";
    } else {
      passwordError.textContent = "";
    }
  }
  
  function submitForm() {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");
  
    validateUsername();
    validatePassword();
  
    
    if (usernameError.textContent || passwordError.textContent) {
      return;
    }
  
   
    
    alert("Inicio de sesión exitoso");
  
  }
  