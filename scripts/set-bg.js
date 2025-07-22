const w = window.screen.width;
const bg = w >= 2560 ? "bg5_4k.jpg" : "bg5_2k.jpg";
document.body.style.backgroundImage = `url('${bg}')`;
