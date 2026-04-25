document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.querySelector("[data-current-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
});
