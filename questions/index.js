const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const questionBtns = question.querySelector(".question-btn");
  console.log(questionBtns);
  questionBtns.addEventListener("click", () => {
    question.classList.toggle("show-text");
  });
});
