// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// Logika Kursor Glow
const customCursor = document.getElementById('custom-cursor');
let lastTrailTime = 0;
if (customCursor) {
  document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
      customCursor.style.left = e.clientX + 'px';
      customCursor.style.top = e.clientY + 'px';
    });
    const now = Date.now();
    if (now - lastTrailTime > 30) {
      createTrail(e.clientX, e.clientY);
      lastTrailTime = now;
    }
  });
}
function createTrail(x, y) {
  const particle = document.createElement('div');
  particle.classList.add('trail-particle');
  particle.style.left = x + 'px';
  particle.style.top = y + 'px';
  document.body.appendChild(particle);
  setTimeout(() => { particle.remove(); }, 1000);
}