// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Simulate form submission process (in real scenario, you'd use AJAX to submit form data)
  setTimeout(function() {
    document.getElementById('contactForm').reset();
    document.getElementById('successMessage').style.display = 'block';
  }, 1000); // Simulate 1 second delay for demonstration
});
