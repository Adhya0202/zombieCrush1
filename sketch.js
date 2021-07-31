const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
stones = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world; 
  
  frameRate(80);
  base = new Base (700,windowHeight,windowWidth+10,20);
  leftW = new Base (15,windowHeight-300,150,100);
  joinPoint = new Base (windowWidth-30,windowHeight-300,150,100);
  

bridge = new Bridge(14,{x:15,y:windowHeight-300});


 Matter.Composite.add(bridge.body,joinPoint); 
  jointLink= new Link(bridge,joinPoint);
  
}

function draw() {
  
  background(51);
  
  Engine.update(engine);
  base.show();
  leftW.show();
  jointLink.show()
  joinPoint.show();
 
  bridge.show();
}
