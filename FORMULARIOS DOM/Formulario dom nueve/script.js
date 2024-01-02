function handleFileChange() {
    var fileInput = document.getElementById("fileInput");
    var uploadProgress = document.getElementById("uploadProgress");
  
 
    uploadProgress.value = 0;
  }
  
  function uploadFile() {
    var fileInput = document.getElementById("fileInput");
    var uploadProgress = document.getElementById("uploadProgress");
  
    var file = fileInput.files[0];
    if (!file) {
      alert("Selecciona un archivo antes de subirlo.");
      return;
    }
  
  
    var formData = new FormData();
    formData.append("file", file);
  

    fetch("tu_servidor_de_destino", {
      method: "POST",
      body: formData,
      headers: {
    
      },
   
      mode: "no-cors"
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Error al subir el archivo.");
      }
      return response.json();
    })
    .then(data => {
     
      console.log("Archivo subido con éxito:", data);
      alert("Archivo subido con éxito");
    })
    .catch(error => {
     
      console.error("Error al subir el archivo:", error);
      alert("Error al subir el archivo. Inténtalo de nuevo.");
    });
  
    
    var startTime = Date.now();
    var interval = setInterval(function() {
      var elapsedTime = Date.now() - startTime;
      var progressValue = Math.min((elapsedTime / 1000) * 10, 100); // Ejemplo: 10 segundos para llegar al 100%
      uploadProgress.value = progressValue;
  
      if (progressValue === 100) {
        clearInterval(interval);
      }
    }, 100);
  }
  