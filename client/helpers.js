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

function updateDisplay(notes, preferredAccidental) {
  for (let i = 0; i < notes.length; i++) {
    const currNote = NOTES[notes[i]];
    const displayName = isAccidental(currNote.name)
      ? currNote.name[preferredAccidental]
      : currNote.name;
    NOTE_DISPLAY[i].textContent = displayName;
  }
}