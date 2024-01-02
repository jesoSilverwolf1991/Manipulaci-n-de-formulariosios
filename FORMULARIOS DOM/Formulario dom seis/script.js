function updateTimeOptions() {
    var dateInput = document.getElementById("date");
    var timeSelect = document.getElementById("time");
  
   
    timeSelect.innerHTML = "";
  
   
    var selectedDate = new Date(dateInput.value);
  
   
    var currentHour = new Date().getHours();
  
  
    var availableTimes = [];
  
    if (selectedDate.getDay() === 0 || selectedDate.getDay() === 6) {
     
      availableTimes = ["12:00", "14:00", "18:00"];
    } else {
     
      for (var i = currentHour + 1; i <= 18; i++) {
        if (i < 10) {
          availableTimes.push("0" + i + ":00");
        } else {
          availableTimes.push(i + ":00");
        }
      }
    }
  
  
    for (var i = 0; i < availableTimes.length; i++) {
      var option = document.createElement("option");
      option.value = availableTimes[i];
      option.text = availableTimes[i];
      timeSelect.add(option);
    }
  }
  
  
  updateTimeOptions();
  