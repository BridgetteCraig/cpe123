var cloudX;
var cloudY;
var moveCloudF;
var moveCloudS;
var spoonX=350;
var spoonY=100;

var swim = false;

// constants
const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;


function setup() {
	createCanvas(700,600);
	noStroke();

	// define gradient colors
    b1 = color(255);
    b2 = color(0);
    c1 = color(255, 222, 38);
    c2 = color(255, 111, 140);

    background(255);

	cloudX = 520;
	cloudXX = 520;
	cloudY = 425;
	moveCloudF = false;
	moveCloudS = false;
}

function draw() {

	// background gradient
    setGradient(0, 0, 700, 600, c1, c2, Y_AXIS);

	noStroke();

	if (moveCloudF)
	{
		cloudX = cloudX - 10;
	}

	if (moveCloudS)
	{
		cloudXX = cloudXX - 10;
	}
//moon
push();
	translate(550,150);
	fill(255,63,97);
	ellipse(0,0,175);
pop();
push();
	translate(520,150);
	fill(255,197,65);
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

push();
	translate(spoonX,spoonY);
    // ladel handle
    fill(100);
    noStroke();

    // bottom of handle
    push();
        fill(220);
        translate(254, 200);
        rotate(-6.02139);
        rect(0, 0, 42, 97);
    pop();

    // small part of bottom of handle
    push();
        translate(254, 200);
        rotate(-6.02139);
        rect(0, 0, 37, 97);
    pop();

    // long part of handle
    push();
        fill(220);
        translate(370, -26);
        rotate(-5.81072468);
        rect(0, 0, 42, 255);
    pop();

    // skinny long part of handle
    push();
        fill(120);
        translate(370, -26);
        rotate(-5.81072468);
        rect(0, 0, 37, 255);
    pop();

    // small handle highlight
    push();
        fill(170);
        translate(258, 192);
        rotate(-5.81072468);
        rect(0, 0, 39, 15);
    pop();


    // ladel spoon
    fill(128, 75, 0);
    noStroke();
    ellipse(182, 350, 262, 192);

    fill(150);
    ellipse(182, 370, 223, 154);

    fill(245);
    ellipse(181, 331, 284, 154);

    fill(140);
    ellipse(181, 329, 279, 151);

    fill(245);
    ellipse(175, 326, 249, 146);

    fill(128, 75, 0);
    ellipse(182, 332, 269, 146);

    fill(44, 146, 134);
    ellipse(182, 333, 264, 143);
  pop();

//sun
	fill(255);
	ellipse(125,100,75);

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
	fill(158,206,232);
	translate(cloudXX,425);
	ellipse(0,0,130,150);
	ellipse(40,0,120,100);
	ellipse(95,15,85,50);
	ellipse(-50,10,120,85);
	ellipse(-90,35,85,50);
pop();

if (swim) {
	drawSwimmer(500, 400);
}

}

function drawSwimmer(x, y) {

    translate(x, y);

    // swim cap
    fill(255);
    ellipse(16, 27, 21, 21);
    ellipse(28, 25, 2);
    push();
        translate(23, 19);
        rotate(-5.555383);
        rect(0, 0, 8, 2);
    pop();

    // body
    fill(216, 188, 165);

    // non-rotated
    ellipse(43, 28, 17, 21);
    ellipse(46, 17, 12, 15);
    ellipse(49, 14, 12, 15);
    ellipse(49, 9, 12, 15);
    ellipse(41, 8, 16, 7);
    ellipse(43, 4, 20, 8);
    ellipse(17, 5, 7, 7);
    ellipse(13, 11, 6, 6);
    ellipse(28, 5, 19, 6);
    ellipse(50, 44, 46, 20);

    // rotated face ellipses
    push();
        translate(20, 31);
        rotate(-1.0222393);
        ellipse(0, 0, 21, 19);
    pop();

    push();
        translate(22, 32);
        rotate(-1.0222393);
        ellipse(0, 0, 20, 19);
    pop();

    // rotated body shapes
    push();
        translate(27, 27);
        rotate(-5.65487);
        rect(0, 0, 15, 9);
    pop();

    push();
        translate(61, 38);
        rotate(-5.8049651);
        ellipse(0, 0, 43, 16);
    pop();

    push();
        translate(50, 17);
        rotate(-5.94616223);
        rect(0, 0, 4, 10);
    pop();

    push();
        translate(17, 2);
        rotate(-0.0872665);
        rect(0, 0, 25, 2);
    pop();

    push();
        translate(20, 5);
        rotate(-6.11633183);
        rect(0, 0, 22, 2);
    pop();

    push();
        translate(11, 20);
        rotate(-6.0999257);
        ellipse(0, 0, 3, 5);
    pop();

    push();
        translate(2, 20);
        rotate(-5.5117498);
        ellipse(0, 0, 3, 5);
    pop();

    push();
        translate(0, 21);
        rotate(-0.9);
        rect(0, 0, 22, 2);
    pop();

    push();
        translate(0, 21);
        rotate(-0.72239178);
        rect(0, 0, 21, 2);
    pop();

    push();
        translate(9, 21);
        rotate(-1.3746213);
        rect(0, 0, 15, 3);
    pop();

    push();
        translate(9, 22);
        rotate(-1.232202);
        rect(0, 0, 15, 2);
    pop();

    push();
        translate(0, 21);
        rotate(-0.84456483);
        rect(0, 0, 17, 2);
    pop();

    // goggles
    fill(0, 50, 200);

    // bridge of goggles
    push();
        translate(19, 31);
        rotate(-0.8761553);
        ellipse(0, 0, 5, 5);
    pop();

    // cover goggles bridge
    push();
        fill(216, 188, 165);
        translate(20, 32);
        rotate(-0.8761553);
        ellipse(0, 0, 5, 5);
    pop();

    // change back to blue fill for goggles
    fill(0, 50, 200);

    push();
        translate(21, 26);
        rotate(-0.8761553);
        ellipse(0, 0, 8, 6);
    pop();

    push();
        translate(14, 34);
        rotate(-0.8761553);
        ellipse(0, 0, 8, 6);
    pop();

    // wave
    fill(44, 146, 134);

    push();
        translate(6, 37);
        rotate(-6.19731511);
        rect(0, 0, 83, 15);
    pop();

}

function mouseClicked()
{
	if(mouseX>400 && mouseX<660 && mouseY<245 && mouseY>70){
	moveCloudF = true;
	}

	if(mouseX>75 && mouseX<155 && mouseY< 145 && mouseY>65){
	moveCloudS = true;
	}

	if (mouseX>400 && mouseX<660 && mouseY< 500 && mouseY>350) {
    swim = true;
  	}
}

function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();

    if (axis === Y_AXIS) {
        // Top to bottom gradient
        for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
        }

    } else if (axis === X_AXIS) {
        // Left to right gradient
        for (let i = x; i <= x + w; i++) {
        let inter = map(i, x, x + w, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
    }
  }
}
