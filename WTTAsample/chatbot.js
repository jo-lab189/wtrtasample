// Dropdown menu functionality
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(drop => {
  drop.addEventListener('mouseenter', () => {
    const menu = drop.querySelector('.dropdown-menu');
    if(menu) menu.style.display = 'block';
  });
  drop.addEventListener('mouseleave', () => {
    const menu = drop.querySelector('.dropdown-menu');
    if(menu) menu.style.display = 'none';
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Chatbot placeholder
console.log("Chatbot placeholder: add your live embed script here.");