// Function to update the clock
function updateClock() {
    // Get the current time
    var currentTime = new Date();
  
    // Extract hours, minutes, and seconds from the current time
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    // Format the time strings to add leading zeros
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    // Display the formatted time in the clock element
    document.getElementById("clock").textContent = hours + ":" + minutes + ":" + seconds;
  }
  
  // Call the updateClock function once to initialize the clock
  updateClock();
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  