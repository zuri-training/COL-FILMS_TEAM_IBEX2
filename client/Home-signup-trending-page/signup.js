document.getElementById("register").addEventListener("submit", function (e) {
  e.preventDefault();

  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Create a JSON object with the user's signup details
  const userData = {
    username: username,
    email: email,
    password: password,
  };
  console.log(userData);
  console.log(userData);

  getResponse();

  async function getResponse() {
    const response = await fetch("http://localhost:6200/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    alert('Registered successfully');
    window.location.href = "../login-contact-page/zuri-colfilm-1/Login-Page/login.html";
  }
});
