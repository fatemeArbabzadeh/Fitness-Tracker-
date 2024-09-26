// Select the elements
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

// Function to open sidebar
menuBtn.addEventListener("click", () => {
  sidebar.style.display = "block"; // Show the sidebar
});

// Function to close sidebar
closeBtn.addEventListener("click", () => {
  sidebar.style.display = "none"; // Hide the sidebar
});
