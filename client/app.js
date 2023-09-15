let currPitch = NOTE_DISPLAY_OPTIONS[0];
let soundEnabled = false;

PAPER.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  IS_ON_DISPLAY.textContent = `Sound: ${soundEnabled ? "On" : "Off"}`;
});

draw();
