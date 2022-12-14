
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var papel;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);

	papel = new Paper(300,650,100);	
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  groundObject.display();
  dustbinObj.display();
  papel.display();



}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(papel.body,{x:0,y:0},{x:25,y:-50});
	}
}

