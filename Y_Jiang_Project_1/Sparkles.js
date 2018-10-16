//**Sparkle*****************************************************************************************
class Sparkle{
	//Variables global to class
	constructor(sparkleX, sparkleY){ 
		this.sparkleX = sparkleX;
		this.sparkleY = sparkleY;
		this.sparkleSize = 10/3;
		this.fade;
	} //constructor sparkle
	
	show(){ 
		//Draw sparkle
		noStroke();
		fill(255, 255, 255, 13);
			ellipse(this.sparkleX, this.sparkleY, this.sparkleSize + 200, this.sparkleSize + 12); //sparkle shape and size 
	} //show sparkle
	
	update(){
		//Fade sparkle
		this.sparkleSize = this.sparkleSize * 0.98; //rate sparkles get tinier
		//Sparkle control
		if(this.sparkleSize <= 1/2) //identifies tiny sparkles
			this.fade = true; //verifies tiny stars to disappear from "Main"
	} //update sparkle
} //class sparkle

function createSparkle(){
	var Xsparkle = random(550, 650); 
	var Ysparkle = random(360, width * 2);
	var sparklyWater = new Sparkle(Xsparkle, Ysparkle); //gathers all single sparkles
	sparkle.push(sparklyWater); //repeats single sparkles to create sparkly water
} //function create sparkle