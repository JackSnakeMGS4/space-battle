UFOClass.prototype = new movingWrapPositionClass();

const UFO_SPEED = 2;
const UFO_TIME_BETWEEN_DIR_CHANGE = 100;

function UFOClass() {
	this.x = 75;
	this.y = 75;
	this.myUFOPic; // which picture to use

	this.superClassReset = this.reset;

	this.reset = function(whichImage) {
		this.superClassReset();
		this.myUFOPic = whichImage;
		this.x = Math.random() * canvas.width;
		this.y = Math.random() * canvas.height;
		this.cyclesTilDirectionChange = 0;
	} // end of UFOReset func

	this.superClassMove = this.move;//UFO's ref to parent class

	this.move = function() {
		this.superClassMove();
		this.cyclesTilDirectionChange--;

		//randomizes direction movement at predesignated time interval
		if (this.cyclesTilDirectionChange <= 0) 
		{
			var randomAngle = Math.random()*Math.PI*2.0;
			this.xv = Math.cos(randomAngle) * UFO_SPEED;
			this.yv = Math.sin(randomAngle) * UFO_SPEED;
			this.cyclesTilDirectionChange = UFO_TIME_BETWEEN_DIR_CHANGE;
		}
	}

	this.draw = function() {
		drawBitmapCenteredWithRotation(this.myUFOPic, this.x,this.y, 0);
	}
}