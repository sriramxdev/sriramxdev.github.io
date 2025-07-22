window.addEventListener('load', function() {
  var el = document.querySelector('.typing-text');
  el.classList.remove('typing-init');
  el.style.visibility = 'visible';
  el.style.animation = 'typing 1.2s steps(24, end) forwards';
});
