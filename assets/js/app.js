(function () {
  const reveals = document.querySelectorAll(".reveal");

  function revealNow() {
    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 80) el.classList.add("visible");
    });
  }

  window.addEventListener("scroll", revealNow);
  window.addEventListener("DOMContentLoaded", revealNow);
  window.addEventListener("load", revealNow);
})();
