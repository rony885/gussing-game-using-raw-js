document.getElementById("playerTwo").style.display = "none";
document.getElementById("playerThree").style.display = "none";

let playerOneError = document.getElementById("playerOneError");
let playerTwoError = document.getElementById("playerTwoError");
let playerThreeError = document.getElementById("playerThreeError");

let gameNumber;

document
  .getElementById("playerOneBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("playerOne").style.transform = "scale(1)";

    gameNumber = document.getElementById("playerOneInput").value;

    if (gameNumber >= 1 && gameNumber <= 9) {
      // document.getElementById("playerTwo").style.transform = "scale(1)";
      document.getElementById("playerTwo").style.display = "block";
      document.getElementById("playerThree").style.display = "block";

    } else if (gameNumber == "") {
      playerOneError.innerText = "Please give me number";
      // playerOneError.style.color = "red";
      document.getElementById("playerOneInput").style.borderColor = "red";
      playerOneError.style.color = "red";
    } else {
      playerOneError.innerText = "Please enter a valid number between 1 and 9.";
      document.getElementById("playerOneInput").style.borderColor = "red";
      playerOneError.style.color = "red";
      document.getElementById("playerOneInput").focus();
      
    }
  });

document
  .getElementById("playerTwoBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let playerTwoInputNumber;
    gameNumber.value = "";
    let playerTwoInput = document.getElementById("playerTwoInput").value;

    if (playerTwoInput == "") {
      document.getElementById("playerTwoInput").style.borderColor = "red";
      playerTwoError.style.color = "red";
      playerTwoError.innerText = "please give me number";
    } else if (playerTwoInput == gameNumber) {
      setTimeout(() => {
        window.location.href = "win.html";
      }, 2000);
    } else {
      setTimeout(() => {
        window.location.href = "loss.html";
      }, 2000);
    }
  });

document
  .getElementById("playerThreeBtn")
  .addEventListener("click", function(event){
    event.preventDefault();
    // let playerThreeInputNumber;
    gameNumber.value = "";
    let playerThreeInput = document.getElementById("playerThreeInput").value;
    
    if(playerThreeInput == ""){
      document.getElementById("playerThreeInput").style.borderColor = "red";
      playerThreeError.style.color = "red";
      playerThreeError.innerText ="please give me number";
      console.log(playerThreeInput);
    } else if(playerThreeInput == gameNumber){
      window.location.href = "win.html";
    } 
   /*  else{
      window.location.href = "loss.html";
    } */
  });
