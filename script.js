const cursorGlow = document.querySelector(".cursor-glow");

let mouseX = -100;
let mouseY = -100;
let glowX = -100;
let glowY = -100;

document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

function animateCursor() {
  glowX += (mouseX - glowX) * 0.16;
  glowY += (mouseY - glowY) * 0.16;

  cursorGlow.style.transform =
    `translate3d(${glowX}px, ${glowY}px, 0)`;

  requestAnimationFrame(animateCursor);
}

animateCursor();
