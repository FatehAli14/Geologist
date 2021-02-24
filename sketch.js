
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
    hammer = new Hammer(600,100);
    stone = new Stone(500,100,100,100);
	

	const mouse = Mouse.create(canvas.elt);
	const options = {
	  mouse: mouse
	}
	mConstraint = MouseConstraint.create(engine,options);
	World.add(world,mConstraint);
	
	Engine.run(engine);
  
	var rubber_options ={
		'restitution':0.3,
          'friction':5,
          'density':1,
	}
	
   rubber = Bodies.circle(200,100,20, rubber_options);
   World.add(world,rubber);
   strokeWeight(4);
   fill("Blue");
   
}


function draw() {
  rectMode(CENTER);
  background("cyan");

  Engine.update(engine);  

   ellipseMode(RADIUS);
   ellipse(rubber.position.x, rubber.position.y, 20, 20);

  ground.display();
  hammer.display();
  stone.display();
  
}



