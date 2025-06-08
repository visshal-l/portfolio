document.addEventListener("DOMContentLoaded", function () {
  /* Smooth Scrolling */
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* Scroll Reveal Animation */
  const sections = document.querySelectorAll("section");
  const revealSection = () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealSection);
  revealSection();

  /* Optional: Interactive 3D effect on hero section based on mouse movement */
  const hero = document.querySelector(".hero");
  hero.addEventListener("mousemove", function (e) {
    const { width, height } = hero.getBoundingClientRect();
    const xAxis = (width / 2 - e.pageX) / 20;
    const yAxis = (height / 2 - e.pageY) / 20;
    hero.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  hero.addEventListener("mouseleave", function () {
    hero.style.transform = `rotateY(0deg) rotateX(0deg)`;
  });
});
