(function () {
  const reveals = document.querySelectorAll(".reveal");

  function revealNow() {
    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 80) el.classList.add("visible");
    });
  }

  window.addEventListener("scroll", revealNow);

  // Run immediately on load (this is the missing part)
  window.addEventListener("DOMContentLoaded", revealNow);
  window.addEventListener("load", revealNow);
})();
