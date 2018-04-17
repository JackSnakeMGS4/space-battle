const SPACESPEED_DECAY_MULT = 0.99;
const THRUST_POWER = 0.15;
const TURN_RATE = 0.1;

function shipClass() {
	this.x = 75;
	this.y = 75;
	this.ang = 0;
	this.driftX = 0;
	this.driftY = 0;
	this.myShipPic; // which picture to use
	this.myShot = new shotClass();

	this.keyHeld_Thrust = false;
	this.keyHeld_TurnLeft = false;
	this.keyHeld_TurnRight = false;

	this.controlKeyUp;
	this.controlKeyRight;
	this.controlKeyLeft;
	this.controlKeyForShotFire;

	this.setupInput = function(upKey, rightKey, leftKey, shotKey) {
		this.controlKeyUp = upKey;
		this.controlKeyRight = rightKey;
		this.controlKeyLeft = leftKey;
		this.controlKeyForShotFire = shotKey;
	}

	this.reset = function(whichImage) {
		this.myShipPic = whichImage;
		this.x = (canvas.width - shipPic.width) * 0.5;
		this.y = (canvas.height - shipPic.height) * 0.5;
		this.driftX = 0;
		this.driftY = 0;
		this.myShot.reset();
	} // end of shipReset func

	this.move = function() {
		if(this.keyHeld_Thrust) {
			this.driftX += Math.cos(this.ang) * THRUST_POWER;
			this.driftY += Math.sin(this.ang) * THRUST_POWER;
		}
		if(this.keyHeld_TurnLeft) {
			this.ang -= TURN_RATE;
		}
		if(this.keyHeld_TurnRight) {
			this.ang += TURN_RATE;
		}

		this.x += this.driftX;
		this.y += this.driftY;	


		this.driftX *= SPACESPEED_DECAY_MULT;
		this.driftY *= SPACESPEED_DECAY_MULT;
		this.myShot.move();
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

	this.draw = function() {
		this.myShot.draw();
		drawBitmapCenteredWithRotation(this.myShipPic, this.x,this.y, this.ang);
	}

	this.cannonFire = function()
	{
		if (this.myShot.isShotReadyToFire()) 
		{
			this.myShot.shootFrom(this);
		}
	}
}