var theme = "";
document.addEventListener('DOMContentLoaded', function () {
  //if theme is in localstorage -> load theme from ls
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
    if (theme != "dark") {
      var element = document.body;
      element.classList.toggle("dark");
      element.classList.toggle("light");
    }
  }
  else {
    localStorage.setItem("theme", "dark");
    theme = "dark"
  }
});

//if theme var is different from localstorage theme -> update ls theme
function updatethemelocalstorage() {
  theme = theme === "light" ? "dark" : "light";
  if (localStorage.getItem("theme") == theme) {

  }
  else {
    localStorage.setItem("theme", theme);
  }
}

function toggletheme() {
  var element = document.body;
  element.classList.toggle("dark");
  element.classList.toggle("light");
  updatethemelocalstorage();
}