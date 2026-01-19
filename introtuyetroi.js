(function () {
  const canvas = document.getElementById("introFallingCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];

  const img = new Image();
  img.src = "./assets/images/intro-icon.png";

  const particleCount = 100;
  const speedBase = 0.5;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function createParticle(isInitial = false) {
    let startX, startY;

    const extraWidth = width + height;
    startX = Math.random() * extraWidth + 50;

    startY = Math.random() * -height - 50;

    return {
      x: startX,
      y: startY,
      size: Math.random() * 5 + 3,
      speed: Math.random() * 3 + speedBase,
      opacity: Math.random() * 0.5 + 0.3,
    };
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(true));
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.x -= p.speed;
      p.y += p.speed;

      ctx.globalAlpha = p.opacity;
      if (img.complete && img.naturalHeight !== 0) {
        ctx.drawImage(img, p.x, p.y, p.size, p.size);
      } else {
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;

      if (p.y > height + 20 || p.x < -20) {
        Object.assign(p, createParticle());
      }
    });

    const overlay = document.getElementById("intro-overlay");
    if (overlay && !overlay.classList.contains("intro-hidden")) {
      requestAnimationFrame(draw);
    }
  }

  window.addEventListener("resize", resize);
  resize();

  img.onload = () => {
    initParticles();
    draw();
  };
  img.onerror = () => {
    initParticles();
    draw();
  };
  if (img.complete || img.src === "") {
    initParticles();
    draw();
  }
})();
