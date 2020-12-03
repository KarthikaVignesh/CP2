class dustbin
{
	
	constructor()
	{
		var options={
			isStatic:true			
			}
		
		this.leftbody=Bodies.rectangle(550,485,30,100 , options);
		this.rightbody=Bodies.rectangle(850,485,30,100, options);
		this.bottombody=Bodies.rectangle(715,520,350,150, options);
		this.image = loadImage("dustbingreen.png")
		 World.add(world, this.leftbody);
		 World.add(world, this.rightbody);
		 World.add(world, this.bottombody);
		 
		 

	}
	display()
	{
			

		rectMode(CENTER)
		strokeWeight(0);
		fill(255,0,0)
		rect(this.leftbody.position.x,this.leftbody.position.y,30,100);
		rect(this.rightbody.position.x,this.rightbody.position.y,30,100);
		push()
		imageMode(CENTER)
		image(this.image,this.bottombody.position.x-15,this.bottombody.position.y-60,350,150)
		pop()

			
	}

}