function movingWrapPositionClass() {
	this.x = 75;
	this.y = 75;
	this.shotLife = 0;

	this.reset = function() {
		this.xv = this.yv = 0;//sets both to 0
		this.x = (canvas.width - shipPic.width) * 0.5;
		this.y = (canvas.height - shipPic.height) * 0.5;		
	} 

	this.move = function() {
		//updates shot's pos according to shot speed and dir
		this.x += this.xv;
		this.y += this.yv;

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
}