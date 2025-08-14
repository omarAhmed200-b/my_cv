function showSection(sectionId) {
  document.querySelectorAll('.cv-section').forEach(sec => {
    sec.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
  document.querySelectorAll('.top-icons-nav button').forEach(btn => btn.classList.remove('active'));
  const btns = document.querySelectorAll('.top-icons-nav button');
  const ids = [
    'about','expertise','education','certificates','skills','projects',
    'achievements','testimonials','languages','contact'
  ];
  btns[ids.indexOf(sectionId)].classList.add('active');

  // حركة ديناميكية للبطاقات عند فتح صفحة المهارات
  if(sectionId === 'expertise') {
    document.querySelectorAll('.expertise-section .about-card').forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      setTimeout(() => {
        card.style.transition = 'opacity .5s, transform .5s';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100 + i * 120);
    });
  }
}

// زر العودة للأعلى
const toTopBtn = document.getElementById('toTopBtn');
window.onscroll = function() {
  if (document.documentElement.scrollTop > 200) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};
toTopBtn.onclick = function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
};

// زر الوضع الداكن/الفاتح بشكل منفصل
document.getElementById('themeToggle').onclick = function() {
  document.body.classList.toggle('light-mode');
  const icon = this.querySelector('i');
  if (document.body.classList.contains('light-mode')) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
};

// Popup Modal للصورة الشخصية
const profileImg = document.getElementById('profileImg');
const imgModal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementById('closeModal');

profileImg.onclick = function() {
  imgModal.style.display = "flex";
};
closeModal.onclick = function() {
  imgModal.style.display = "none";
};
imgModal.onclick = function(e) {
  if (e.target === imgModal) imgModal.style.display = "none";
};