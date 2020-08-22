let css = document.getElementById("theme-style");
let theme = localStorage.getItem("theme");
if (theme === null) {
  setTheme("default");
} else {
  setTheme(theme);
}
let themeDots = document.getElementsByClassName("theme-dot");

Array.from(themeDots).forEach(function (dot) {
  dot.addEventListener("click", function () {
    // console.log(`${dot.id}`);
    let mode = dot.dataset.mode;
    setTheme(mode);
  });
});

function setTheme(mode) {
  css.setAttribute("href", `css/${mode}.css`);
  localStorage.setItem("theme", mode);
}
