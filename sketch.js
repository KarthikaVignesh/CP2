
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinleft,dustbinright,dustbinbottom, paperObject,groundObject	
var world;
var bin;


function setup() {
	createCanvas(1000, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	groundObject = new ground(500,550,1000,30)
	
	paperObject = new paper(115,520,20)
	bin = new dustbin();

}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("white");
 text(mouseX+","+mouseY,mouseX,mouseY);
 // dustbinObj.display();
//  paperObject.display();
  groundObject.display();
  bin.display();
  paperObject.display();
 
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:55,y:-65});
    
  	}
}





