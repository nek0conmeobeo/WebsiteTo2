const menuLinks = document.querySelectorAll(".nav-links li a");

menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    document
      .querySelector(".nav-links li a.active")
      ?.classList.remove("active");

    this.classList.add("active");
  });
});
