// Scroll to content
function scrollToContent() {
  document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" });
}

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// JavaScript demos
let count = 0;
function incrementCounter() {
  count++;
  document.getElementById("counter").innerText = "Button clicked: " + count + " times";
}

function validateForm() {
  let name = document.getElementById("name").value;
  if (name.trim() === "") {
    alert("Name cannot be empty!");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}