const toggleDarkMode = function () {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("dark-mode", isDark);
};

if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
}
