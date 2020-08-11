const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score = 0;

var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;

var block8;
var block9;
var block10;
var block11;
var block12;

var block13;
var block14;
var block15;

var block16;

var base;
var shooter;
var slingshot;

var gameState = "onSling";

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
    
  Engine.run(engine);

  //level1 one
  block1 = new Box(480,275,30,40);
  block2 = new Box(300,275,30,40);
  block3 = new Box(330,275,30,40);
  block4 = new Box(360,275,30,40);
  block5 = new Box(390,275,30,40);
  block6 = new Box(420,275,30,40);
  block7 = new Box(450,275,30,40); 
 
  //level two
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);

  //level three
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);

  //top 
  block16 = new Box(390,155,30,40);   

  //base
  base = new BaseClass(385,295,325,10);

  //shooter
  shooter = new Shooter(750,205,40,40);

  //slingshot
  slingshot = new Slingshot(shooter.body,{x : 500, y : 205});
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255,255,255);  
  Engine.update(engine);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  base.display();
  shooter.display();
  if(shooter.isTouching(block1,block2,block3,block4.block15,block16,block12)){
    score = score + 1
  }

  drawSprites();
}
function mouseDragged(){
  gameState 
  if (gameState ==="onSling"){
      Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.rectangle);
  }
}