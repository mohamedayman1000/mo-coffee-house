// Navbar shadow on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});
// Menu Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

filterButtons.forEach(function(button) {
  button.addEventListener('click', function() {

    // Remove active from all buttons
    filterButtons.forEach(function(btn) {
      btn.classList.remove('active');
    });

    // Add active to clicked button
    button.classList.add('active');

    // Get filter value
    var filter = button.getAttribute('data-filter');

    // Show/hide cards
    menuCards.forEach(function(card) {
      if (filter === 'all') {
        card.classList.remove('hidden');
      } else if (card.getAttribute('data-category') === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });

  });
});