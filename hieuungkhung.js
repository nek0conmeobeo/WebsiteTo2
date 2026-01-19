const card = document.getElementById("tilt-card");

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const cardWidth = rect.width;
  const cardHeight = rect.height;

  const centerX = rect.left + cardWidth / 2;
  const centerY = rect.top + cardHeight / 2;

  const mouseX = e.clientX - centerX;
  const mouseY = e.clientY - centerY;

  const rotateY = -mouseX / 70;

  const rotateX = mouseY / 70;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  card.style.transition = "transform 0.5s ease";
});

card.addEventListener("mouseenter", () => {
  card.style.transition = "transform 0.1s ease-out";
});
