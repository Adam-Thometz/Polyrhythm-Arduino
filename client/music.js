// Instruments
const PITCHSHIFT = new Tone.PitchShift(0).toDestination();
const PIANO = new Tone.Sampler({ urls: { C3: "./piano.wav" } }).connect(PITCHSHIFT);

// Notes
const NOTES = [
  {
    name: "C",
    prefer: "flat"
  },
  {
    name: {
      flat: "Db",
      sharp: "C#",
    },
    prefer: Math.random() >= .5 ? "sharp" : "flat" // Mix it up. This is the only note where I have no preference
  },
  {
    name: "D",
    prefer: "sharp"
  },
  {
    name: {
      flat: "Eb",
      sharp: "D#",
    },
    prefer: "flat"
  },
  {
    name: "E",
    prefer: "sharp"
  },
  {
    name: "F",
    prefer: "flat"
  },
  {
    name: {
      flat: "Gb",
      sharp: "F#",
    },
    prefer: "sharp"
  },
  {
    name: "G",
    prefer: "sharp"
  },
  {
    name: {
      flat: "Ab",
      sharp: "G#",
    },
    prefer: "flat"
  },
  {
    name: "A",
    prefer: "sharp"
  },
  {
    name: {
      flat: "Bb",
      sharp: "A#",
    },
    prefer: "flat"
  },
  {
    name: "B",
    prefer: "sharp"
  },
];

const root = 0;
const minor2 = 1;
const major2 = 2;
const minor3 = 3;
const major3 = 4;
const perfect4 = 5;
const tritone = 6;
const perfect5 = 7;
const minor6 = 8;
const major6 = 9;
const minor7 = 10;
const major7 = 11;

// Chords
const CHORDS = {
  major13th: [
    root, major3,  perfect5, major7, major2,  perfect4,  minor6,  root
  ],
}

function changeChord(currPitch) {
  const rootNote = NOTES.findIndex(val => Object.is(val, currPitch));
  const notes = [];
  
  for (let semitonesFromRoot of CHORDS.major13th) {
    const noteIdx = (rootNote + semitonesFromRoot) % 12;
    notes.push(noteIdx);
  }

  const preferredAccidental = currPitch.prefer;
  updateDisplay(notes, preferredAccidental);
}

function calculateNewPitch(pitch) {
  return Math.floor(pitch / (100 / NOTES.length)) % 12;
}

function isAccidental(name) {
  return typeof name == "object";
}
