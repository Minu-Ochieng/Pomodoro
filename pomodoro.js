// Grab elements once, at the top
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

let timer;
let minutes = 25;
let seconds = 0;
let isPaused = true; // starts paused until user clicks Start

function updateDisplay() {
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function tick() {
    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        alert('Time is up! Take a break!');
        return;
    }

    if (seconds > 0) {
        seconds--;
    } else {
        seconds = 59;
        minutes--;
    }

    updateDisplay();
}

function startTimer() {
    if (!isPaused) return; // already running, don't stack intervals
    isPaused = false;
    timer = setInterval(tick, 1000);
}

function pauseTimer() {
    isPaused = true;
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    isPaused = true;
    minutes = 25;
    seconds = 0;
    updateDisplay();
}

// Wire up the buttons
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Show 25:00 on page load without starting the countdown
updateDisplay();