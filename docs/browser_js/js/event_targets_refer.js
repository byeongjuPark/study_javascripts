let querysingle = document.querySelector("#single");
querysingle.addEventListener("click", singleEvent);

function singleEvent(event) {
  console.log(event);
  querysingle.innerHTML = "take one Event";
}
