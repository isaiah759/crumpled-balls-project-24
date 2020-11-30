const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var dustbin1,dustbin2,dustbin3;
var ground;
var paper;

function preload()
{
	//paperImg= loadImage("sprites/paper trash.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	paper= new Paper(100,300,70);

	dustbin1= new Dustbin(620,627,200,20);
	dustbin2=new Dustbin(510,580,20,100);
	dustbin3= new Dustbin(730,580,20,100);

	ground=new Ground(0,645,1600,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:145,y:-345});
		
	}
}
