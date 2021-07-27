var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
  createCanvas(1000, 500);


  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  groundObj = new Ground(width / 2, 400, width, 20);
  leftSide = new Ground(750, 340, 20, 120);
  rightSide = new Ground(950, 340, 20, 120);

  var ball_options = {
    isStatic: false,
    restitution: 0.3,
    friction: 0,
    density: 1.2,
  }
  ball = Bodies.circle(100, 50, 30, ball_options)
  World.add(world, ball);

  ellipseMode(RADIUS);
  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x, ball.position.y, 30, 30);


  drawSprites();

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball, { x: ball.position.x, y: ball.position.y }, { x: 50, y: 300 })
  }

}


