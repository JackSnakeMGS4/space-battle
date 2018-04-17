const SHOT_SPEED = 6.0;
const SHOT_LIFE = 30;
const SHOT_DISPLAY_RADIUS = 1.0;

function shotClass() {
	this.x = 75;
	this.y = 75;
	this.ang = 0;
	this.driftX = 0;
	this.driftY = 0;
	this.myShipPic; // which picture to use
	this.shotLife = 0;

	this.controlKeyUp;
	this.controlKeyRight;
	this.controlKeyLeft;

	this.reset = function() {
		this.shotLife = 0;
	} // end of shotReset func

	this.move = function() {
		if (this.shotLife > 0) 
		{
			this.shotLife--;
		}
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

	this.shootFrom = function(shipFiring)
	{
		this.x = shipFiring.x;
		this.y = shipFiring.y;

		this.xv = 0;
		this.yv = 0;

		this.shotLife = SHOT_LIFE;
	}

	this.draw = function() {
		if (this.shotLife > 0) 
		{
			colorCircle(this.x,this.y, SHOT_DISPLAY_RADIUS, 'white');
		}
	}
}