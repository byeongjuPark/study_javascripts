// div.inner 태그 내부에 <div>hello</div>를 추가
//create Element
// let queryInner = document.querySelector("#container .inner");
// element = document.createElement("div");
// helloText = document.createTextNode("hello");

// queryInner.appendChild(element.appendChild(helloText)); //합체~!
// // --> queryInner.innerHTML = "<div>hello</div>";

// //innerHtml
// let animal = { name: "dog", age: 10 };

// let queryApp = document.querySelector("#app .item");
// queryApp.innerHTML = `<div class = 'item'>${animal["name"]} ${animal["age"]}</div>`;

const productsData = [
  { title: "감자칩", weight: 300 },
  { title: "칙촉", weight: 100 },
  { title: "고구마칩", weight: 300 },
];
let listQuery = document.querySelector("#list");

productsData.forEach((element) => {
  listQuery.innerHTML +=
    "<div class = 'item'>" +
    "이름: " +
    element["title"] +
    " 중량: " +
    element["weight"] +
    "</div>";
});
