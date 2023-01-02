const button = document.querySelector(".share-btn");
const buttonIcon = document.querySelector(".share-btn-icon");
const shareBtn = document.querySelector(".share-buttons");

document.addEventListener("click", (e) => {
  if (!button.contains(e.target)) {
    shareBtn.style.display = "none";
    button.style.backgroundColor = "var(--light-grayish-blue)";
    buttonIcon.style.filter = "none";
  }
});

button.addEventListener("click", () => {
  shareBtn.style.display = "flex";
  button.style.backgroundColor = "var(--very-dark-grayish-blue)";
  buttonIcon.style.filter = "brightness(100)";
});
