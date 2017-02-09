function setup() {
	createCanvas(window.innerWidth,window.innerHeight/2);
}
function draw() {
	background(0);
	translate(width/2, height/2);
	stroke(0, 255, 0);
	for (var a = 0; a < 360; a+=30) {
		line(0, 0, width*1.4*cos(a), height*1.4*sin(a));
	}
}