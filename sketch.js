const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world =engine.world;

  var ground_options = {
    isStatic : true
  }
  object = Bodies.  rectangle(200,390,50,50,ground_options);
  World.add(world,object);

  var object2_options = {
    restitution:1.0
  }

  object2=Bodies.circle(200,100,20,object2_options);
  World.add(world,object2);

  console.log(object);
  console.log(object.type);
  console.log(object.position.x);
  console.log(object.position.y);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,500,50);

  ellipseMode(RADIUS);
  ellipse(object2.position.x,object2.position.y,20,20);
  drawSprites();
}