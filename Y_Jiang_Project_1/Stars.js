//**Stars*******************************************************************************************
class Star{
	//Variables global to class
	constructor(starX, starY){
		this.starX = starX;
		this.starY = starY;
		this.voltage = random(0.5, 1); //amount light level increases or decreases
		this.light = random(50, 100); //stars start at random light level
		this.bright;
		this.dim;
	} //constructor sparkle
	
	show(){
		//Draw star
		noStroke();
		fill(255, 255, 255, this.light);
			ellipse(this.starX, this.starY, 3, 3);
	} //show star
	
	update(){
		//Light control
		if(this.bright){
			this.light = this.light - this.voltage; //if star is bright, star dims
		} 
		if(!this.bright){
			this.light = this.light + this.voltage; //if star is dim, star brightens
		} 
		//Star control
		if(this.light >= 240){ 
			this.bright = true; //identifies bright stars
			this.dim = false; 
		} 
		if(this.light <= 10){
			this.dim = true; //identifies dim stars to disappear from "Main"
			this.bright = false;
		}
	} //update star
} //class star

function createStar(){
	var Xstar = random(-width * 2, width);
	var Ystar = random(-height * 2, height/7 * 4 - 10);
	var starrySky = new Star(Xstar, Ystar); //gathers all single stars
	star.push(starrySky); //repeats single stars to create starry night
} //function create star