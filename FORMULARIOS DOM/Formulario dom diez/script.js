function agregarCampo() {

    const ultimoCampo = document.querySelector('.form-group:last-child');
    const nuevoCampo = ultimoCampo.cloneNode(true);
    document.getElementById('dynamic-fields').appendChild(nuevoCampo);
  
    
    nuevoCampo.querySelector('input').value = '';
  }
  
 
  document.getElementById('dynamic-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    
    const formData = new FormData(this);
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
  });