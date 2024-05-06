document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
    
    // Here you can add your login validation logic
    if (username === "user" && password === "password") {
      // If validation passes, show popup
      document.getElementById("overlay").style.display = "flex";
    } else {
      // If validation fails, show error message
      errorMessage.innerText = "Incorrect username or password.";
    }
  });
  
  document.getElementById("close-popup").addEventListener("click", function() {
    // Close popup
    document.getElementById("overlay").style.display = "none";
  });
  