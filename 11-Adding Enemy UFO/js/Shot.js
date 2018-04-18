shotClass.prototype = new movingWrapPositionClass();

const SHOT_SPEED = 6.0;
const SHOT_LIFE = 40;//sets how long each shot will alive
const SHOT_DISPLAY_RADIUS = 3.0;

function shotClass() {
	this.x = 75;
	this.y = 75;
	this.shotLife = 0;

	this.superClassReset = this.reset;

	this.reset = function() {
		this.superClassReset();
		this.shotLife = 0;
	} // end of shotReset func

	this.superClassMove = this.move;//saves a reference to the move func in MWP.js
	this.move = function() {
		if (this.shotLife > 0) 
		{
			this.shotLife--;
			this.superClassMove();
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
		this.xv = Math.cos(shipFiring.ang) * SHOT_SPEED + shipFiring.xv;
		this.yv = Math.sin(shipFiring.ang) * SHOT_SPEED + shipFiring.yv;

		this.shotLife = SHOT_LIFE;
	}

	this.draw = function() {
		if (this.shotLife > 0) 
		{
			colorCircle(this.x,this.y, SHOT_DISPLAY_RADIUS, 'white');
		}
	}
}