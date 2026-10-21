const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuButton.textContent = isOpen ? "×" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      menuButton.textContent = "☰";
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

const mapToggle = document.getElementById("mapToggle");
const interactiveMap = document.getElementById("interactiveMap");
if (mapToggle && interactiveMap) {
  mapToggle.addEventListener("click", () => {
    const isOpen = mapToggle.getAttribute("aria-expanded") === "true";
    mapToggle.setAttribute("aria-expanded", String(!isOpen));
    interactiveMap.classList.toggle("is-open", !isOpen);
    interactiveMap.setAttribute("aria-hidden", String(isOpen));
    mapToggle.querySelector(".toggle-label").textContent = isOpen ? "Explore the map" : "Hide map";
    mapToggle.querySelector(".toggle-symbol").textContent = isOpen ? "＋" : "−";
    if (!isOpen) {
      const iframe = interactiveMap.querySelector("iframe");
      if (iframe && !iframe.src) iframe.src = iframe.dataset.src;
    }
  });
}
