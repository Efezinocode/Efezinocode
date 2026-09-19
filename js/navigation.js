const header = document.querySelector("[data-site-header]");
const toggle = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelectorAll(".site-nav a");

function closeMenu() {
  if (!header || !toggle) return;

  header.classList.remove("nav-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open navigation");
}

export function setupNavigation() {
  if (!header || !toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");

    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("click", (event) => {
    if (!header.classList.contains("nav-open")) return;

    if (!(event.target instanceof Node)) return;

    if (!header.contains(event.target)) {
      closeMenu();
    }
  });
}
