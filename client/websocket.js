const connection = new WebSocket("ws://localhost:3001");

const MAX_PERCENTAGE = 100;
const NUM_OF_NOTES = NOTES.length;

connection.onopen = () => {
  console.log("opened websocket connection!");
};

connection.onmessage = e => {
  const data = +e.data;
  if (data) {
    // new pitch should return a number btw 0 and 11
    const newPitch = Math.floor(data / (MAX_PERCENTAGE / NUM_OF_NOTES)) % 12;
    PITCHSHIFT.pitch = newPitch;
    if (currPitch != newPitch) {
      currPitch = NOTES[newPitch];
      const pitchDisplay = typeof currPitch.name == "object"
        ? currPitch.name[currPitch.prefer]
        : currPitch.name
      CURR_KEY_DISPLAY.textContent = `Key: ${pitchDisplay}`;
      changeChord(currPitch);
    }
  }
}
