document.addEventListener("DOMContentLoaded", function() {
  const w = window.screen.width;
  const bg = w >= 2560 ? "images/bg5_4k.jpg" : "images/bg5_2k.jpg";
  document.body.style.backgroundImage = `url('${bg}')`;
  document.body.style.backgroundColor = "#222"; // fallback color
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
});
