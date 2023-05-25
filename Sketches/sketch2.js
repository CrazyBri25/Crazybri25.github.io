function setup() {
  createCanvas(400, 300);
}

function draw() {
 background(200, 200, 255);
  line(100, 0, 100, 300);
  line(200, 0, 200, 300);
  line(300, 0, 300, 400);
  
  if (mouseX > 0 && mouseX <= 100) {
   
 background(200, 255, 255);
    line(100, 0, 100, 300);
  line(200, 0, 200, 300);
  line(300, 0, 300, 400);
    ellipse(mouseX, mouseY, 40, 40);
    textSize(30)
    text('😞',20,200)
    
   
  }
  
  else if (mouseX > 100 && mouseX <= 200) {
     background(200, 200, 255);
    line(100, 0, 100, 300);
  line(200, 0, 200, 300);
  line(300, 0, 300, 400);
    ellipse(mouseX, mouseY, 40, 40);
    textSize(40)
   text('💔',120,100)
    
  }
  
  else if (mouseX > 200 && mouseX <= 300) {
    background(255, 50, 255)
     line(100, 0, 100, 300);
  line(200, 0, 200, 300);
  line(300, 0, 300, 400);
    ellipse(mouseX, mouseY, 40, 40);
    textSize(50)
    text('❤️‍🩹',210,220)
    
  }
  
  
  else if (mouseX > 300 && mouseX <= 400) {
     background(128, 128, 0)
     line(100, 0, 100, 300);
  line(200, 0, 200, 300);
  line(300, 0, 300, 400);
    ellipse(mouseX, mouseY, 40, 40);
    textSize(60)
    text('☺️',310,100)
    
    
    
    
  }
}







