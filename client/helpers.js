function createAnimation(backgroundColor) {
  return {
    animation: [
      { backgroundColor },
      { backgroundColor: "#000000" }
    ],
    duration: 2000,
  }
}

function getDimensions(width, height) {
  const y = height * 0.9;

  const start = { x: width * 0.1, y };
  const center = { x: width * 0.5, y };
  const end = { x: width * 0.9, y };

  return { start, center, end };
}

function calculateNextImpactTime(currentImpactTime, velocity) {
  return currentImpactTime + (Math.PI / velocity) * 1000;
}

function calculateDistance(elapsedTime, velocity) {
  const distance = Math.PI + (elapsedTime * velocity);
  const modDistance = distance % MAX_ANGLE;
  const calculatedDistance = modDistance >= Math.PI
    ? distance
    : MAX_ANGLE - distance;

  return calculatedDistance;
}

function changeDisplay() {
  const ROOT = NOTE_DISPLAY_OPTIONS.findIndex(val => val == currPitch);
  const notes = [ROOT];
  const MAJOR_THIRD = (ROOT + 4) % 12;
  notes.push(MAJOR_THIRD);
  const PERFECT_FIFTH = (ROOT + 7) % 12;
  notes.push(PERFECT_FIFTH);
  const MAJOR_SEVENTH = (ROOT + 11) % 12;
  notes.push(MAJOR_SEVENTH);
  const MAJOR_NINTH = (ROOT + 2) % 12;
  notes.push(MAJOR_NINTH);
  const PERFECT_ELEVENTH = (ROOT + 5) % 12;
  notes.push(PERFECT_ELEVENTH);
  const MAJOR_THIRTEENTH = (ROOT + 9) % 12;
  notes.push(MAJOR_THIRTEENTH);
  notes.push(ROOT);

  for (let i = 0; i < notes.length; i++) {
    NOTE_DISPLAY[i].textContent = NOTE_DISPLAY_OPTIONS[notes[i]];
  }
}
