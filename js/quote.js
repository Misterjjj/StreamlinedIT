
/* EmailJS integration for Quote form */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#quoteForm');
  if(!form) return;
  // initialize EmailJS (replace with your user ID)
  emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sending...';
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
      .then(() => {
        btn.textContent = 'Sent ✓';
        form.reset();
      })
      .catch((err) => {
        alert('Failed to send, please try again.');
        console.error(err);
        btn.textContent = 'Send Request';
        btn.disabled = false;
      });
  });
});
