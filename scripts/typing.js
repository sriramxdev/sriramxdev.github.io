const text = "Welcome to Quasandra XC!";
const el = document.getElementById("typing-text");
let i = 0;

function type() {
  if (i <= text.length) {
    el.textContent = text.slice(0, i);
    i++;
    setTimeout(type, 60);
  }
}
window.addEventListener("DOMContentLoaded", type);
