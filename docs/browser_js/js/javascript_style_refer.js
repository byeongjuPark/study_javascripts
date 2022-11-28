let removeBtn = document.querySelector("#removeBtn");
let hideBtn = document.querySelector("#hideBtn");
let resetBtn = document.querySelector("#resetBtn");

let removeDiv;
let hideDiv;

removeBtn.addEventListener("click", (event) => {
  removeEvent(event);
});

hideBtn.addEventListener("click", (event) => {
  hideEvent(event);
});

resetBtn.addEventListener("click", (event) => {
  resetEvent(event);
});

function removeEvent(event) {
  removeDiv = document.querySelector("#removeDiv");
  //없애기
  removeDiv.style.display = "none";
}

function hideEvent(event) {
  hideDiv = document.querySelector("#hideDiv");
  //안보이게
  hideDiv.style.visibility = "hidden";
}

function resetEvent(event) {
  //none -> block
  removeDiv.style.display = "block";
  //hidden -> visible
  hideDiv.style.visibility = "visible";
}
