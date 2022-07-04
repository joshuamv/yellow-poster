// change these:

//composition changes
let x = 100;
let x2 = 500;
let y = 400;
let y2 = 180;
//white dots
let maxSz = 30;
let opacity = 255;
//bg
let bgColor = [223,255,0];



function preload() {
	font = loadFont('fonts/Gigxa.otf');
	font1 = loadFont('fonts/TWKEverett-Light.otf');
  }


function setup() {
	let posterHeight = windowHeight/1.03;
	createCanvas(posterHeight/1.42, posterHeight);
}

function draw() {
	background(bgColor);
	noFill();
	stroke(0, 100);
	textSize(600);
	textStyle(BOLD);
	angleMode(DEGREES);
	strokeWeight(1);
	textFont("Helvetica-bold");

	push();
		rotate(9);
		text("27", 250, windowHeight-x2);
	pop();
	for (let x = 0; x < 10; x++) {
		stroke(0,x*5)
		ellipse((y/10)*x,y2/2.5,100,100);
	}

	//paragraphs
	textFont(font1);
	fill(0);
	noStroke();
	textSize(14);
	textStyle(NORMAL);
	text(`
		I cheated myself
		Like I knew I would
		I told you I was trouble
		You know that I'm no good`, 
	x, y);	

	text(`
		Come doused in mud, soaked in bleach
		As I want you to be
		As a trend, as a friend
		As an old memoria`, 
	x, y+y2);

	text(`
		The time to hesitate is through
		No time to wallow in the mire
		Try now we can only lose
		And our love become a funeral pyre`, 
	x, y+(y2*2));

	text(`
		One of these mornings,
		You're gonna rise, rise up singing,
		You're gonna spread your wings, child
		And take, take to the sky.`, 
	x, y+(y2*3));

	text(`
		Against the door he leans
		and starts a scene,
		And his tears fall and burn
		the garden green.
		And so castles made of sand,
		fall in the sea, eventually.`, 
	x, y+(y2*4));

	//initials
	textFont("helvetica");
	fill(0,130);
	text(`
	A W`, 
	x+x2, y);	

	text(`
	K C`, 
	x+x2, y+y2);	

	text(`
	J M`, 
	x+x2, y+(y2*2));	

	text(`
	J J`, 
	x+x2, y+(y2*3));	

	text(`
	J H`, 
	x+x2, y+(y2*4));
	

	var moY = mouseY;
	var moX = mouseX;
	var re = 255;
	var gr = 255;
	var bl = 255;

	//grid of circles
	rotate(9);
	translate(-100,-200)
	for (var i = 15; i < width*2; i = i + 50) {
	  for (var j = 15; j < height*2; j = j + 50) {
		// measure distance
		var d = dist(moX, moY, i, j);
		// remap distances
		var r = map(d, 0, width, maxSz, 1);
		// points
		strokeWeight(r);
		stroke(re, gr, bl, opacity);
		point(i, j);
	  }
	}
}
