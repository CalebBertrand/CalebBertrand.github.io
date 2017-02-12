var img;
function preload() {
  img = loadImage("imgs/space-background-optimized.jpeg");
}
function setup() {
	var ctx = createCanvas(windowWidth,windowHeight);
	ctx.parent("background-canvas-holder");
	rectMode(CENTER);
	frameRate(23);
}
var rects = [65, 60, 55, 50, 45, 30, 25, 20, 15, 10];
for (var i = 0; i < 10; i++) {
	rects.push(5*i)
}
var r = 0;
function draw() {
	image(img, 0, 0, width, height)
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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}