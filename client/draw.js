function draw() {
  const currentTime = new Date().getTime();
  const elapsedTime = (currentTime - START_TIME) / 1000;
  paper.width = paper.clientWidth;
  paper.height = paper.clientHeight;

  const { start, center, end } = getDimensions({
    width: paper.width,
    height: paper.height
  });

  pen.strokeStyle = "white";
  pen.lineWidth = 6;

  pen.beginPath();
  pen.moveTo(start.x, start.y);
  pen.lineTo(end.x, end.y);
  pen.stroke();

  const length = end.x - start.x;
  const initialArcRadius = length * 0.05;
  const spacing = (length / 2 - initialArcRadius) / ARCS.length;

  ARCS.forEach((arc, i) => {
    const radius = initialArcRadius + (i * spacing);
    const circleVelocity = VELOCITY - (i * OFFSET);
    const distance = calculateDistance({
      elapsedTime,
      velocity: circleVelocity,
    });
    const x = center.x + radius*Math.cos(distance);
    const y = center.y + radius*Math.sin(distance);
    
    // Draw arc
    pen.beginPath();
    pen.strokeStyle = arc.color;
    pen.arc(center.x, center.y, radius, Math.PI, MAX_ANGLE);
    pen.stroke();

    // Draw circle
    pen.fillStyle = "white";
    pen.beginPath();
    pen.arc(x, y, length*0.0065, 0, MAX_ANGLE);
    pen.fill();

    if (currentTime >= arc.nextImpactTime) {
      if (soundEnabled) {
        arc.play();

        const { animation, duration } = createAnimation(arc.color);
        noteDisplay[ARCS.length - arc.position - 1].animate(animation, duration);
      }
      arc.nextImpactTime = calculateNextImpactTime(arc.nextImpactTime, arc.velocity);
    }
  });

  requestAnimationFrame(draw);
}