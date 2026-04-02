// ===== Navbar Shadow on Scroll =====
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// ===== Menu Filter =====
const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Remove active from all
    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    // Add active to clicked
    button.classList.add("active");

    // Get filter value
    var filter = button.getAttribute("data-filter");

    // Show/hide cards
    menuCards.forEach(function (card) {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// ===== Hamburger Menu =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");

// Helper functions
function closeMenu() {
  navLinks.classList.remove("active");
  const icon = hamburger.querySelector("i");
  icon.classList.remove("fa-times");
  icon.classList.add("fa-bars");
}

function toggleMenu() {
  navLinks.classList.toggle("active");
  const icon = hamburger.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
}

// Toggle menu on hamburger click
hamburger.addEventListener("click", function () {
  toggleMenu();
});

// Close menu when clicking a link
navItems.forEach(function (link) {
  link.addEventListener("click", function () {
    closeMenu();
  });
});

// Close menu when clicking outside
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    closeMenu();
  }
});
// Back to Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
