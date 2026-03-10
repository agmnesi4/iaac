/* ============================================================
   IAAC · MDEF 2026 — main.js
   
   Cosa fa questo file:
   - Aggiunge la classe .scrolled alla nav quando scrolli
   - Anima gli elementi con .reveal quando entrano nel viewport
   - Gestisce il menu overlay (apertura/chiusura)
   ============================================================ */


/* ── NAV: diventa opaca dopo 80px di scroll ─────────────── */
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});


/* ── MENU OVERLAY ────────────────────────────────────────── */
const menuToggle  = document.querySelector('.nav-index');
const menuOverlay = document.querySelector('.menu-overlay');

if (menuToggle && menuOverlay) {
  menuToggle.addEventListener('click', () => {
    menuOverlay.classList.toggle('active');
    // Cambia il testo del bottone
    menuToggle.textContent = menuOverlay.classList.contains('active') 
      ? 'Chiudi' 
      : 'Index';
  });
}


/* ── INTERSECTION OBSERVER: elementi .reveal ─────────────── */
/*
  IntersectionObserver è un'API del browser che ti avvisa
  quando un elemento entra o esce dal viewport (la parte
  visibile dello schermo). Usiamo questo per animare gli
  elementi mentre scorri la pagina.
*/

const revealElements = document.querySelectorAll('.reveal, .note-entry');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // L'elemento è entrato nel viewport
        entry.target.classList.add('visible');
        // Una volta animato, smettila di osservarlo (ottimizzazione)
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,  // attiva quando il 12% dell'elemento è visibile
    rootMargin: '0px 0px -40px 0px'  // anticipa un po' l'animazione
  }
);

revealElements.forEach((el) => observer.observe(el));
