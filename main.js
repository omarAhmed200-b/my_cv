// ==================== Initialize ====================
let currentSection = 'about';
let touchStartY = 0;
let touchEndY = 0;

// ==================== Theme Toggle ====================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
  const theme = html.getAttribute('data-theme');
  const newTheme = theme === 'light' ? 'dark' : 'light';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
  
  // Haptic feedback for mobile
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
});

function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector('i');
  icon.className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
}

// ==================== Section Navigation ====================
function showSection(sectionId) {
  const sections = document.querySelectorAll('.cv-section');
  sections.forEach(section => {
    section.style.display = 'none';
  });
  
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.style.display = 'block';
    currentSection = sectionId;
    
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    updateActiveNavButton(sectionId);
    
    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(30);
    }
  }
}

function updateActiveNavButton(sectionId) {
  const navButtons = document.querySelectorAll('.top-icons-nav button');
  const sectionOrder = ['about', 'expertise', 'education', 'certificates', 'skills', 'projects', 'experience', 'languages', 'contact'];
  
  navButtons.forEach((button, index) => {
    button.classList.remove('active');
    if (sectionOrder[index] === sectionId) {
      button.classList.add('active');
    }
  });
}

// Navigation buttons event listeners
document.querySelectorAll('.top-icons-nav button').forEach((button, index) => {
  const sectionOrder = ['about', 'expertise', 'education', 'certificates', 'skills', 'projects', 'experience', 'languages', 'contact'];
  button.addEventListener('click', () => {
    showSection(sectionOrder[index]);
  });
});

// ==================== Image Modal ====================
const profileImg = document.getElementById('profileImg');
const imgModal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementById('closeModal');

profileImg.addEventListener('click', () => {
  imgModal.style.display = 'block';
  modalImg.src = profileImg.src;
  if (navigator.vibrate) navigator.vibrate(50);
});

closeModal.addEventListener('click', () => {
  imgModal.style.display = 'none';
});

imgModal.addEventListener('click', (e) => {
  if (e.target === imgModal) {
    imgModal.style.display = 'none';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && imgModal.style.display === 'block') {
    imgModal.style.display = 'none';
  }
});

// ==================== Back to Top ====================
const toTopBtn = document.getElementById('toTopBtn');

window.addEventListener('scroll', () => {
  toTopBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
});

toTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (navigator.vibrate) navigator.vibrate(50);
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
  
  showNotification('✨ Message sent successfully! I will get back to you soon.', 'success');
  contactForm.reset();
  
  if (navigator.vibrate) navigator.vibrate([50, 100, 50]);
});

// ==================== Notification System ====================
function showNotification(message, type = 'info') {
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = message;
  
  const bgColor = type === 'success' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 
                   'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)';
  
  Object.assign(notification.style, {
    position: 'fixed',
    top: '90px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '16px 24px',
    borderRadius: '12px',
    background: bgColor,
    color: 'white',
    fontSize: '0.95em',
    fontWeight: '600',
    boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
    zIndex: '9999',
    animation: 'slideDown 0.4s ease',
    maxWidth: '90%',
    textAlign: 'center'
  });
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideUp 0.4s ease';
    setTimeout(() => notification.remove(), 400);
  }, 3000);
}

// ==================== Statistics Counter ====================
function animateCounter(element, target, duration = 1500) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target % 1 === 0 ? target : target.toFixed(1);
      clearInterval(timer);
    } else {
      element.textContent = target % 1 === 0 ? Math.floor(current) : current.toFixed(1);
    }
  }, 16);
}

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

// ==================== Scroll Animations ====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.about-card, .cert-card, .project-card, .skill-card, .soft-skill-card, .contact-card, .lang-card');
  
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });
});

// ==================== Touch Gestures ====================
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  touchEndY = e.changedTouches[0].screenY;
  handleSwipe();
});

function handleSwipe() {
  const sections = ['about', 'expertise', 'education', 'certificates', 'skills', 'projects', 'experience', 'languages', 'contact'];
  const currentIndex = sections.indexOf(currentSection);
  const swipeThreshold = 50;
  
  // Horizontal swipe
  const horizontalDiff = touchEndX - touchStartX;
  
  if (Math.abs(horizontalDiff) > swipeThreshold) {
    if (horizontalDiff > 0 && currentIndex > 0) {
      // Swipe right - previous section
      showSection(sections[currentIndex - 1]);
    } else if (horizontalDiff < 0 && currentIndex < sections.length - 1) {
      // Swipe left - next section
      showSection(sections[currentIndex + 1]);
    }
  }
}

// ==================== Keyboard Navigation ====================
document.addEventListener('keydown', (e) => {
  const sections = ['about', 'expertise', 'education', 'certificates', 'skills', 'projects', 'experience', 'languages', 'contact'];
  const currentIndex = sections.indexOf(currentSection);
  
  if ((e.key === 'ArrowRight' || e.key === 'ArrowDown') && currentIndex < sections.length - 1) {
    showSection(sections[currentIndex + 1]);
  }
  
  if ((e.key === 'ArrowLeft' || e.key === 'ArrowUp') && currentIndex > 0) {
    showSection(sections[currentIndex - 1]);
  }
  
  if (e.key === 'Home') showSection(sections[0]);
  if (e.key === 'End') showSection(sections[sections.length - 1]);
});

// ==================== Skill Cards Interaction ====================
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('click', () => {
    const skillName = card.querySelector('span').textContent;
    showNotification(`🚀 ${skillName}`, 'info');
    if (navigator.vibrate) navigator.vibrate(30);
  });
});

// ==================== Project Cards Interaction ====================
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', function(e) {
    if (e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON') {
      if (navigator.vibrate) navigator.vibrate(30);
    }
  });
});

// ==================== CV Download Tracking ====================
document.querySelectorAll('.cv-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const action = btn.textContent.includes('View') ? 'viewed' : 'downloaded';
    
    setTimeout(() => {
      showNotification(`📄 CV ${action} successfully!`, 'success');
    }, 300);
    
    if (navigator.vibrate) navigator.vibrate(50);
  });
});

// ==================== Add Animation Styles ====================
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translate(-50%, -20px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }
  
  @keyframes slideUp {
    from {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    to {
      opacity: 0;
      transform: translate(-50%, -20px);
    }
  }
  
  * {
    -webkit-tap-highlight-color: transparent;
  }
  
  button, a, .skill-card, .project-card, .about-card {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }
`;
document.head.appendChild(style);

// ==================== Page Load Animation ====================
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// ==================== PWA Features ====================
// Add to home screen prompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

// ==================== Dynamic Year ====================
document.getElementById('year').textContent = new Date().getFullYear();

// ==================== Initialize First Section ====================
showSection('about');

// ==================== Performance Monitoring ====================
window.addEventListener('load', () => {
  if ('performance' in window) {
    const perfData = performance.getEntriesByType('navigation')[0];
    console.log(`⚡ Page loaded in ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
  }
});

// ==================== Console Welcome Message ====================
console.log(
  '%c 🤖 Omar Ahmed Gouda - AI & Embedded Systems Engineer ',
  'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 16px; padding: 12px 20px; border-radius: 8px; font-weight: bold;'
);

console.log(
  '%c 💼 Portfolio Website v2.0 ',
  'background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; font-size: 14px; padding: 10px 16px; border-radius: 8px; font-weight: 600; margin-top: 8px;'
);

console.log(
  '%c Interested in working together? Let\'s connect! ',
  'background: #10b981; color: white; font-size: 13px; padding: 8px 14px; border-radius: 6px; margin-top: 8px;'
);

// ==================== Service Worker Registration (PWA) ====================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Uncomment when you have a service worker file
    // navigator.serviceWorker.register('/sw.js')
    //   .then(reg => console.log('✅ Service Worker registered'))
    //   .catch(err => console.log('❌ Service Worker registration failed'));
  });
}
