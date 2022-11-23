const questions = [
  {
    Qnum: "1",
    Q: "교수는 수업 전 강의 목표를 명확히 제시하였습니까?",
    questions_uid: "Q1",
  },
  {
    Qnum: "2",
    Q: "강의의 내용은 체계적이고 성의있게 구성되었는가?",
    questions_uid: "Q2",
  },
  {
    Qnum: "3",
    Q: "교수는 강의 내용에 대해 전문적 지식이 있었는가?",
    questions_uid: "Q3",
  },
  {
    Qnum: "4",
    Q: "강의 진행 속도는 적절하였는가?",
    questions_uid: "Q4",
  },
];

const example_list = [
  { example: "전혀 아니다", example_uid: "E1", order: 1 },
  { example: "아니다", example_uid: "E2", order: 2 },
  { example: "보통이다", example_uid: "E3", order: 3 },
  { example: "그렇다", example_uid: "E4", order: 4 },
  { example: "매우 그렇다", example_uid: "E5", order: 5 },
];

const answers = [
  { questions_uid: "Q1", example_uid: "E1" },
  { questions_uid: "Q1", example_uid: "E2" },
  { questions_uid: "Q1", example_uid: "E3" },
  { questions_uid: "Q2", example_uid: "E1" },
  { questions_uid: "Q2", example_uid: "E2" },
  { questions_uid: "Q3", example_uid: "E1" },
  { questions_uid: "Q3", example_uid: "E2" },
  { questions_uid: "Q3", example_uid: "E3" },
  { questions_uid: "Q3", example_uid: "E4" },
  { questions_uid: "Q3", example_uid: "E5" },
  { questions_uid: "Q4", example_uid: "E1" },
  { questions_uid: "Q4", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E3" },
];

let user_answers = [
  { questions_uid: "Q1", user_answer: "" },
  { questions_uid: "Q2", user_answer: "" },
  { questions_uid: "Q3", user_answer: "" },
  { questions_uid: "Q4", user_answer: "" },
];
//1. 페이지 체크 기능? -> 문항의 끝? -> 하드코딩? OR 배열길이?
// --> questions[Qnum]
//2. 페이지 출력 -> 이어붙이기 (버튼은 한번씩 비워야함)
//3.
let checkPage = 1;

let queryPrevButton = document.querySelector("#prev");
let queryNextButton = document.querySelector("#next");
queryPrevButton.addEventListener("click", prev);
queryNextButton.addEventListener("click", next);
let checkArea = document.querySelector("#checkArea");

function prev() {
  if (checkPage == 1) {
    alert("없는 페이지입니다.");
  } else {
    checkPage--;

    printQusetion(
      questions[checkPage - 1]["Qnum"],
      questions[checkPage - 1]["Q"]
    );
    checkArea.innerHTML = "";
    printAnswer(questions[checkPage - 1]);
  }
}

function next() {
  if (checkPage == questions.length) {
    alert("마지막 페이지입니다.");
  } else {
    checkPage++;
    printQusetion(
      questions[checkPage - 1]["Qnum"],
      questions[checkPage - 1]["Q"]
    );
    checkArea.innerHTML = "";
    printAnswer(questions[checkPage - 1]);
  }
}

function printQusetion(qnum, nextContents) {
  let contents = document.querySelector(".contents");
  contents.innerHTML = qnum + ". " + nextContents;
}

function printAnswer(Anum) {
  answer.innerHTML = printAnswer(Anum); //string 리턴하는 function
}

function printAnswer(Anum) {
  // Anum 의 quid를 answers 의 quid랑 같은것들을
  // --> answers에 대한 loop를 돌려서 조회
  let result;
  answers.forEach((element1) => {
    if (element1["questions_uid"] == Anum["questions_uid"]) {
      example_list.forEach((element2) => {
        if (element2["example_uid"] == element1["example_uid"]) {
          checkArea.innerHTML += `<div class="check">
          <input
            class="checkAnswer"
            type="radio"
            name="answer"
            id="answer"
            value="E${element2.order}"
          />
          <label class="answerLabel" for="answer"> (${element2.order}) ${element2.example} </label>
        </div>`;
        }
      });
    }
  });
}
