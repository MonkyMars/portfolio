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

document.addEventListener("DOMContentLoaded", function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
  }

  // Retrieve the email value from the cookie
  const emailValue = getCookie('cookieBy');

  // Display the email value in the emailParagraph element
  const emailParagraph = document.getElementById('emailParagraph');
  if (emailValue) {
    emailParagraph.textContent = "Email: " + emailValue;
  } else {
    emailParagraph.textContent = "Email not found in cookie.";
    // Show the popup when there are no cookies
    document.querySelector(".wrapper").classList.add("show");
  }

  // Event listener for accept button click
  document.getElementById("acceptBtn").addEventListener("click", function() {
    // Get the logged-in user's email if available
    const loggedInUserEmail = ""; // Replace this with code to get the logged-in user's email
    // Set the cookie value as the user's email if available, else default to 'user'
    const cookieValue = loggedInUserEmail || 'user';
    // Set the cookie with the determined value
    setCookie('cookieBy', cookieValue, 15); // Expires in 15 days
    // Hide the popup after setting the cookie
    document.querySelector(".wrapper").classList.remove("show");
    // Update the email paragraph with the new email value
    emailParagraph.textContent = "Email: " + cookieValue;
  });
});
