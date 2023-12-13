function validateForm(event) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "" || password === "") {
      alert("Please fill in all fields.");
    } else if (username !== "Satyajeet@5275" || password !== "pass1234") {
      alert("Invalid username or password.");
    } else {
      alert("Login successful!");
    }
  }
  