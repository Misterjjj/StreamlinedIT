
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('nav ul');
  if(toggle && menu){
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', (!expanded).toString());
    });
  }
});
