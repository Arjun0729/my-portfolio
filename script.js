// Grab the button element from the DOM using its unique ID
const statusBtn = document.getElementById("status-btn");

// Attach a 'click' event listener to listen for taps/clicks
statusBtn.addEventListener("click", function () {
  if (statusBtn.innerText.includes("Available")) {
    statusBtn.innerText = "🟡 Focused on building projects";
    statusBtn.classList.add("busy");
  } else {
    statusBtn.innerText = "🟢 Available for opportunities";
    statusBtn.classList.remove("busy");
  }
});
// Theme Toggle Logic
const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // Toggle the 'light-theme' class on the <body> tag
  document.body.classList.toggle("light-theme");

  // Update the button icon depending on the active theme
  if (document.body.classList.contains("light-theme")) {
    themeToggleBtn.innerText = "🌙";
  } else {
    themeToggleBtn.innerText = "☀️";
  }
});