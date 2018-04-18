shipClass.prototype = new movingWrapPositionClass();

const SPACESPEED_DECAY_MULT = 0.99;
const THRUST_POWER = 0.15;
const TURN_RATE = 0.1;

function shipClass() {
	this.x = 75;
	this.y = 75;
	this.ang = 0;
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

	this.superClassReset = this.reset;

	this.reset = function(whichImage) {
		this.superClassReset();
		this.myShipPic = whichImage;
		this.x = (canvas.width - shipPic.width) * 0.5;
		this.y = (canvas.height - shipPic.height) * 0.5;

		this.myShot.reset();
	} // end of shipReset func

	this.superClassMove = this.move;//ship's ref to parent class

	this.move = function() {
		if(this.keyHeld_Thrust) {
			this.xv += Math.cos(this.ang) * THRUST_POWER;
			this.yv += Math.sin(this.ang) * THRUST_POWER;
		}
		if(this.keyHeld_TurnLeft) {
			this.ang -= TURN_RATE;
		}
		if(this.keyHeld_TurnRight) {
			this.ang += TURN_RATE;
		}

		this.superClassMove();

		this.xv *= SPACESPEED_DECAY_MULT;
		this.yv *= SPACESPEED_DECAY_MULT;
		this.myShot.move();
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

	this.checkMyShipAndShotCollisionAgainst = function(thisEnemy)
	{
		if (thisEnemy.isOverlappingPoint(this.x, this.y)) 
		{
			this.reset(shipPic);
			document.getElementById("debugText").innerHTML = "Player Crashed!";
		}
		if (this.myShot.hitTest(thisEnemy)) 
		{
			thisEnemy.reset(UFOpic);
			this.myShot.reset();
			document.getElementById("debugText").innerHTML = "Alien Blasted!";
		}
	}
}