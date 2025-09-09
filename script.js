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