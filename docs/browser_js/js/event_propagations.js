// document.querySelector('#item1')
// document.querySelector('#item2')

// let queryInputAll = document.querySelectorAll("input");
// for (let queryInput of queryInputAll) {
//   queryInput.addEventListener("click", (event) => {
//     alert(`clicked ${event.target.id} : ${event.target.value}`);
//   });
// }

let newItem = `<li>
                <div>
                    <input type="checkbox" name="" id="item3">
                    <label for="item3">item three</label>
                    <span><i class="material-icons delete">delete</i></span>
                </div>
            </li>`;

let queryItemList = document.querySelector(".item-list");
queryItemList.addEventListener("click", (event) => {
  if (event.target.id != "" && event.target.id != "undefined") {
    alert(`clicked ${event.target.id} : ${event.target.value}`);
  }
  if (event.target.innerHTML == "delete") {
    //event.target.remove();
    event.target.parentElement.parentElement.parentElement.remove();
  }
}); //상위 element에 Event 설정
// queryItemList.innerHTML = queryItemList.innerHTML + newItem;
//insertAdjacentHTML -> 덮어쓰기 말고 이어쓰기 방식...
queryItemList.insertAdjacentHTML("beforeend", newItem);
// queryItemList.insertAdjacentHTML("beforebegin", newItem);

// let queryInputs = document.querySelectorAll("input");
// for (let queryInput of queryInputs) {
//   queryInput.addEventListener("click", (event) => {
//     alert(`clicked ${event.target.id} : ${event.target.value}`);
//   });
// }
