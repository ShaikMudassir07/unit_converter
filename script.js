function convert() {
    var inputValue = document.getElementById("inputValue").value;
    var unitFrom = document.getElementById("unitFrom").value;
    var unitTo = document.getElementById("unitTo").value;
  
    // Perform the conversion
    var result;
    if (unitFrom === unitTo) {
      result = inputValue;
    } else if (unitFrom === "cm") {
      if (unitTo === "m") {
        result = inputValue / 100;
      } else if (unitTo === "km") {
        result = inputValue / 100000;
      } else if (unitTo === "in") {
        result = inputValue * 0.393701;
      } else if (unitTo === "ft") {
        result = inputValue * 0.0328084;
      } else if (unitTo === "yd") {
        result = inputValue * 0.0109361;
      } else if (unitTo === "mi") {
        result = inputValue * 0.00000621371;
      }
    } else if (unitFrom === "m") {
      // Add conversion logic for meter
      // ...
    }
    // Add conversion logic for other units
  
    document.getElementById("result").innerHTML = result;
  }
  