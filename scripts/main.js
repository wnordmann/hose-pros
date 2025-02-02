function openModal(imageSrc) {
  var modal = document.getElementById("lightboxModal");
  var modalImg = document.getElementById("modalImage");

  modal.style.display = "block";
  modalImg.src = imageSrc;

  // Disable background scrolling
  document.body.classList.add('no-scroll');
}

function closeModal() {
  var modal = document.getElementById("lightboxModal");
  modal.style.display = "none";

  // Re-enable background scrolling
  document.body.classList.remove('no-scroll');
}