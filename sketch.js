var ball; 
var ground, leftside, rightside;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300,900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(50,350,10,ball_options);
	World.add(world,ball);
	ground=new Ground(width/2,870,width,20);
	World.add(world,ground);
	leftside=new Ground(800,800,10,150);
	World.add(world,leftside);
	rightside=new Ground(1200,800,10,150);
	World.add(world,rightside);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y);
  ground.display();
  leftside.display();
  rightside.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:15,y:-25});
	}	
}


