var cloudX
var cloudY
var moveCloud


function setup() {
	createCanvas(700,600);
	noStroke()
	loop();
	cloudX = 520;
	cloudY = 850;
	moveCloud = false;
	riseCloud = false;
}

function mouseClicked() {
	if(mouseX>400 && mouseX<660 && mouseY<245 && mouseY>70){
		moveCloud = true;
	}
}

function draw() {
	background(194,184,255);
	if (moveCloud && cloudY > 150) {
		cloudX = cloudX - 5;
		cloudY = cloudY - 5;
	}




//moon
push();	
	translate(550,150);
	fill(255,63,97);
	ellipse(0,0,175);
pop();
push();
	translate(520,150);
	fill(194,184,255);
	ellipse(0,0,120,150);
pop();

//manFishing
push();
	translate(530,160);
	fill(127,42,97);
	ellipse(0,0,25);
	quad(3,10,13,10,19,56,3,60);
	//arms
	quad(3,10,8,25,-20,45,-24,35);
	quad(-24,32,-40,22,-45,15,-15,30);
	//legs
	quad(3,63,19,56,-15,23,-23,30);
	quad(-10,30,-23,30,-35,56,-28,61);
	quad(-30,50,-45,45,-48,50,-28,61);
	//pole
	quad(-40,20,-45,15,-85,-5,-85,-5);
	//string
	line(-85,-5,-85,600);
pop();

//mountain
push();
	fill(48,55,161);
	beginShape();
		vertex(-20,600);
		vertex(-10,375);
		vertex(18,525);
		vertex(65,400);
		vertex(160,490);
		vertex(230,375);
		vertex(265,507);
		vertex(333,330);
		vertex(390,475);
		vertex(455,380);
		vertex(520,500);
		vertex(560,330);
		vertex(610.575);
		vertex(680,520);
		vertex(710,400);
		vertex(730,600);
	endShape();
pop();

//cloud
push();
	fill(255,189,228);
	translate(cloudX,150);
	ellipse(0,0,130,150);
	ellipse(40,0,120,100);
	ellipse(95,15,85,50);
	ellipse(-50,10,120,85);
	ellipse(-90,35,85,50);
pop();

//cloud
push();
	fill(255,189,228);
	translate(520,cloudY);
	ellipse(0,0,130,150);
	ellipse(40,0,120,100);
	ellipse(95,15,85,50);
	ellipse(-50,10,120,85);
	ellipse(-90,35,85,50);
pop();
	
	
}