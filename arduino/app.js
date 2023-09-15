const http = require("http");
const WebSocket = require("ws");
const SocketIO = require("socket.io");
const { SerialPort, ReadlineParser } = require("serialport");
require("dotenv").config();

const port = new SerialPort({
  path: process.env.ARDUINO_PORT,
  baudRate: 9600
});
const parser = new ReadlineParser();

port.pipe(parser);

const server = http.createServer();

const wss = new WebSocket.Server({ server });

wss.on('connection', (socket) => {
  socket.on('open', (_) => console.log("connection successful!"));
  
  const io = new SocketIO.Server(server);

  io.on("connection", data => {
    console.log("Node.js is listening!");
  });

  parser.on("data", data => {
    console.log(data);
    io.emit("data", data);
    socket.send(+data.replace("\r", ""));
  });
});

server.listen(process.env.PORT || 3001, () => {
  console.log(`Server started on port ${server.address().port} :)`);
});