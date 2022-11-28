function validateForm() {
  //document.forms["myForm"]["fname"].value
  //<Form>: myForm -> <input>: fname의 값
  let fnamevalue = document.forms["myForm"]["fname"].value;

  //입력하지 않은 상태로 버튼을 누를 시 실행
  //<div id="fnameErrorId">를 미리 만들어 두어 빨간 텍스트가 들어갈 공간 확보
  if (fnamevalue == "") {
    let queryErrorId = document.querySelector("#fnameErrorId");
    queryErrorId.innerHTML = "Name must be filled in";
    queryErrorId.style.color = "red";
    return false;
  }
  //참값 리턴
  console.log(fnamevalue);
  return true;
}

let btnsearch = document.querySelector("#btnsearch");
//addEventListener "click" --> 클릭 입력으로 이벤트가 실행됨
btnsearch.addEventListener("click", (event) => {
  searchForm(event);
});

function searchForm(event) {
  //input에 저장된 데이터 불러옴
  let searchInput = document.querySelector("#searchId");
  //데이터의 값을 저장함
  let searchValue = searchInput.value;
  let text;
  //데이터의 값이 1보다 작거나 10보다 크면 출력과 아닐 경우 나눠서 text에 저장
  if (searchValue < 1 || searchValue > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  //if문을 통해 저장한 text로 텍스트 교체
  document.querySelector("#searchDescId").innerHTML = text;
  //serch라 해놓고... serch는 없음...?
}
