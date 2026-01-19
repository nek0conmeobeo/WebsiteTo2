document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".film-scroll-container");
  let isDown = false;
  let startX;
  let scrollLeft;
  let isDragging = false;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    isDragging = false;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
    setTimeout(() => {
      isDragging = false;
    }, 50);
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;

    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;

    if (Math.abs(walk) > 5) {
      isDragging = true;
    }

    slider.scrollLeft = scrollLeft - walk;
  });

  const timelineImages = document.querySelectorAll(".film-backdrop img");
  const lightbox = document.getElementById("timeline-lightbox");
  const lightboxImg = lightbox.querySelector("img");
  const closeBtn = lightbox.querySelector(".lightbox-close");
  const prevBtn = lightbox.querySelector(".lightbox-prev");
  const nextBtn = lightbox.querySelector(".lightbox-next");
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = timelineImages[currentIndex].src;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  function showNextImage() {
    currentIndex =
      currentIndex + 1 >= timelineImages.length ? 0 : currentIndex + 1;
    lightboxImg.src = timelineImages[currentIndex].src;
  }

  function showPrevImage() {
    currentIndex =
      currentIndex - 1 < 0 ? timelineImages.length - 1 : currentIndex - 1;
    lightboxImg.src = timelineImages[currentIndex].src;
  }

  timelineImages.forEach((img, index) => {
    const card = img.closest(".film-backdrop");
    card.addEventListener("click", (e) => {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      openLightbox(index);
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    showNextImage();
  });
  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    showPrevImage();
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNextImage();
    if (e.key === "ArrowLeft") showPrevImage();
  });
});
