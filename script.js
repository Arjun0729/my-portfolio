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