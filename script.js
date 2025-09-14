
// Intersection Observer para hacer aparecer las secciones
const panels = document.querySelectorAll(".panel");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}, { threshold: 0.5 }); // activa cuando el 50% de la sección está visible

panels.forEach(panel => {
  observer.observe(panel);
});

const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");
let isPlaying = false;

btn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    btn.textContent = "🎵";
  } else {
    music.play();
    btn.textContent = "⏸️";
  }
  isPlaying = !isPlaying;
});
// === CONFIGURACIÓN DE LA FECHA Y HORA ===
// Formato: Año, Mes-1, Día, Hora, Minuto, Segundo
const eventDate = new Date(2025, 11, 7, 11, 0, 0).getTime(); // 25 Dic 2025 - 18:00:00

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const finishedEl = document.getElementById("finished");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
        document.getElementById("countdown").style.display = "none";
        finishedEl.style.display = "block";
        clearInterval(interval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = days < 10 ? "0" + days : days;
    hoursEl.textContent = hours < 10 ? "0" + hours : hours;
    minutesEl.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;
}

// Actualiza cada segundo
const interval = setInterval(updateCountdown, 1000);
updateCountdown();

// Modal
const openBtn = document.getElementById("openCard");
const closeBtn = document.getElementById("closeCard");
const overlay = document.getElementById("overlay");

openBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Cerrar si clickea fuera de la tarjeta
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});

// Copiar texto
const copyBtn = document.getElementById("copyBtn");
const copyText = document.getElementById("copyText");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(copyText.textContent)
    .then(() => {
      copyBtn.textContent = "✅ Copiado";
      setTimeout(() => {
        copyBtn.textContent = "📋 Copiar";
      }, 2000);
    })
    .catch(err => console.log("Error al copiar:", err));
});