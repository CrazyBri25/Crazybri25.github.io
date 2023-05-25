function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  
  
  //The Head
  fill('burlywood')
  ellipse(200,200,300,300)
  
  //The Eye
  fill('white')
  stroke('black')
  strokeWeight(5)
  circle(130,150,60)
  circle(268,160,60)
  fill('lightblue')
  ellipse(135,155,40)
  ellipse(270,160,40)
  
  
  //The Nose
  fill('brown')
  triangle(193,164,219,228,158,229)
  
  //The Mouth
  fill(255,0,0,100)
  rect(160,300,100,10)
  
  
  
  
  
  
  
  
  
}