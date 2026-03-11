/* ═══════════════════════════════════════════════════════════
   cookie.js – Gestione banner cookie (GDPR / D.Lgs. 196/2003)
   ═══════════════════════════════════════════════════════════ */

(function () {
  const STORAGE_KEY = 'ec2026-cookie-consent';
  const banner      = document.getElementById('cookieBanner');
  const acceptBtn   = document.getElementById('cookieAcceptBtn');

  if (!banner || !acceptBtn) return;

  /* Se il consenso è già stato registrato, nascondi subito il banner */
  if (localStorage.getItem(STORAGE_KEY) === 'accepted') {
    banner.classList.add('hidden');
    return;
  }

  /* Accettazione: salva in localStorage e nascondi con animazione */
  acceptBtn.addEventListener('click', function () {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    banner.classList.add('hidden');
  });
})();
