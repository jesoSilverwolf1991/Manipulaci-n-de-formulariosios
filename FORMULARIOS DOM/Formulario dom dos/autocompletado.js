document.addEventListener("DOMContentLoaded", function () {
    var inputDireccion = document.getElementById("direccion");
    var inputCiudad = document.getElementById("ciudad");
    var inputEstado = document.getElementById("estado");
    var inputCodigoPostal = document.getElementById("codigoPostal");

    
    var autocomplete = new google.maps.places.Autocomplete(inputDireccion);

    
    autocomplete.addListener("place_changed", function () {
        var place = autocomplete.getPlace();

     
        inputCiudad.value = getComponentValue(place, 'locality');
        inputEstado.value = getComponentValue(place, 'administrative_area_level_1');
        inputCodigoPostal.value = getComponentValue(place, 'postal_code');
    });

    function getComponentValue(place, type) {
        for (var i = 0; i < place.address_components.length; i++) {
            var component = place.address_components[i];
            if (component.types.indexOf(type) !== -1) {
                return component.long_name;
            }
        }
        return '';
    }
});
