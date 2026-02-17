// Animate progress bars on page load
window.addEventListener('load', () => {
  document.querySelectorAll('.progress').forEach(bar => {
    const targetWidth = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.transition = 'width 1.8s ease-out';
      bar.style.width = targetWidth;
    }, 300);
  });
});

// Simple form submission demo (prevent reload + alert)
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent (demo mode).");
  this.reset(); // clear form
});

// Optional: smooth scroll to projects on "See My Works" click
document.querySelector('.btn-primary')?.addEventListener('click', () => {
  document.querySelector('.projects').scrollIntoView({ behavior: 'smooth' });
});