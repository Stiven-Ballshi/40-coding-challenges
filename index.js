/*  1. Change Body background color */

// const btn = document.querySelector(".btn");

// const createRandomBgColor = () => {
//   return `#${Math.round(Math.random() * 1000000)}`;
// };

// btn.addEventListener("click", () => {
//   document.querySelector("body").style.backgroundColor = createRandomBgColor();
// });

/* 2. Counter */

const counter = document.querySelector(".counter-num");
const btn = document.querySelectorAll(".btn");
let count = 0;

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const classes = e.currentTarget.classList;

    if (classes.contains("dec")) {
      count--;
    } else if (classes.contains("inc")) {
      count++;
    } else {
      count = 0;
    }
    counter.textContent = count;
  });
});
