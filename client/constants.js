// ELEMENTS
const IS_ON_DISPLAY = document.getElementById("isOn");
const CURR_KEY_DISPLAY = document.getElementById("currKey")
const PAPER = document.getElementById("paper");
const PEN = PAPER.getContext("2d");
const NOTE_DISPLAY = document.querySelectorAll(".noteDisplay > *");
const PITCH_SLIDER = document.getElementById("keyRange")

// COLORS
const BLUE = "#0066A3";
const GREEN = "#5DFC0A";
const YELLOW = "#F1EB9C";
const RED = "#FF7276";

const MAX_ANGLE = 2*Math.PI;
const VELOCITY = 1;
const START_TIME = new Date().getTime();
const OFFSET = 0.03;

// DISPLAY
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
  const play = () => PIANO.triggerAttackRelease(note);
  const velocity = VELOCITY - (i * OFFSET);
  return {
    color,
    play,
    position: i,
    nextImpactTime: calculateNextImpactTime(START_TIME, velocity),
    velocity
  };
}); // NOTE THAT COLORS START IN AND GO OUT
