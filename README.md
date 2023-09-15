# Polyrhythms + Arduino

## Tech used
### Software
- Javascript + Vite
- Node.js
- C++
- Arduino IDE

### Hardware
- Arduino
- Breadboard
- Potentiometer
- 3 jumper cables (M-to-M)

## How to setup (client only)
1. `cd client`
2. `npm install`
3. If not using Arduino, comment out line 29 in `index.html`
4. `npm run dev`

## How to setup (with Arduino)
1. Setup Arduino:
   1. Place potentiometer on the breadboard
   2. Connect center pin of potentiometer to `A2` (it can be any analog port but the code is currently set to port 2)
   3. Connect right pin of potentiometer to `5V`
   4. Connect left pin of potentiometer to `GND`
   5. Connect Arduino to computer
   6. Open Arduino IDE and paste contents of `src.ino`
   7. Upload contents to Arduino
   8. Make note of the port that the Arduino is on (found in Arduino IDE). You'll need it in a future step
2. `cd arduino`
3. `npm install`
4. Create a `.env` file, create a variable `ARDUINO_PORT`, and set it to your Arduino's port
5. `node app.js`
6. Follow client setup steps above