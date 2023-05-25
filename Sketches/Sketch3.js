

function setup() {            //Run the setup function
  createCanvas(windowWidth, windowHeight);  //Create a canvas equal to the size of a window 
  background(255);
}

function draw() {   //Run the draw function

background('#d4e6f1')        //Set the background to a lightskyblue
  
  //The Ground
  noStroke();            //Set to no Stroke
  fill('green');        //Set fill to green 
  rect(0,400,windowWidth,100);


  //The House
  fill('blue');           //Set fill to blue
  stroke('black');        //Set stroke to black
  rect(50,200,220,200);

  //Windows
  fill('lightblue');       //Set fill to lightblue
  strokeWeight(10);        //Set strokeweight to 10
  stroke('black');         //Set stroke to black
  rect(80,250,50,50);
  rect(180,250,50,50);

  
//Chimeny
  fill('brown');          //Set fill to brown
  stroke('black');        //Set stroke to black
  rect(200,90,30,100,400);
  
  //Triangle
  fill('gray');             //Set fill to grey
 triangle(50,200, 100,100,270,200);

  //Door
  fill('gray');          //Set fill to grey
  stroke('black');       //Set stroke to black
  rect(130,325,50,75);

  //Sun
  fill('yellow');
  stroke("black")
  circle(0,0,100);
  line(50,50,75,75);
  line(30,60,40,90);
  line(60,30,90,45);

  //Cloud
  fill('lightblue');
  strokeWeight(0);
  circle(300,30,100,100,50);
  circle(230,80,30,500,50);
  circle(250,50,70,500,50);
  circle(350,30,70,500,50);

  
  //Pool
  fill('pink')
  rect(0,450,200,50);
  fill('teal');
  ellipse(100,450,200,30);

 //Mail Box Stick
  fill('darkblue');
  stroke('black');
  rect(300,350,5,50);

  //Mail Box
  fill('darkblue');
  stroke('black');
  rect(300,300,50,50);

  

}