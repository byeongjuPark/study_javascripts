function changeText() {
  let queryChangeText = document.querySelector("#changetext");
  queryChangeText.innerHTML = "Change On Me!";
}

let queryClickAlert = document.querySelector("#clickalert");
queryClickAlert.addEventListener("click", clickAlert);
function clickAlert() {
  alert("Pop!!!");
}

let queryButton = document.querySelector("#buttonChangeText");
queryButton.addEventListener("click", targetText);

function targetText() {
  let queryTargetText = document.querySelector("#targetText");
  queryTargetText.innerHTML = "Target Text!";
}
