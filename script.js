// Modal Functionality
const modal = document.getElementById("newsletterModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementsByClassName("close")[0];

// Open the modal
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

// Close the modal when clicking the 'x'
closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
