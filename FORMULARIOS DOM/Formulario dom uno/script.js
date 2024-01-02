document.getElementById("miFormulario").addEventListener("submit", function(event) {
    
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var contrasena = document.getElementById("contrasena").value;

   
    if (nombre === "" || email === "" || contrasena === "") {
        alert("Por favor, completa todos los campos.");
        event.preventDefault(); 
    }
   
});