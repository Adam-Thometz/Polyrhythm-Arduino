function drawLine(start, end) {
  PEN.strokeStyle = "white";
  PEN.lineWidth = 6;

  PEN.beginPath();
  PEN.moveTo(start.x, start.y);
  PEN.lineTo(end.x, end.y);
  PEN.stroke();
}

function drawArc(color, center, radius) {
  PEN.beginPath();
  PEN.strokeStyle = color;
  PEN.arc(center.x, center.y, radius, Math.PI, MAX_ANGLE);
  PEN.stroke();
}

function drawBall(x, y, size) {
  PEN.fillStyle = "white";
  PEN.beginPath();
  PEN.arc(x, y, size, 0, MAX_ANGLE);
  PEN.fill();
}

function draw() {
  const currentTime = new Date().getTime();
  const elapsedTime = (currentTime - START_TIME) / 1000;
  PAPER.width = PAPER.clientWidth;
  PAPER.height = PAPER.clientHeight;

  const { start, center, end } = getDimensions(PAPER.width, PAPER.height);

  drawLine(start, end);

  const length = end.x - start.x;
  const initialArcRadius = length * 0.05;
  const spacing = (length / 2 - initialArcRadius) / ARCS.length;

  ARCS.forEach((arc, i) => {
    const radius = initialArcRadius + (i * spacing);
    const velocity = VELOCITY - (i * OFFSET);
    const distance = calculateDistance(elapsedTime, velocity);
    const x = center.x + radius*Math.cos(distance);
    const y = center.y + radius*Math.sin(distance);
    
    drawArc(arc.color, center, radius);
    drawBall(x, y, length*0.0075);

    if (currentTime >= arc.nextImpactTime) {
      if (soundEnabled) {
        arc.play();

        const { animation, duration } = createAnimation(arc.color);
        const noteToAnimateIdx = (ARCS.length-1) - arc.position;
        NOTE_DISPLAY[noteToAnimateIdx].animate(animation, duration);
      }
      arc.nextImpactTime = calculateNextImpactTime(arc.nextImpactTime, arc.velocity);
    }
  });

  requestAnimationFrame(draw);
}
