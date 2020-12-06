//created variables for hour, minutes, and seconds and stored their angles
var hr;
var mn;
var sec;
var hrAngle, mnAngle, secAngle;

//setup function to create canvas
function setup() {
  //creates canvas
  createCanvas(800,400);
  
}

//draw function to draw the clock
function draw() {
  //sets background color to white
  background(255,255,255);
  //creates clock
  fill("white");
  ellipse(400,200,300);
  //sets the hr, mn, and sec variables to their respective functions
  hr = hour();
  mn = minute();
  sec = second();
  //angle mode is set to degrees
  angleMode(DEGREES);
  //corresponds second angles
  secAngle = map(sec, 0,60,0,360);
  //draws second hand
  push();
  translate(400,200);
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,0,-150);
  pop();
  //corresponds minute angles
  mnAngle = map(mn, 0,60,0,360);
  //draws minute hand
  push();
  translate(400,200);
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(8);
  line(0,0,0,-140);
  pop();
  //corresponds hour angles
  hrAngle = map(hr, 0,12,0,360);
  //draws hour angles
  push();
  translate(400,200);
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(9);
  line(0,0,0,-100);
  pop();

  

  drawSprites();
}