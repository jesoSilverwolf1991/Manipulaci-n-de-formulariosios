function submitForm() {
    var form = document.getElementById("asyncForm");
    var statusMessage = document.getElementById("statusMessage");
  
    var formData = new FormData(form);
  
 
    fetch("tu_servidor_de_destino", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      return response.json();
    })
    .then(data => {
     
      statusMessage.textContent = "Formulario enviado con éxito!";
      statusMessage.style.color = "#4caf50";
    })
    .catch(error => {
   
      statusMessage.textContent = "Error al enviar el formulario. Inténtalo de nuevo.";
      statusMessage.style.color = "#f44336";
    });
  }