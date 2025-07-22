if (document.head) {
  const w = window.screen.width;
  const bg = w >= 2560 ? "images/bg5_4k.jpg" : "images/bg5_2k.jpg";
  const preload = document.createElement('link');
  preload.rel = 'preload';
  preload.as = 'image';
  preload.href = bg;
  document.head.appendChild(preload);
}
