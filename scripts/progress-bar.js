// Progress bar animation
const bar = document.getElementById('progress-bar');
let width = 0;
let interval = setInterval(() => {
  width += Math.random() * 3 + 1; // Simulate progress
  if (width >= 100) width = 100;
  bar.style.width = width + '%';
  if (width === 100) {
    clearInterval(interval);
    setTimeout(() => {
      bar.style.opacity = '0';
    }, 300);
  }
}, 20);

window.addEventListener('load', () => {
  width = 100;
  bar.style.width = '100%';
  setTimeout(() => {
    bar.style.opacity = '0';
  }, 300);
});
