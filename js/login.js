let userEmail = "rony@gmail.com";
let userPassword = "102030";
document.getElementById("preloader").style.display = "none";
//   document.getElementById("inputForm").style.display="block"

const loginButton = document.getElementById("loginButton");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");

loginButton.addEventListener("click", function (event) {
  event.preventDefault();
  // console.log(event);
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  if (email.value == "") {
    // console.log("oi beda email da")
    emailError.innerText = "give me email";
    email.style.borderColor = "red";
    email.focus();
  } else if (password.value == "") {
    // console.log("password da");
    passwordError.innerText = "give me password";
    password.style.borderColor = "red";
    password.focus();
  } else if (email.value == userEmail && password.value == userPassword) {
    document.getElementById("inputForm").style.display = "none";
    document.getElementById("preloader").style.display = "block";

    setTimeout(function () {
      window.location.href = "index.html";
    }, 3000);
    // window.location.href="index.html"
  } else {
    alert("User not found");
    // console.log("ami")
  }
});
