const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;  
var backgroundImg;  
var Ground;
var bow,bow_img;
var holder;
var boy,girl;
var heart1,heart2,heart3;
var yellowBalloon1,yellowBalloon2,yellowBalloon3,
    yellowBalloon4,yellowBalloon5,yellowBalloon6,
    yellowBalloon7,
    yellowBalloon8,yellowBalloon9,
    yellowBalloon10,yellowBalloon11,
    yellowBalloon12,yellowBalloon13,yellowBalloon14;
var greenBalloon1,greenBalloon2,greenBalloon3,greenBalloon4,
    greenBalloon5,greenBalloon6,greenBalloon7,greenBalloon8,
    greenBalloon9,greenBalloon10,greenBalloon11,greenBalloon12;
var shooter;
var pin,arrow_img;
var greenBalloon_img;


function preload(){

  backgroundImg = loadImage("Background.jpg");

  greenBalloon_img = loadImage("green_balloon.png");

arrow_img = loadImage("arrow.png");

  bow_img = loadImage("bow.png");

}

function setup(){
    var canvas = createCanvas(500,600);
    engine = Engine.create();
    world = engine.world;

    Ground = createSprite(250,560,100,15);
    Ground.shapeColor = "black"

    holder = createSprite(250,528,15,50);
    holder.shapeColor = "black"

    girl = new Human(40,532,20,40);

    boy = new Human(450,500,20,40);

    bow = createSprite(250,498,15,10);
    bow.addImage(bow_img);
    bow.scale = 0.5

    heart1 = new Heart(50,85,85,85);
    heart2 = new Heart(450,85,85,85);
    heart3 = new Heart(250,225,85,85);

    /*yellowBalloon1 = new yellowBalloon(120,85,70,70);
    yellowBalloon2 = new yellowBalloon(100,145,70,70);
    yellowBalloon3 = new yellowBalloon(50,150,70,70);

    yellowBalloon4 = new yellowBalloon(380,85,70,70);
    yellowBalloon5 = new yellowBalloon(400,145,70,70);
    yellowBalloon6 = new yellowBalloon(450,150,70,70);

    yellowBalloon7 = new yellowBalloon(250,85,70,70);

    yellowBalloon8 = new yellowBalloon(220,155,70,70);
    yellowBalloon9 = new yellowBalloon(290,155,70,70);

    yellowBalloon10 = new yellowBalloon(175,215,70,70);
    yellowBalloon11 = new yellowBalloon(330,215,70,70);

    yellowBalloon12 = new yellowBalloon(195,275,70,70);
    yellowBalloon13 = new yellowBalloon(245,290,70,70);
    yellowBalloon14 = new yellowBalloon(305,275,70,70);*/

    greenBalloon1 = createSprite(175,85,70,70);
    greenBalloon1.addImage(greenBalloon_img);
    greenBalloon1.scale = 0.15;

    greenBalloon2 = createSprite(160,155,70,70);
    greenBalloon2.addImage(greenBalloon_img);
    greenBalloon2.scale = 0.15;


    greenBalloon3 = createSprite(110,210,70,70);
    greenBalloon3.addImage(greenBalloon_img);
    greenBalloon3.scale = 0.15;


    greenBalloon4 = createSprite(50,215,70,70);
    greenBalloon4.addImage(greenBalloon_img);
    greenBalloon4.scale = 0.15;

 
    greenBalloon5 = createSprite(325,85,70,70);
    greenBalloon5.addImage(greenBalloon_img);
    greenBalloon5.scale = 0.15;


    greenBalloon6 = createSprite(350,155,70,70);
    greenBalloon6.addImage(greenBalloon_img);
    greenBalloon6.scale = 0.15;


    greenBalloon7 = createSprite(390,210,70,70);
    greenBalloon7.addImage(greenBalloon_img);
    greenBalloon7.scale = 0.15;


    greenBalloon8 = createSprite(450,215,70,70);
    greenBalloon8.addImage(greenBalloon_img);
    greenBalloon8.scale = 0.15;


    greenBalloon9 = createSprite(140,280,70,70);
    greenBalloon9.addImage(greenBalloon_img);
    greenBalloon9.scale = 0.15;


    greenBalloon10 = createSprite(210,340,70,70);
    greenBalloon10.addImage(greenBalloon_img);
    greenBalloon10.scale = 0.15;


    greenBalloon11 = createSprite(285,340,70,70);
    greenBalloon11.addImage(greenBalloon_img);
    greenBalloon11.scale = 0.15;


    greenBalloon12 = createSprite(360,280,70,70);
    greenBalloon12.addImage(greenBalloon_img);
    greenBalloon12.scale = 0.15;



    pin = createSprite(250,500,10,100);
    pin.addImage(arrow_img);
    pin.scale = 0.2;
   

    //shooter = new Shooter(arrow.body,{x:250, y:515});
    
        
        Engine.run(engine);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    pin.x = mouseX;
    pin.y = mouseY;

    textSize(20);
    stroke(5);
    fill(0);
    text("Score = ",35,35);

    textSize(20);
    stroke(5);
    fill(0);
    text("Heart = ",250,35);

   

    Ground.display();

    holder.display();

    boy.display();

    girl.display();

    bow.display();

    heart1.display();
    heart2.display();
    heart3.display();

    if(isTouching(pin,greenBalloon1)){

       console.log("msg") 
       greenBalloon1.tint = "red";

    }

      //

    

   /*yellowBalloon1.display();
    yellowBalloon2.display();
    yellowBalloon3.display();

    yellowBalloon4.display();
    yellowBalloon5.display();
    yellowBalloon6.display();

    yellowBalloon7.display();

    yellowBalloon8.display();
    yellowBalloon9.display();

    yellowBalloon10.display();
    yellowBalloon11.display();

    yellowBalloon12.display();
    yellowBalloon13.display();
    yellowBalloon14.display();*/

 

    //arrow.display();

    //shooter.display();

   /* detectollision(arrow,greenBalloon1);
    detectollision(arrow,greenBalloon2);
    detectollision(arrow,greenBalloon3);
    detectollision(arrow,greenBalloon4);
    detectollision(arrow,greenBalloon5);
    detectollision(arrow,greenBalloon6);
    detectollision(arrow,greenBalloon7);
    detectollision(arrow,greenBalloon8);
    detectollision(arrow,greenBalloon9);
    detectollision(arrow,greenBalloon10);
    detectollision(arrow,greenBalloon11);*/
 
    drawSprites();

}

/*function mouseDragged(){
    Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    shooter.fly();
   
   }*/


   




  /*function detectollision(larrow,lgreenBalloon){
    greenBalloonBodyPosition = lgreenBalloon.body.position
    arrowBodyPosition = larrow.body.position
  
   

    
  var distance = dist(arrowBodyPosition.x,arrowBodyPosition.y,greenBalloonBodyPosition.x,greenBalloonBodyPosition.y)
  //console.log(lgreenBalloon.body.force.x);
 // if(distance <= lgreenBalloon.r+larrow.r){
   
  if(distance <= random(1000,5000)){
     Matter.Body.setStatic(lgreenBalloon.body,false);
  
        }
  
  }*/



function keyPressed(){
    if(keyCode === 32){
       shooter.attach(arrow.body);
    }
}

