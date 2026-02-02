const revealEls = document.querySelectorAll(".reveal");

function revealNow() {
  const vh = window.innerHeight;
  revealEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < vh - 80) el.classList.add("visible");
  });
}

window.addEventListener("scroll", revealNow);
window.addEventListener("load", revealNow);
revealNow();
