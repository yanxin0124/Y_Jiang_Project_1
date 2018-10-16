//Project 1 by Yanxin

//**Variables*****************************************************************************************
var gradient = 100; //how detailed gradient is
var sparkle = []; //refer to "Sparkles"
var star = []; //refer to "Stars"
//Firefly
var speed = 0.02;
var angle = 0;

//**Canvas********************************************************************************************
function setup(){
	createCanvas(1000, 600);
	
} //function setup

//**Draw**********************************************************************************************
function draw(){
	background(0); 
	mouseGPS(); //refer to "Mouse GPS"
	
//Stars
	createStar(); //refer to "Stars" tab
	for(var str = 0; str < star.length; str = str + 1){ //keeps adding single star
		star[str].show();
		star[str].update();
		if(star[str].dim)
			star.splice(str, 1); //deletes verified dim stars from "Stars"
	} //stars
	
//Moonlight
	for(var moonlight = gradient; moonlight > 0; moonlight = moonlight - 1){
		var moonlightSize = map(moonlight, gradient, 0, width / 2, 100); //size of moonlight
		noStroke();
			fill(lerpColor(color(0), color(0, 126, 255), 1 - moonlight / gradient)); //black to blue inwards moonlight gradient
				ellipse(width / 5 * 3, 370, moonlightSize, moonlightSize); //position of moonlight
	} //moonlight
	
//Moon
	for(var moon = gradient; moon > 0; moon = moon - 1){ 
		var moonSize = map(moon, gradient, 0, 280, 0); //size of moon
		noStroke();
			fill(lerpColor(color(0, 182, 255), color(255), 1 - moon * 9/10 / gradient * 1/3)); //light blue to white inwards moon gradient
				ellipse(594, 370, moonSize, moonSize); //position of moon
	} //moon
	
//Water
	for(var water = gradient; water > 0; water = water - 1){
		var waterSize = map(water, gradient, 0, width * 2 , width * 2); //size of water
		var waterHeight = waterSize/gradient //height of each water frag
		noStroke();
			fill(lerpColor(color(0, 13, 36), color(124, 174, 255), 1 - water / gradient)); //dark blue to light blue upwards
				rect(0, 360 + water * waterHeight * 0.2, waterSize, waterHeight); //position of water
	} //water
	
//Water Sparkles
	createSparkle(); //refer to "Sparkle" tab
	for(var sprk = 0; sprk < sparkle.length; sprk = sprk + 1){ //keeps adding single sparkle
		sparkle[sprk].show();
		sparkle[sprk].update();
		if(sparkle[sprk].fade) 
			sparkle.splice(sprk, 1); //deletes verified tiny sparkles from "Sparkle"
	}	//Water sparkles
	
//Mountains 
	var colorHighlight = color(123, 177, 237);
	var colorRock = color(23, 34, 51);
	var colorShadow = color(5, 10, 10);
	//Left
	translate(0, 2);
	mountainLeft(colorHighlight); //highlight
	push();
		scale(1.2, 0.8);
		translate(-80, 91);
			mountainLeft(colorRock); //rock
	pop();
	push();
		scale(2, 1);
		translate(-280, 0);
		mountainLeft(colorShadow); //shadow
	pop();
	//Right
	push();
		scale(1.4, 1.61);
		translate(-210, -137);
			mountainRight(colorHighlight); //highlight 
	pop();
		mountainRight(colorRock); //rock
	push();
		scale(0.85, 0.82);
		translate(200, 79);
			mountainRight(colorShadow); //shadow
	pop();
	
	//Fireflies
	angle += speed;
	if(mouseIsPressed){
	firefly(pmouseX, pmouseY, 1, 2, 20);
	firefly(pmouseX, pmouseY, 2, 1, 20);
	firefly(pmouseX, pmouseY, 1, -1, 0);
	firefly(pmouseX, pmouseY, -2, 1, 10);
	firefly(pmouseX, pmouseY, -1, -1, 10);
	firefly(pmouseX, pmouseY, -2, 1, 10);
	firefly(pmouseX, pmouseY, 1, -1, 10);
	firefly(pmouseX, pmouseY, 1, 2, 0);
	firefly(pmouseX, pmouseY, -1, -2, 20);
	firefly(pmouseX, pmouseY, 1, -1, 0);
	firefly(pmouseX, pmouseY, -1, -1, 0);
	firefly(pmouseX, pmouseY, 2, 1, 0);
	firefly(pmouseX, pmouseY, 1, -1, 0);
	} else { //firefly catch
	firefly(184, 297, 1, 2, 20);
	firefly(184, 290, 2, 1, 20);
	firefly(59, 326, 1, -1, 0);
	firefly(917, 313, -2, 1, 10);
	firefly(784, 329, -1, -1, 10);
	firefly(125, 320, -2, 1, 10);
	firefly(973, 324, 1, -1, 10);
	firefly(860, 324, 1, 2, 0);
	firefly(58, 275, -1, -2, 20);
	firefly(196, 317, 1, -1, 0);
	firefly(361, 322, -1, -1, 0);
	firefly(286, 335, 2, 1, 0);
	firefly(867, 315, 1, -1, 0);
	} //firefly release
} //function draw