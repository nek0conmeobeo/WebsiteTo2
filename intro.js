const overlay = document.getElementById("intro-overlay");

overlay.addEventListener("click", () => {
  overlay.classList.add("intro-hidden");
});

const titleText = "Website Tổ 2 ";
let charIndex = 1;
let isDeleting = false;

function animateTitle() {
  document.title = titleText.substring(0, charIndex);

  let speed = 250;

  if (isDeleting) {
    charIndex--;
    speed = 250;
  } else {
    charIndex++;
  }

  if (!isDeleting && charIndex === titleText.length) {
    isDeleting = true;
    speed = 4000;
  } else if (isDeleting && charIndex === 1) {
    isDeleting = false;
    speed = 1000;
  }

  setTimeout(animateTitle, speed);
}

animateTitle();
