//**Firefly*****************************************************************************************
function firefly(locX, locY, directionX, directionY, range){ //fireflies above water
	var radius = random(20, 21); //creates glow effect
	var fireflySize = random(2, 8); //creates glow effect
	var light = random(50, 100); //creates flicker effect
	var fireflyX = locX + cos(angle) * radius * directionX + range; //follows mouse X coords
	var fireflyY = locY + sin(angle) * radius * directionY + range; //follows mouse Y coords
	
	//Draw firefly
	noStroke();
	fill(255, 245, 116, light);
		ellipse(fireflyX, fireflyY, fireflySize + 10, fireflySize + 10); //bumlight
	fill(255, 245, 116);
		ellipse(fireflyX, fireflyY, fireflySize - 1, fireflySize - 1); //body
} //function firefly