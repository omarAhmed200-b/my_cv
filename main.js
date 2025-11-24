// ==================== Global Variables ====================
let currentSection = 'about';

// ==================== Theme Toggle ====================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
  const theme = html.getAttribute('data-theme');
  const newTheme = theme === 'light' ? 'dark' : 'light';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector('i');
  if (theme === 'dark') {
    icon.className = 'fa-solid fa-moon';
  } else {
    icon.className = 'fa-solid fa-sun';
  }
}

// ==================== Section Navigation ====================
function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.cv-section');
  sections.forEach(section => {
    section.style.display = 'none';
  });
  
  // Show selected section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.style.display = 'block';
    currentSection = sectionId;
    
    // Smooth scroll to section
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Update active button
    updateActiveNavButton(sectionId);
  }
}

function updateActiveNavButton(sectionId) {
  const navButtons = document.querySelectorAll('.top-icons-nav button');
  navButtons.forEach((button, index) => {
    button.style.background = '';
    button.style.color = '';
  });
  
  // Find and highlight active button (based on order in HTML)
  const sectionOrder = ['about', 'expertise', 'education', 'certificates', 'skills', 'projects', 'experience', 'languages', 'contact'];
  const activeIndex = sectionOrder.indexOf(sectionId);
  if (activeIndex !== -1 && navButtons[activeIndex]) {
    navButtons[activeIndex].style.background = 'var(--primary-color)';
    navButtons[activeIndex].style.color = 'white';
  }
}

// ==================== Image Modal ====================
const profileImg = document.getElementById('profileImg');
const imgModal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementById('closeModal');

profileImg.addEventListener('click', () => {
  imgModal.style.display = 'block';
  modalImg.src = profileImg.src;
});

closeModal.addEventListener('click', () => {
  imgModal.style.display = 'none';
});

imgModal.addEventListener('click', (e) => {
  if (e.target === imgModal) {
    imgModal.style.display = 'none';
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && imgModal.style.display === 'block') {
    imgModal.style.display = 'none';
  }
});

// ==================== Back to Top Button ====================
const toTopBtn = document.getElementById('toTopBtn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    toTopBtn.style.display = 'block';
  } else {
    toTopBtn.style.display = 'none';
  }
});

toTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ==================== Contact Form ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = {
    name: contactForm.name.value,
    email: contactForm.email.value,
    message: contactForm.message.value
  };
  
  // Show success message
  showNotification('Message sent successfully! I will get back to you soon.', 'success');
  
  // Reset form
  contactForm.reset();
  
  // In real implementation, you would send this data to a server
  console.log('Form submitted:', formData);
});

// ==================== Notification System ====================
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Style the notification
  Object.assign(notification.style, {
    position: 'fixed',
    top: '100px',
    right: '20px',
    padding: '20px 30px',
    borderRadius: '10px',
    backgroundColor: type === 'success' ? '#10b981' : '#3b82f6',
    color: 'white',
    fontSize: '1.1em',
    fontWeight: '600',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    zIndex: '9999',
    animation: 'slideInRight 0.3s ease',
    maxWidth: '400px',
    wordWrap: 'break-word'
  });
  
  document.body.appendChild(notification);
  
  // Remove notification after 4 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 4000);
}

// ==================== Scroll Animations ====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all cards
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.stat-card, .about-card, .cert-card, .project-card, .skill-card, .soft-skill-card, .contact-card, .lang-card');
  
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});

// ==================== Statistics Counter Animation ====================
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16); // 60fps
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      // Format number based on whether it has decimal
      if (target % 1 === 0) {
        element.textContent = Math.floor(current);
      } else {
        element.textContent = current.toFixed(1);
      }
    }
  }, 16);
}

// Animate counters when they come into view
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      const numberElement = entry.target.querySelector('.stat-number');
      const targetValue = parseFloat(numberElement.textContent);
      numberElement.textContent = '0';
      animateCounter(numberElement, targetValue);
      entry.target.dataset.animated = 'true';
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
  statObserver.observe(card);
});

// ==================== Smooth Scroll for All Links ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ==================== Keyboard Navigation ====================
document.addEventListener('keydown', (e) => {
  const sections = ['about', 'expertise', 'education', 'certificates', 'skills', 'projects', 'experience', 'languages', 'contact'];
  const currentIndex = sections.indexOf(currentSection);
  
  // Arrow Right or Down - Next section
  if ((e.key === 'ArrowRight' || e.key === 'ArrowDown') && currentIndex < sections.length - 1) {
    showSection(sections[currentIndex + 1]);
  }
  
  // Arrow Left or Up - Previous section
  if ((e.key === 'ArrowLeft' || e.key === 'ArrowUp') && currentIndex > 0) {
    showSection(sections[currentIndex - 1]);
  }
  
  // Home key - First section
  if (e.key === 'Home') {
    showSection(sections[0]);
  }
  
  // End key - Last section
  if (e.key === 'End') {
    showSection(sections[sections.length - 1]);
  }
});

// ==================== Add CSS for Notification Animations ====================
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ==================== Skill Cards Interactive Effect ====================
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('click', () => {
    const skillName = card.querySelector('span').textContent;
    showNotification(`Skill: ${skillName}`, 'info');
  });
});

// ==================== Project Cards Click Effect ====================
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', function(e) {
    // Don't trigger if clicking on a link or button
    if (e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON') {
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = '';
      }, 200);
    }
  });
});

// ==================== Dynamic Year in Footer ====================
document.getElementById('year').textContent = new Date().getFullYear();

// ==================== Loading Animation ====================
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// ==================== Prevent Right Click on Images (Optional) ====================
// Uncomment if you want to protect images
/*
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    showNotification('Image protection is enabled', 'info');
  });
});
*/

// ==================== CV Download Tracking ====================
document.querySelectorAll('.cv-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const action = btn.textContent.includes('View') ? 'viewed' : 'downloaded';
    console.log(`CV ${action} at ${new Date().toLocaleString()}`);
    
    // Optional: Show notification
    setTimeout(() => {
      showNotification(`CV ${action} successfully!`, 'success');
    }, 500);
  });
});

// ==================== Initialize ====================
// Show the first section on load
showSection('about');

// Log initialization
console.log('%c Portfolio Loaded Successfully! ', 'background: #2563eb; color: white; font-size: 16px; padding: 10px;');
console.log('%c Developed by Omar Ahmed Gouda ', 'background: #10b981; color: white; font-size: 14px; padding: 8px;');
