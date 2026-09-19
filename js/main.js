// Keeps the footer copyright year current.
// The mobile nav needs no JavaScript at all — it runs on a
// checkbox + label in header.css, so it still works even if
// this script fails to load.
document.addEventListener("DOMContentLoaded", function () {
  var year = document.querySelector("[data-current-year]");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
});
