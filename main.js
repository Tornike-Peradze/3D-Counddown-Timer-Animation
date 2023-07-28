const startNumber = 9;
const flipCard = document.querySelectorAll(".flip-card");

[...flipCard.children].forEach((child) => {
  child.textContent = startNumber;
});
flipCard.dataset.currentNumber = startNumber;
flipCard.dataset.nextNumber = startNumber;
flipCard.classList.add("flip");
