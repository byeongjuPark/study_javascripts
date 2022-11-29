let inputTask = document.querySelector("#inputTask");
let addBtn = document.querySelector("#addBtn");
let itemList = document.querySelector("#items");

inputTask.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    addItem();
  }
});
addBtn.addEventListener("click", (event) => {
  addItem();
});

function addItem() {
  let task = inputTask.value;
  if (task == "") {
    alert("please enter a task");
    return;
  }
  let text = `<li>
    <span class="task">${task}</span>
    <span id="icons">
    <span class="like">
    <i class="material-icons">favorite_border</i>
  </span>
  <span class="delete">
    <i class="material-icons">delete</i>
  </span>
  </span>
    
  </li>`;

  console.log(inputTask.value);
  itemList.insertAdjacentHTML("beforeend", text);

  inputReset();
}

itemList.addEventListener("click", (event) => {
  if (event.target.innerHTML == "favorite_border") {
    event.target.innerHTML = "favorite";
  } else if (event.target.innerHTML == "favorite")
    event.target.innerHTML = "favorite_border";
});

itemList.addEventListener("click", (event) => {
  if (event.target.innerHTML == "delete") {
    event.target.parentElement.parentElement.parentElement.remove();
  }
});

function inputReset() {
  var input = document.getElementById("inputTask");
  input.value = null;
}
