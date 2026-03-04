// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Form validation and submission
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Client-side validation
    if (!nameInput.value.trim()) {
      e.preventDefault();
      showError('Please enter your name');
      return;
    }

    if (!emailInput.value.trim()) {
      e.preventDefault();
      showError('Please enter your email');
      return;
    }

    if (!isValidEmail(emailInput.value)) {
      e.preventDefault();
      showError('Please enter a valid email address');
      return;
    }

    if (!messageInput.value.trim()) {
      e.preventDefault();
      showError('Please enter a message');
      return;
    }
  });
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show error message
function showError(message) {
  const form = document.querySelector('form');
  const existingError = form.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }

  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message p-4 rounded-lg bg-red-900/30 border border-red-500/50 text-red-300 mb-4';
  errorDiv.textContent = message;
  form.insertBefore(errorDiv, form.firstChild);

  setTimeout(() => {
    errorDiv.remove();
  }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fadeIn');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Add animation classes on load
document.addEventListener('DOMContentLoaded', function() {
  // Add stagger animation to grid items
  const cards = document.querySelectorAll('.p-6, .p-8');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
  });
});

// Scroll to top button functionality
window.addEventListener('scroll', function() {
  const scrollBtn = document.getElementById('scrollToTopBtn');
  if (scrollBtn) {
    if (window.pageYOffset > 300) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  }
});

// Navigation active state
document.addEventListener('DOMContentLoaded', function() {
  const currentLocation = location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
      link.classList.add('text-purple-400', 'border-b-2', 'border-purple-400');
    }
  });
});

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// Prevent form double submission
let isSubmitting = false;
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    if (isSubmitting) {
      e.preventDefault();
      return;
    }
    isSubmitting = true;
    
    setTimeout(() => {
      isSubmitting = false;
    }, 2000);
  });
}

// Add hover effects to buttons
document.querySelectorAll('button, a.inline-block').forEach(element => {
  if (element.classList.contains('bg-gradient-to-r')) {
    element.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.classList.add('glow-purple');
    });
    
    element.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.classList.remove('glow-purple');
    });
  }
});

// Parallax effect for hero sections (optional)
function parallaxScroll() {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  parallaxElements.forEach(element => {
    element.style.transform = `translateY(${scrolled * 0.5}px)`;
  });
}

window.addEventListener('scroll', parallaxScroll);