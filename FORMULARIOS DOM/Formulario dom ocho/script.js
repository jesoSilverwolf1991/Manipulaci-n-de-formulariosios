function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }
  
  function filterOptions() {
    var searchInput = document.getElementById("searchInput");
    var dropdown = document.getElementById("dropdown");
    var options = dropdown.getElementsByClassName("option");
  
    var filter = searchInput.value.toLowerCase();
  
    for (var i = 0; i < options.length; i++) {
      var optionText = options[i].textContent.toLowerCase();
      var optionValue = options[i].getAttribute("data-value");
  
      if (optionText.indexOf(filter) > -1 || optionValue.indexOf(filter) > -1) {
        options[i].style.display = "";
      } else {
        options[i].style.display = "none";
      }
    }
  }
  
  function selectOption(option) {
    var selectedOptionsContainer = document.getElementById("selectedOptions");
    var selectedOptionValues = Array.from(selectedOptionsContainer.children).map(option => option.getAttribute("data-value"));
  
    if (selectedOptionValues.includes(option.getAttribute("data-value"))) {
     
      option.classList.remove("selected");
      option.setAttribute("aria-selected", "false");
      option.setAttribute("tabindex", "0");
      selectedOptionsContainer.removeChild(document.getElementById(option.getAttribute("data-value")));
    } else {
     
      option.classList.add("selected");
      option.setAttribute("aria-selected", "true");
      option.setAttribute("tabindex", "-1");
  
      var selectedOption = document.createElement("div");
      selectedOption.textContent = option.textContent;
      selectedOption.setAttribute("data-value", option.getAttribute("data-value"));
      selectedOptionsContainer.appendChild(selectedOption);
    }
  
    
    document.getElementById("dropdown").style.display = "none";
  }
  