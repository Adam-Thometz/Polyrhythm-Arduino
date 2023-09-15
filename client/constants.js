// ELEMENTS
const isOnDisplay = document.getElementById("isOn");
const currKeyDisplay = document.getElementById("currKey")
const paper = document.getElementById("paper");
const pen = paper.getContext("2d");
const noteDisplay = document.querySelectorAll(".noteDisplay > *");

// INSTRUMENT
const pitchShift = new Tone.PitchShift(0).toDestination();
const piano = new Tone.Sampler({ urls: { C3: "./piano.wav" } }).connect(pitchShift);

// CONSTANTS
const BLUE = "#0066A3";
const GREEN = "#5DFC0A";
const YELLOW = "#F1EB9C";
const RED = "#FF7276";

const MAX_ANGLE = 2*Math.PI;
const VELOCITY = 1;
const START_TIME = new Date().getTime();
const OFFSET = 0.03;

const NOTE_DISPLAY_OPTIONS = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"];
const ARCS = [
  { color: BLUE, note: "C4" },
  { color: GREEN, note: "A3" },
  { color: YELLOW, note: "F3" },
  { color: RED, note: "D3" },
  { color: BLUE, note: "B2" },
  { color: GREEN, note: "G2" },
  { color: YELLOW, note: "E2" },
  { color: RED, note: "C2" },
].map(({ color, note }, i) => {
  const play = () => piano.triggerAttackRelease(note);
  const velocity = VELOCITY - (i * OFFSET);
  return {
    color,
    play,
    position: i,
    nextImpactTime: calculateNextImpactTime(START_TIME, velocity),
    velocity
  };
}); // NOTE THAT COLORS SHOW UP IN REVERSE ORDER

