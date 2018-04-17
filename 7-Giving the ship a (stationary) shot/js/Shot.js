const SHOT_SPEED = 6.0;
const SHOT_LIFE = 30;
const SHOT_DISPLAY_RADIUS = 2.0;

function shotClass() {
	this.x = 75;
	this.y = 75;
	this.ang = 0;
	this.driftX = 0;
	this.driftY = 0;
	this.myShipPic; // which picture to use
	this.shotLife;

	this.controlKeyUp;
	this.controlKeyRight;
	this.controlKeyLeft;

	this.reset = function(whichImage) {
		this.myShipPic = whichImage;
		this.x = (canvas.width - shipPic.width) * 0.5;
		this.y = (canvas.height - shipPic.height) * 0.5;
		this.driftX = 0;
		this.driftY = 0;
		this.shotLife = 0;
	} // end of shipReset func

	this.move = function() {
		this.driftX += Math.cos(this.ang) * THRUST_POWER;
		this.driftY += Math.sin(this.ang) * THRUST_POWER;
		
		this.x += this.driftX;
		this.y += this.driftY;	


		this.driftX *= SPACESPEED_DECAY_MULT;
		this.driftY *= SPACESPEED_DECAY_MULT;
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

	this.shootFrom = function(playerShip)
	{
		if (this.shotLife == 0) 
		{

		}
	}

	this.draw = function() {
		
	}
}