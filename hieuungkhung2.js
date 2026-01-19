document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".film-backdrop");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const rotateY = ((mouseX - width / 2) / width) * -30;
      const rotateX = ((mouseY - height / 2) / height) * 30;

      card.style.transform = `perspective(1000px) scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      card.style.transition = "transform 0.05s ease-out";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)`;

      card.style.transition = "transform 0.5s ease-out";
    });
  });
});
