const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;
const KEY_SPACEBAR = 32;

var mouseX = 0;
var mouseY = 0;

function setupInput() {
	canvas.addEventListener('mousemove', updateMousePos);

	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);

	playerShip.setupInput(KEY_W, KEY_D, KEY_A, KEY_SPACEBAR);
} 

function updateMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;

	// cheat / hack to test car in any position
	/*carX = mouseX;
	carY = mouseY;
	carSpeedX = 4;
	carSpeedY = -4;*/
}

function keySet(keyEvent, setTo) {
	if(keyEvent.keyCode == playerShip.controlKeyLeft) {
		playerShip.keyHeld_TurnLeft = setTo;
	}
	if(keyEvent.keyCode == playerShip.controlKeyRight) {
		playerShip.keyHeld_TurnRight = setTo;
	}
	if(keyEvent.keyCode == playerShip.controlKeyUp) {
		playerShip.keyHeld_Thrust = setTo;
	}
}

function keyPressed(evt) {
	// console.log("Key pressed: "+evt.keyCode);
	keySet(evt, true);

	if (evt.keyCode == playerShip.controlKeyForShotFire) 
	{
		playerShip.cannonFire();
	}

	evt.preventDefault();
}

function keyReleased(evt) {
	// console.log("Key pressed: "+evt.keyCode);
	keySet(evt, false);
}