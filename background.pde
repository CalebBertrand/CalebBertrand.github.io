void setup() {
	size(window.innerWidth,window.innerHeight/2);
	PFont fontA = loadFont("sans-serif");
	textFont(fontA, 14);	
}
var boxW = 50;
rectMode(CENTER);
void draw() {
	background(0, 0, 0, 20);
	for (var x = boxW/2; x < width; x+=boxW) {
		noFill();
		strokeWeight(3);
		stroke(0, 255, 0);
		rect(boxW, boxW, random(1, x, abs(width/2-x)/50));
	}
}