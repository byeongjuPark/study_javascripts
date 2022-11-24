const questions_list = [
  {
    question: "해당 매장을 방문시 매장은 청결 하였습니까?",
    questions_uid: "Q1",
    order: 1,
  },
  {
    question: "주문시 직원은 고객님께 친절 하였습니까?",
    questions_uid: "Q2",
    order: 2,
  },
  {
    question: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    questions_uid: "Q3",
    order: 3,
  },
  {
    question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    questions_uid: "Q5",
    order: 4,
  },
  {
    question: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    questions_uid: "Q4",
    order: 5,
  },
];

const answer_list = [
  { answer: "전혀 아니다", answer_uid: "E1", order: 1 },
  { answer: "아니다", answer_uid: "E2", order: 2 },
  { answer: "보통이다", answer_uid: "E3", order: 3 },
  { answer: "그렇다", answer_uid: "E4", order: 4 },
  { answer: "매우 그렇다", answer_uid: "E5", order: 5 },
];

const questions_answers = [
  { questions_uid: "Q1", answer_uid: "E1" },
  { questions_uid: "Q1", answer_uid: "E2" },
  { questions_uid: "Q1", answer_uid: "E3" },
  { questions_uid: "Q2", answer_uid: "E1" },
  { questions_uid: "Q2", answer_uid: "E2" },
  { questions_uid: "Q2", answer_uid: "E3" },
  { questions_uid: "Q2", answer_uid: "E4" },
  { questions_uid: "Q3", answer_uid: "E1" },
  { questions_uid: "Q3", answer_uid: "E2" },
  { questions_uid: "Q4", answer_uid: "E1" },
  { questions_uid: "Q4", answer_uid: "E2" },
  { questions_uid: "Q4", answer_uid: "E3" },
  { questions_uid: "Q4", answer_uid: "E4" },
  { questions_uid: "Q4", answer_uid: "E5" },
  { questions_uid: "Q5", answer_uid: "E1" },
  { questions_uid: "Q5", answer_uid: "E2" },
  { questions_uid: "Q5", answer_uid: "E3" },
];

// 예상 묶음 데이터
// [
//  [Q1, E1, E2] -> {questions_uid : Q1, answer_uid : [E1, E2] answer: Q2}
//  [Q2, E1, E2, E3] -> {questions_uid : Q2, answer_uid : [E1, E2, E3]}
//  [Q3, E1, E2] -> {questions_uid : Q3, answer_uid : [E1, E2]}
//  [Q4, E1, E2, E3, E4, E5] -> {questions_uid : Q4, answer_uid : [E1, E2, E3, E4, E5]}
//  [Q5, E1, E2, E3] -> {questions_uid : Q5, answer_uid : [E1, E2, E3]}
// ]

let polls = []; // 전체 묶음
let question_compare;
let questions = [];
for (let idx = 0; idx < questions_answers.length; idx++) {
  if (question_compare != questions_answers[idx]["questions_uid"]) {
    if (questions.length > 0) {
      polls.push(questions);
      questions = [];
    }
    // console.log(`!== : ${questions_answers[idx]['questions_uid']}`);
    // console.log(`!== : ${questions_answers[idx]['answer_uid']}`);
    questions.push(questions_answers[idx]["questions_uid"]);
    questions.push(questions_answers[idx]["answer_uid"]);
  } else {
    // console.log(`== : ${questions_answers[idx]['answer_uid']}`)
    questions.push(questions_answers[idx]["answer_uid"]);
  }
  question_compare = questions_answers[idx]["questions_uid"]; // 이전 uid 입력
  if (idx == questions_answers.length - 1) {
    polls.push(questions);
  }
}
console.log(`${polls}`);
