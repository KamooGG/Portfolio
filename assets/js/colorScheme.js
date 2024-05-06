if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.documentElement.setAttribute("data-theme", "dark");
} else {
  document.documentElement.setAttribute("data-theme", "light");
}
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    if (event.matches) {
      //dark mode
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      //light mode
      document.documentElement.setAttribute("data-theme", "light");
    }
  });
