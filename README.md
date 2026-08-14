A simple, elegant Pomodoro countdown timer built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools. Just open the file in your browser and go.

Built as a JavaScript fundamentals practice project: DOM manipulation, event listeners, and timer logic (`setInterval` / `clearInterval`) without any library abstracting the wiring away.

## Features
- Classic 25-minute countdown timer
- Start, Pause, and Reset controls
- Clean watch-face inspired design (dark navy background, gold bezel accent)
- Fully responsive, no dependencies

## Tech stack

- HTML5
- CSS3 (custom properties, no framework)
- Vanilla JavaScript (ES6+)

## How to run

No build step required.

1. Clone this repo
   ```bash
   git clone <your-repo-url>
   ```
2. Open `pomodoro.html` directly in your browser

   — or —

3. Use the **Live Server** extension in VS Code for auto-refresh on save

## Project structure

```
pomodoro/
├── pomodoro.html   # Markup
├── pomodoro.css    # Styling
├── pomodoro.js     # Timer logic
└── README.md
```

## How it works

- `startTimer()` kicks off a `setInterval` loop that ticks every second
- `tick()` decrements the seconds/minutes state and updates the display
- `pauseTimer()` clears the interval without resetting the state
- `resetTimer()` clears the interval and resets time back to 25:00

## Roadmap

- [ ] Work / break mode switching (25 min work → 5 min break, auto-cycling)
- [ ] Visual indicator for current mode
- [ ] Custom time input
- [ ] Sound notification when time's up

## Author

Casey — built while learning JavaScript fundamentals.
