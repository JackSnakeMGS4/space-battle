var canvas, canvasContext;

var playerShip = new shipClass();
var enemyShip = new UFOClass();

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	
	colorText("LOADING IMAGES", canvas.width/2, canvas.height/2, 'white');

	loadImages();
	playerShip.reset(shipPic);
	enemyShip.reset(UFOpic);
}

function imageLoadingDoneSoStartGame() {
	var framesPerSecond = 60;
	setInterval(updateAll, 1000/framesPerSecond);

	setupInput();
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	playerShip.checkMyShipAndShotCollisionAgainst(enemyShip);
	playerShip.move();
	playerShip.handleEdgeWrap();

	enemyShip.move();
	enemyShip.handleEdgeWrap();
}

function drawAll() {
	colorRect(0,0, canvas.width,canvas.height, 'black');
	playerShip.draw();
	enemyShip.draw();
} 