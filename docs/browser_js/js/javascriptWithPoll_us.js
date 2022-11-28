const questions_list = [
  {
      question: "해당 매장을 방문시 매장은 청결 하였습니까?",
      questions_uid: "Q1",
      order: 1
  },
  {
      question: "주문시 직원은 고객님께 친절 하였습니까?",
      questions_uid: "Q2",
      order: 2
  },
  {
      question: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
      questions_uid: "Q3",
      order: 3
  },
  {
      question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
      questions_uid: "Q5",
      order: 4
  },
  {
      question: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
      questions_uid: "Q4",
      order: 5
  }
];

const answer_list = [
  { answer: "전혀 아니다", answer_uid: "E1", order: 1 },
  { answer: "아니다", answer_uid: "E2", order: 2 },
  { answer: "보통이다", answer_uid: "E3", order: 3 },
  { answer: "그렇다", answer_uid: "E4", order: 4 },
  { answer: "매우 그렇다", answer_uid: "E5", order: 5 }
];

const questions_answers = [
  { questions_uid: "Q1", answer_uid: "E1" },
  { questions_uid: "Q1", answer_uid: "E2" },
  // { questions_uid: "Q1", answer_uid: "E3" },
  { questions_uid: "Q2", answer_uid: "E1" },
  { questions_uid: "Q2", answer_uid: "E2" },
  { questions_uid: "Q2", answer_uid: "E3" },
  // { questions_uid: "Q2", answer_uid: "E4" },
  { questions_uid: "Q3", answer_uid: "E1" },
  { questions_uid: "Q3", answer_uid: "E2" },
  { questions_uid: "Q4", answer_uid: "E1" },
  { questions_uid: "Q4", answer_uid: "E2" },
  { questions_uid: "Q4", answer_uid: "E3" },
  { questions_uid: "Q4", answer_uid: "E4" },
  { questions_uid: "Q4", answer_uid: "E5" },
  { questions_uid: "Q5", answer_uid: "E1" },
  { questions_uid: "Q5", answer_uid: "E2" },
  { questions_uid: "Q5", answer_uid: "E3" }
];

let polls = []; // 전체 묶음
let question_compare;
let questions = []; // 내부 묶음

//1차 방식 : [Q1,Q2,Q3,Q4,Q5]
//2차 방식 : Array Of Array [[Q1, E1, E2],[Q2, E1, E2, E3]...]]

for (let idx = 0; idx < questions_answers.length; idx++) { // questions_answers.length = 15
  if (question_compare != questions_answers[idx]["questions_uid"]) { // emt != Q1
      if (questions.length > 0) { // 처음 나온게 아니라면
          polls.push(questions); // polls 에 Q1을 넣고
          questions = []; // 초기화
      }
      questions.push(`${questions_answers[idx]["questions_uid"]}`);
      questions.push(`${questions_answers[idx]["answer_uid"]}`);
  } else {
      questions.push(`${questions_answers[idx]["answer_uid"]}`);
  }
  question_compare = questions_answers[idx]["questions_uid"]; // 이전 uid 입력

  // 5번째 항목 추가
  if (idx + 1 >= questions_answers.length) {
      polls.push(questions);
  }
}

//출력
//3차 방식:object in Array
function getQuestionByUid(questions_uid) {
  let questions_desc;
  for (question_item of questions_list) {
      if (question_item["questions_uid"] >= questions_uid) {
          questions_desc = question_item["question"];
      }
  }
  return questions_desc;
}

for (poll of polls) {
  console.log(`${getQuestionByUid(poll["questions_uid"])}`);
  //console.log(`${poll["questions_uid"]}`); // == polls[idx]
  let answer_uids = poll["answer_uids"];
  answer_uids.forEach((answer_uid, index) => {
      console.log(`${index + 1}. ${answer_uid}`);
  });
}
console.log();