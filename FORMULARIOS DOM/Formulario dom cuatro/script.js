function updateCities() {
    // Obtén la referencia a los elementos select
    var countrySelect = document.getElementById("country");
    var citySelect = document.getElementById("city");
  
    // Obtiene el valor seleccionado en el campo de país
    var selectedCountry = countrySelect.value;
  
  
    citySelect.innerHTML = "";
  
   
    switch (selectedCountry) {
      case "usa":
        addOption(citySelect, "ny", "Nueva York");
        addOption(citySelect, "la", "Los Ángeles");
        break;
      case "canada":
        addOption(citySelect, "toronto", "Toronto");
        addOption(citySelect, "vancouver", "Vancouver");
        break;
      case "uk":
        addOption(citySelect, "london", "Londres");
        addOption(citySelect, "manchester", "Mánchester");
        break;
      default:
        // En caso de una opción no reconocida, puedes manejarlo aquí
        break;
    }
  }
  
  function addOption(selectElement, value, text) {
  
    var option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.add(option);
  }
  