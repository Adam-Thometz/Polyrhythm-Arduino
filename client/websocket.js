const connection = new WebSocket("ws://localhost:3001");
console.log(connection)

connection.onopen = () => {
  console.log("opened websocket connection!");
};

connection.onmessage = e => {
  const data = +e.data;
  if (data) {
    const newPitch = calculateNewPitch(data);
    if (currPitch != newPitch) {
      PITCHSHIFT.pitch = newPitch;
      currPitch = NOTES[newPitch];
      const pitchDisplay = isAccidental(currPitch.name)
        ? currPitch.name[currPitch.prefer]
        : currPitch.name;
      CURR_KEY_DISPLAY.textContent = `Key: ${pitchDisplay}`;
      changeChord(currPitch);
    }
  }
}
