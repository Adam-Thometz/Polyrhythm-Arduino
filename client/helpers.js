function createAnimation(color) {
  return {
    animation: [
      {backgroundColor: color},
      {backgroundColor: "#000000"},
    ],
    duration: 2000,
  }
}

function getDimensions({ width, height }) {
  const start = {
    x: width * 0.1,
    y: height * 0.9,
  };

  const center = {
    x: width * 0.5,
    y: height * 0.9,
  };

  const end = {
    x: width * 0.9,
    y: height * 0.9,
  };

  return { start, center, end };
}

function calculateNextImpactTime(currentImpactTime, velocity) {
  return currentImpactTime + (Math.PI / velocity) * 1000;
}

function calculateDistance({ elapsedTime, velocity }) {
  const distance = Math.PI + (elapsedTime * velocity);
  const modDistance = distance % MAX_ANGLE;
  const calculatedDistance = modDistance >= Math.PI
    ? distance
    : MAX_ANGLE - distance;

  return calculatedDistance;
}

function changeDisplay() {
  const ROOT = NOTE_DISPLAY_OPTIONS.findIndex(val => val == currPitch);
  const MAJOR_THIRD = (ROOT + 4) % 12;
  const PERFECT_FIFTH = (ROOT + 7) % 12;
  const MAJOR_SEVENTH = (ROOT + 11) % 12;
  const MAJOR_NINTH = (ROOT + 2) % 12;
  const PERFECT_ELEVENTH = (ROOT + 5) % 12;
  const MAJOR_THIRTEENTH = (ROOT + 9) % 12;

  const notes = [ROOT, MAJOR_THIRD, PERFECT_FIFTH, MAJOR_SEVENTH, MAJOR_NINTH, PERFECT_ELEVENTH, MAJOR_THIRTEENTH, ROOT];

  for (let i = 0; i < notes.length; i++) {
    noteDisplay[i].textContent = NOTE_DISPLAY_OPTIONS[notes[i]];
  }
}