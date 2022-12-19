// var attempt = 3; // Variable to count number of attempts.
// // Below function Executes on click of login button.
// function validate(){
// var username = document.getElementById("email").value;
// var password = document.getElementById("password").value;
// if ( username == "Formget" && password == "formget#123"){
// alert ("Login successfully");
// window.location = "/Home-signup-trending-page/homepage1.html"; // Redirecting to other page.
// return false;
// }
// else{
// attempt --;// Decrementing by one.
// alert("You have left "+attempt+" attempt;");
// // Disabling fields after 3 attempts.
// if( attempt == 0){
// document.getElementById("email").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").disabled = true;
// return false;
// }
// }
// }


const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", login);

async function login(e) {
  e.preventDefault();
  // Get the login form data
  const email = document.getElementById("login_email").value;
  const password = document.getElementById("login_password").value;

  // Create a JSON object with the login form data
  const data = { email, password };

  // Send the POST request to the login endpoint
  //   const response = await
  fetch("http://localhost:6200/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      // If the login was successful, redirect to the home page
      if (response.ok) {
        // const accessToken = response.accessToken;
        // const id = response.users._id;
        // localStorage.setItem('access_token', accessToken);
        // localStorage.setItem('_id', id);
        alert("Login Successful");
        // console.log(response.json());
        return response.json();
      } else {
        // Otherwise, display an error message
        const errorMessage = response.text();
        alert(errorMessage);
      }
    })
    .then((data) => {
      // do something with the data
      // console.log(data._id);
      const userid = data._id;
      localStorage.setItem("userid", userid);
      // console.log(data.accessToken);
      const access_token = data.accessToken;
      localStorage.setItem("access_token", access_token);
      // retrieve and save username
      const user_name = data.username;
      localStorage.setItem("username", user_name);
      window.location.href = "/client/Home-signup-trending-page/homepage1.html";
    })
    .catch((err) => {
      console.error(err);
      localStorage.clear();
    });
}
