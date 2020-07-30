const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

  var engine,world;
  var bow;
  var arrow;  
  var ground;
  var gameState;
  var form;
  var PLAY;
  var end;
  var playerimg,groundimg;
  var obstacle;
  var targetbird;
  var shoot;
  var backgroundimg;
  
function preload(){
  backgroundimg=loadImage("bg1.jpg");
}
function setup() {

  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  GameState=form;
  ground=new Ground(600,height,1200,20);
  arrow=new Arrow(90,500,200,200);
  bow=new Bow(90,300,200,200);
  //obstacle=new Obstacle(1200,30,30,30);
  shoot = new Shoot(arrow.body,{x:90, y:500});
 obstacle=new Obstacle(100,200,40,40);
 obstacle.body.speed=-3;

}

function draw() {

  background(backgroundimg); 
  Engine.update(engine);
  bow.display();
  ground.display();
  arrow.display();
  obstacle.display();
  //console.log(mouse.x,mouse.y);

   //if(keyIsDown("Space")){
     //GameSate=PLAY;
  // }
   if(GameState=PLAY){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    ground=new Ground(600,height,1200,20);
    arrow=new Arrow(90,500,200,200);
    bow=new Bow(90,500,200,200);
    obstacle=new Obstacle(1100,30,30,30);
    shoot = new Shoot(bow.body,{x:90, y:500});
    targetbird=new Obstacle(1100,30,30,30);
    
    background(backgroundimg); 
  Engine.update(engine);
  bow.display();
  ground.display();
  arrow.display();
  obstacle.display();
  targetbird.display();
   }

}
function mouseDragged(){
  if(gameState!=="launch"){
      Matter.Body.setPosition(bow.body, {x: mouseX , y: mouseY});
  }
  
}


function mouseReleased(){
  arrow.fly();
  gameState="launch";
}

function keyPressed(){
  if(keyCode===32){
    gameState=PLAY
  }
}
