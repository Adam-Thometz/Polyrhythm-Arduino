const connection = new WebSocket("ws://localhost:3001");

const MAX_PERCENTAGE = 100;
const NUM_OF_NOTES = NOTE_DISPLAY_OPTIONS.length;

connection.onopen = () => {
  console.log("opened websocket connection!");
};

connection.onmessage = e => {
  const { data } = e;
  if (+data) {
    // new pitch should return a number btw 0 and 11
    const newPitch = Math.floor(data / (MAX_PERCENTAGE / NUM_OF_NOTES));
    pitchShift.pitch = newPitch;
    if (currPitch != newPitch) {
      currPitch = NOTE_DISPLAY_OPTIONS[newPitch];
      currKeyDisplay.textContent = `Key: ${currPitch}`;
      changeDisplay();
    }
  }
}
