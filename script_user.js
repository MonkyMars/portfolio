const button_text = document.getElementById("button1");
// Function to set a cookie with a specified expiration date
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function login(event) {
  event.preventDefault(); // Prevent form submission

  // Get the values from the input fields
  var email = document.getElementById('email').value.toLowerCase();
  var password = document.getElementById('password').value;

  // Define an array of user objects with email and password properties
  var users = [
    { email: 'levinoppers69@gmail.com', password: 'password' },
    { email: 'l113232@gsr.nl', password: 'HTMLisCool123' },
    { email: 'l113175@gsr.nl', password: 'WeetIkVeel123' }
  ];

  // Check if the entered email and password match any user in the array
  var user = users.find(function(user) {
    return user.email === email && user.password === password;
  });

  if (user) {
    button_text.value = "Logging in...";
    window.location.href = 'user_info.html';
    // Update the cookie with the new email value
    setCookie('cookieBy', email, 30); // Update the cookie with a new expiration date (30 days)
  } else {
    alert('Invalid email or password. Please try again.');
  }
}
