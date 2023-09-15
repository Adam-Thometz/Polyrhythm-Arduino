let currPitch = NOTE_DISPLAY_OPTIONS[0];
let soundEnabled = false;

paper.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  isOnDisplay.textContent = `Sound: ${soundEnabled ? "On" : "Off"}`;
});

draw();