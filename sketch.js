

function preload() {
//preload the images here

}

function setup() {
  createCanvas(1200, 400);
  box1 = new Building(900,300,70,70);
    box2 = new Building(900,230,70,70);
   
    

    box3 = new Building(900,160,70,70);
    box4 = new Building(900,90,70,70);
    
    ball = new Super(700,300,20);
 
   

    box5 = new Building(900,20,70,70);
    

}

function draw() {
  background(0);
  box1.display();
  
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ball.display();
}

