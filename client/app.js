let currPitch = NOTES[0];
let soundEnabled = false;

PAPER.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  IS_ON_DISPLAY.textContent = `Sound: ${soundEnabled ? "On" : "Off"}`;
});

PITCH_SLIDER.addEventListener("change", e => {
  const { value } = e.target;
  const newPitch = calculateNewPitch(value);
  if (newPitch != currPitch) updatePitch(newPitch);
})

draw();
