// Script.js
// Part 2: JavaScript Functions

// Function with parameter + return value
function calculateSquare(number) {
  return number * number; // returns result
}

// Demonstrating scope
let globalMessage = "I'm a global variable!"; // Global scope

function showScopeExample() {
  let localMessage = "I'm local to this function."; // Local scope
  console.log(globalMessage); // Accessible
  console.log(localMessage);  // Accessible only inside
}

document.getElementById("calcBtn").addEventListener("click", function() {
  const result = calculateSquare(5); // using our function
  document.getElementById("calcResult").textContent =
    `5 squared is ${result}`;
  showScopeExample();
});

// Part 3: Combining CSS & JS

// Animate the box with JS by toggling a CSS class
const magicBox = document.getElementById("magicBox");
document.getElementById("animateBoxBtn").addEventListener("click", function() {
  magicBox.classList.toggle("animate");
});

// Modal popup logic
const modal = document.getElementById("modal");
document.getElementById("toggleModalBtn").addEventListener("click", function() {
  modal.classList.add("show");
});

document.getElementById("closeModal").addEventListener("click", function() {
  modal.classList.remove("show");
});
