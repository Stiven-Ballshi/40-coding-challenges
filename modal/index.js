const openBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const close = document.querySelector(".close-btn");

console.log(openBtn);

close.addEventListener("click", () => {
  modalOverlay.style.visibility = "hidden";
  modalOverlay.style.zIndex = -10;
});

openBtn.addEventListener("click", () => {
  modalOverlay.style.visibility = "visible";
  modalOverlay.style.zIndex = 1;
});
