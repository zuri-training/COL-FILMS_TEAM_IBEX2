// JavaScript for handling the form submission
const form = document.querySelector("#signup-form");

console.log("test javascript");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = form.querySelector("#username").value;
  const email = form.querySelector("#email").value;
  const password = form.querySelector("#password").value;

  // Create a JSON object with the user's signup details
  const userData = {
    username: username,
    email: email,
    password: password,
  };
  console.log(userData);
  console.log(userData);

  // Send the user data as a JSON object to the server
  // fetch("http://localhost:6100/api/auth/register", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(userData),
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     if (data.status === "success") {
  //       // Signup was successful, do something...
  //       console.log("registered successfully");
  //     } else {
  //       // Handle any errors
  //       console.log("registration failed");
  //     }
  //   });

  getResponse();
  getLogin();

  async function getResponse() {
    const response = await fetch("http://localhost:6100/api/auth/register", {
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
  }

  async function getLogin() {
    const response = await fetch("http://localhost:6100/api/auth/login", {
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
  }
});



// fetch("http://localhost:6100/api/movies")
//   .then((data) => {
//     console.log(data);
//     return data.json();
//   })
//   .then((completeddata) => {
//     // console.log(completeddata[2].title);
//     let data1 = "";
//     completeddata.map((values) => {
//       data1 += ` 
//     //   <div class="card">
//     //         <h1 class="title">${values.title}</h1>
//     //         <img src=${values.image} alt="img" class='images'>
//     //         <p>${values.description}</p>
//     //         <p class="category">${values.category}</p>
//     //         <p class="price">${values.price}</p>
//     //     </div>

//         <div class="homepage1_video">
//                 <div class="video"><a href="/COL-FILMS_TEAM_IBEX2/client/Home-signup-trending-page/homepage2.html">
//                     <img src="homepage 1 images/image1.png" alt="" width="312px">
//                     <p class="video_duration">10:25</p>
//                 </a></div>
//                 <div class="homepage1_video_container_info">
//                     <div class="homepage1_video_title_stats homepage1_video_stats">
//                         <p class="homepage1_video_title">Easy Drawing</p>
//                         <p class="homepage1_video_stats">Choker Wheels | 2k Views</p>
//                     </div>
//                     <div class="homepage1_video_action_icons_container">
//                         <a class="homepage1_video_action_icons" href="#"><img src="homepage 2 images/clock (1).png" alt="" width="16px"></a>
//                         <a class="homepage1_video_action_icons download" href="#"><img src="homepage 2 images/download.png" alt="download_image" width="16px"></a>
//                     </div>
//                 </div>
//             </div>`;
//     });
//     document.getElementById("cards").innerHTML = data1;
//   })
//   .catch((err) => {
//     console.log(err);
//   });
