// Mobile menu toggle
const burger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const visible = getComputedStyle(menu).display !== 'none';
  menu.style.display = visible ? 'none' : 'flex';
});

// Theme toggle
const themeBtn = document.getElementById('themeToggle');
if (localStorage.getItem('theme') === 'pastel') {
  document.body.classList.add('pastel');
}
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('pastel');
  localStorage.setItem('theme', document.body.classList.contains('pastel') ? 'pastel' : 'dark');
});

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

function openCert(img) {
  document.getElementById("certModal").style.display = "block";
  document.getElementById("certFull").src = img.src;
  document.getElementById("certCaption").innerHTML = img.alt;
}

function closeCert() {
  document.getElementById("certModal").style.display = "none";
}


function openResume() {
  document.getElementById("resumeModal").style.display = "flex";
}

function closeResume() {
  document.getElementById("resumeModal").style.display = "none";
}


