let count = 0;

const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("reset");

incrementBtn.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
});