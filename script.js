// Get modal elements
const modal = document.getElementById("newsletterModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementsByClassName("close")[0];

// Show modal on button click
openModalBtn.onclick = function() {
  modal.style.display = "block";
  modal.classList.add("show");
}

// Handle the form submission
document.querySelector('form').onsubmit = function(event) {
  event.preventDefault(); // Prevent form submission
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none"; // Hide modal
    document.getElementById('aftermath').style.display = "block"; // Show aftermath
  }, 400); // Match the CSS transition duration
}

// Close modal when clicking the 'x'
closeModalBtn.onclick = function() {
  modal.classList.remove("show");
  setTimeout(() => modal.style.display = "none", 400); // Match the CSS transition duration
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove("show");
    setTimeout(() => modal.style.display = "none", 400);
  }
}
