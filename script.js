function updateClock() {
    let timezone = document.getElementById("timezone").value;
    let now = new Date();
    let options = { timeZone: timezone, hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    let timeString = new Intl.DateTimeFormat('ru-RU', options).format(now);
    
    document.getElementById("clock").innerText = timeString;
}

document.getElementById("timezone").addEventListener("change", updateClock);
setInterval(updateClock, 1000);
updateClock();
let currentAudio = null; // Переменная для хранения текущего аудиофайла

// Функция для воспроизведения трека
function playAudio(trackNumber) {
    let audio = document.getElementById(`audio${trackNumber}`);
    
    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    audio.play();
    currentAudio = audio;
}

// Функция для паузы
function pauseAudio() {
    if (currentAudio) {
        currentAudio.pause();
    }
}
// Функция для плавного появления блоков
function fadeInElements() {
    let elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => {
        let rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
            el.classList.add("visible");
        }
    });
}

document.addEventListener("DOMContentLoaded", fadeInElements);
document.addEventListener("scroll", fadeInElements);
// Проверяем, есть ли сохранённая тема
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    document.getElementById("theme-toggle").textContent = "🌞";
}

// Функция для переключения темы
document.getElementById("theme-toggle").addEventListener("click", function () {
    if (document.body.classList.contains("dark-theme")) {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        this.textContent = "🌙";
        localStorage.setItem("theme", "light"); // Сохраняем выбор
    } else {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        this.textContent = "🌞";
        localStorage.setItem("theme", "dark"); // Сохраняем выбор
    }
});
