const SHOT_SPEED = 6.0;
const SHOT_LIFE = 40;//sets how long each shot will alive
const SHOT_DISPLAY_RADIUS = 3.0;

function shotClass() {
	this.x = 75;
	this.y = 75;
	this.shotLife = 0;

	this.reset = function() {
		this.shotLife = 0;
	} // end of shotReset func

	this.move = function() {
		//updates shot's pos according to shot speed and dir
		this.x += this.xv;
		this.y += this.yv;

		if (this.shotLife > 0) 
		{
			this.shotLife--;
		}
		
		this.handleEdgeWrap();
	}

	this.handleEdgeWrap = function()
	{
		if (this.x > canvas.width) 
		{
			this.x = (this.x - canvas.width);
		}
		if (this.x < 0) 
		{
			this.x = (this.x + canvas.width);
		}
		if (this.y > canvas.height) 
		{
			this.y = (this.y - canvas.height);
		}
		if (this.y < 0) 
		{
			this.y = (this.y + canvas.height);
		}
	}

	//blocks shot from refiring if shot is still active
	this.isShotReadyToFire = function()
	{
		return (this.shotLife <= 0);
	}

	this.shootFrom = function(shipFiring)
	{
		//next two lines set initial position to fire from
		this.x = shipFiring.x;
		this.y = shipFiring.y;

		//next two lines set direction of travel for each shot
		this.xv = Math.cos(shipFiring.ang) * SHOT_SPEED + shipFiring.driftX;
		this.yv = Math.sin(shipFiring.ang) * SHOT_SPEED + shipFiring.driftY;

		this.shotLife = SHOT_LIFE;
	}

	this.draw = function() {
		if (this.shotLife > 0) 
		{
			colorCircle(this.x,this.y, SHOT_DISPLAY_RADIUS, 'white');
		}
	}
}