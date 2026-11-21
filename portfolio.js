for (const slider of document.querySelectorAll("input[data-comparison-label]")) {
  const comparison = document.getElementById(slider.getAttribute("aria-controls"));
  const control = slider.closest(".compare-control");

  if (!comparison || !control) continue;

  function updateComparison() {
    const percentage = Number(slider.value);
    comparison.style.setProperty("--split", percentage + "%");
    slider.setAttribute("aria-valuetext", percentage + "% " + slider.dataset.comparisonLabel);
  }

  slider.addEventListener("input", updateComparison);
  updateComparison();
  control.hidden = false;
}
