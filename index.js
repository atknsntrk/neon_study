let circle1Radius = 100;
let circle1X, circle1Y;
let startAngle; // Start angle for the arc
let endAngle;
let angle;
let falling = false;
let circle2X;
let circle2Y;
let bottom;
function setup(){
    createCanvas(800, 800);
    colorMode(HSB, 360, 100, 100, 100);
    rectMode(CENTER);
    circle1X = width/4;
    circle1Y = width/4;
    startAngle = PI + HALF_PI
    endAngle = TWO_PI
    angle = startAngle
    bottom = height;
    falling = false;
    noFill();
    stroke(255);
    strokeWeight(20);
    circle2X = circle1X + cos(angle) * circle1Radius;
    circle2Y = circle1Y + sin(angle) * circle1Radius;
    stroke(0,100,100);
    arc(50,250, 200, 200, TWO_PI, PI)
  }
  
  function draw(){
    background(230, 50, 15);
    drawingContext.shadowBlur = 0;
    strokeWeight(1);
    stroke(0,100,100);
    arc(circle1Y, circle1X, 200, 200, PI, TWO_PI+HALF_PI);
   
    strokeWeight(10);
    stroke(0,100,100);
    drawingContext.shadowBlur = 12;
    drawingContext.shadowColor = color(0, 100, 100);
    circle(circle2Y, circle2X, 10);
    // rect(width/2, height/2, 300, 300, 30);
    // rect(width/2, height/2, 300, 300, 30);
    angle -= radians(2);
    

    if (!falling) {
      circle2X = circle1X + cos(angle) * circle1Radius;
      circle2Y = circle1Y + sin(angle) * circle1Radius;
    } else {
      circle2X += 7;
    }
    print(circle2Y)
    if (angle < endAngle - TWO_PI) {
      falling = true 
      if (circle2X >= bottom - 50) {
        falling = false;
        angle = endAngle - PI+HALF_PI;
      } 
    } 
  
  }