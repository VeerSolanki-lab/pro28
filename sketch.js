const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(windowWidth/2,height,windowWidth,20);
  

    
   
    
    dustbinObj=new dustbin(windowWidth-200,windowHeight-50);
    bird = new Bird(200,785);

    
    slingshot = new SlingShot(bird.body,{x:200, y:785});
}

function draw(){
    background("gray");
    Engine.update(engine);
    strokeWeight(4);
  
    ground.display();

    
    
dustbinObj.display();
    bird.display();
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}