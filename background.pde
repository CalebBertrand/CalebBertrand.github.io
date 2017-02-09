function setup() {
	createCanvas(window.innerWidth,window.innerHeight/1.5);
	rectMode(CENTER);
	frameRate(23);
}
var rects = [65, 60, 55, 50, 45, 30, 25, 20, 15, 10];
for (var i = 0; i < 10; i++) {
	rects.push(5*i)
}
var r = 0;
function draw() {
	background(0);
	translate(width/2, height/2);
	rotate(r);
	r+=0.001;
	stroke(0, 255, 0);
	noFill();
	for (var a = 0; a < TWO_PI; a+=QUARTER_PI/4) {
		line(0, 0, width*2.5*cos(a), height*2.5*sin(a));
	}
	for (var i = 0; i < rects.length; i++) {
		rect(0, 0, width/rects[i]*8, height/rects[i]*8);
		rects[i]-=0.6;
		if (rects[i] < 0) {
			rects[i] = 40;
		}
	}
}