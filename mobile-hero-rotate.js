/* AXON MOBILE ROTATING HERO
   Mobile only. Desktop is untouched.
   This mirrors the live SSH mobile homepage rotation script. */
(function () {
  var titles = [
    "Don't let technology overwhelm your business.",
    "Run your business. Let Axon support the technology.",
    "Websites, cloud, cybersecurity and AI — explained clearly.",
    "Practical technology guidance for business owners.",
    "Modern websites and AI-ready systems for growing businesses."
  ];

  function startMobileHeroTitles() {
    if (!window.matchMedia || !window.matchMedia("(max-width: 768px)").matches) return;

    var heroTitle = document.querySelector(".hero-title");
    if (!heroTitle || heroTitle.dataset.axonMobileRotate === "1") return;

    heroTitle.dataset.axonMobileRotate = "1";
    var i = 0;
    heroTitle.setAttribute("data-mobile-title", titles[i]);

    setInterval(function () {
      heroTitle.classList.add("axon-mobile-title-changing");
      setTimeout(function () {
        i = (i + 1) % titles.length;
        heroTitle.setAttribute("data-mobile-title", titles[i]);
        heroTitle.classList.remove("axon-mobile-title-changing");
      }, 350);
    }, 4200);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startMobileHeroTitles);
  } else {
    startMobileHeroTitles();
  }
})();
