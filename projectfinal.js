//VARIABLES
//Colors
	var cyan = '#42B9E6'
	var orange = '#F1BA41'
	var pink = '#EE849B'
	var darkpink = '#e7547f'
	var purple = '#A67DB8'
	var teal = '#8ED0CF'
	var yellow = '#FFF56D'
	var darkbrown = '#5B3834'
	var beige = '#F5DDC7'
	var lightbrown = '#E9C49D'
	var backcolor = '#FEEED9'
//Screen 1
	var rot = 210
	var rotAdd = 25
	var rot2 = 210
	var rotAdd2 = 25
	var rectx = 268
	var recty = 272
	var textx = 312
	var texty = 356
//Hats
	var CowboyHatx=75;
	var CowboyHaty=85;
	var CowboyHatScale=.6;
	var baseballCapX = 190;
	var baseballCapY = 120;
	var baseballCapScale = .8;
	var fedoraX = 93;
	var fedoraY = 275;
	var fedoraScale = .58;
	var tophatX = 175;
	var tophatY = 248;
	var tophatScale = .6;
	var beretX = 93;
	var beretY = 438;
	var beretScale = .6;
	var partyhatX = -20;
	var partyhatY = 400;
	var partyhatScale = .3;
//Accessories
	var knifeX = 330;
	var knifeY = 105;
	var knifeScale = .18;
	var catX = 425;
	var catY = 95;
	var catScale = .4;
	var butterflyX = 332;
	var butterflyY = 275;
	var butterflyScale=1.5;
	var moneyX=405;
	var moneyY=252;
	var moneyScale=.8;
	var purseX=332;
	var purseY=426;
	var purseScale=.7;
	var mugX = -40;
	var mugY = 140;
	var mugScale = .8;

var i = 0;
var dogColor = [];
var dogCol1;
var dogCol2;
var dogCol3;
var dogCol4;
var numColors = 3;
var armR;

click = false
press = false

function setup() {
	createCanvas(900, 559.58);
	background(backcolor);
	noStroke();
	angleMode(DEGREES);
	frameRate(1)

	// colors for dog color array
	dogCol1 = color(233, 196, 157); // beige
	dogCol2 = color(147, 109, 73); // dark brown
	dogCol3 = color(196, 154, 108); // light brown
	dogCol4 = color(167, 169, 172); // gray

	dogColor.push(dogCol1, dogCol2, dogCol3, dogCol4);
	armR = 50;

}

//HELPER FUNCTIONS - Screen 1

//Diamonds
function diamonds(x, y, color)
{	
	noStroke();
	fill(color);
	push();
		translate(x, y);
		rect(0, 0, 18, 18, 5);
	pop();
	
}

function drawdiamonds()
{
	push();
		translate(200, 450);
		rotate(180);
		rotate(rot);
		diamonds(0, 0, purple);
	pop();

	push();
		translate(520, 77);
		rotate(180);
		rotate(rot);
		diamonds(0, 0, pink);
	pop();

	push();
		translate(715, 50)
		rotate(rot);
		diamonds(0, 0, cyan);
	pop();

	push();
		translate(800, 420);
		scale(1.4);
		rotate(rot);
		diamonds(0, 0, yellow);
	pop();

	push();
		translate(100, 105);
		scale(1.4);
		rotate(rot);
		diamonds(0, 0, cyan);
	pop();
}

//Stars
function star(x, y, color)
{
	noStroke();
	fill(color);
	push();
		translate(x, y);
		rotate(rot2);
		triangle(0.1, -13.77, 6.19, -1.7, -6, -1.17);
		triangle(1.09, -5.25, 14.47, -3.28, 4.94, 6.31);
		triangle(-1.09, -5.25, -14.47, -3.28, -4.94, 6.31);
		triangle(-6.67, 0.46, 3.09, 7.76, -9.02, 13.77);
		triangle(6.67, 0.46, -3.09, 7.76, 9.02, 13.77);
		rect(-3.98, -2.9, 8.56, 8.56);
	pop();
}

function drawstars()
{
	star(55, 320, pink);
	
	push();
		translate(330, 50);
		scale(0.8);
		star(0, 0, orange);
	pop();

	push();
		translate(505, 470);
		scale(1.2);
		star(0, 0, cyan);
	pop();

	push();
		translate(800, 170);
		scale(1.2);
		star(0, 0, purple);
	pop();
}

//HELPER FUNCTIONS - Screen 2

//Box Helper
function square(x, y)
{
	fill('#FFFFFF');
	stroke(pink);
	strokeWeight(1.5);
	rect(x, y, 62, 62, 15);
}

//Dog Helper
function dog()
{
	//Body
	push();
	scale(0.9);
	translate(75, 40);
	fill(dogColor[i]);
	noStroke();
	ellipse(699, 429-5, 127, 69.5); //Lower Torso
	beginShape(); //Upper Torso
	vertex(657.5, 353);
	vertex(742.5, 345);
	vertex(766.5, 370.5);
	vertex(762.5, 429);
	vertex(636, 429);
	vertex(638, 407);
	vertex(628.5, 389.5);
	vertex(657.5, 353.5);
	endShape();

	rect(670-10, 429-20, 100, 50) //Bottom

	push(); //Left Arm
		translate(640, 376);
		rotate(9.41);
		ellipse(0, 0, 83.5, 37.5);
	pop();
	quad(622.5, 378, 640, 398, 635.5, 402, 610, 386);


	rect(635, 420-30, 40, 95, 17) //Left Leg
	rect(723, 420-5, 40, 70, 17) //Right Leg

	fill(beige); //Stomach
	rect(663, 375, 70, 70, 35, 35, 25, 25)

	pop();

	//Head
	fill(beige);
	noStroke();
	ellipse(698, 265.5, 283, 200);

	push();
	translate(0, 5)

	//Left Side of Face
	fill(dogColor[i])
	push();
		translate(640, 260);
		rotate(-13);
		scale(0.9);
		beginShape();
		curveVertex(-25,-53); 
		curveVertex(50,-100);
		curveVertex(45,0); 
		curveVertex(25,30); 
		curveVertex(-50,55); 
		curveVertex(-75,51); 
		curveVertex(-80, 0)
		curveVertex(0, -96); 
		curveVertex(30,-84);
		endShape();
	pop();

	//Right Side of Face
	push();
		translate(756, 260);
		rotate(13);
		scale(0.9);
		beginShape();
		curveVertex(25,-53); 
		curveVertex(-50,-100);
		curveVertex(-45,0); 
		curveVertex(-25,30); 
		curveVertex(50,55); 
		curveVertex(75,51); 
		curveVertex(80, 0)
		curveVertex(0, -96); 
		curveVertex(-30,-84);
		endShape();
	pop();


	//Left Ear
	fill(darkbrown)
	push();
		translate(587, 260);
		rotate(-13);
		scale(0.75);
		beginShape();
		curveVertex(-16,-53); 
		curveVertex(56,-95);
		curveVertex(70,-84); 
		curveVertex(54,-6); 
		curveVertex(6,57); 
		curveVertex(-63,35); 
		curveVertex(-16,-53); 
		curveVertex(56,-95); 
		curveVertex(70,-84);
		endShape();
	pop();

	//Right Ear
	push();
		translate(809, 260);
		rotate(13);
		scale(0.75);
		beginShape();
		curveVertex(16,-53); 
		curveVertex(-56,-95);
		curveVertex(-70,-84); 
		curveVertex(-54,-6); 
		curveVertex(-6,57); 
		curveVertex(63, 35); 
		curveVertex(16,-53); 
		curveVertex(-56,-95); 
		curveVertex(-70,-84);
		endShape();
	pop();

	pop();

	push()
	translate(0, 4);

	//Eyes
	fill(darkbrown);
	rect(635, 254, 25, 36, 20);
	rect(732, 254, 25, 36, 20);

	//Nose
	arc(695.5, 293, 30, 30, 0, 180)

	noFill();
	stroke(darkbrown); //Eyelashes
	strokeWeight(5);
	arc(651.5, 237.5, 40, 40, 50, 90);
	arc(749.5, 237.5, 40, 40, 50, 90);

	//Mouth
	arc(695.5, 323.5, 23.5, 24.5, 0, 180)

	noStroke(); //Eyebrows
	fill(beige);
	ellipse(656.5, 223, 27.5, 21.4);
	ellipse(736.5, 223, 27.5, 21.4);
	
	pop();

}

function drawRight()
{
   push(); //Right Arm
      translate(761, 391);
      rotate(armR);
      fill(dogColor[i]);
      ellipse(0, 0, 72.5, 35.5);
   pop();
}

//HATS
function cowboyHat()
{
	
	push();
	translate(CowboyHatx,CowboyHaty);
	noStroke();
	scale(CowboyHatScale);
	fill(239,194,56);
	rect(0,10,60,30);
	arc(30,10,60,30,180,0);
	arc(30,40,100,50,0,180);
	stroke(158,218,200);
	strokeWeight(7);
	noFill();
	arc(30,40,60,20,0,180)
	pop();
}

function baseballCap()
{
	push();
	translate(baseballCapX,baseballCapY);
	scale(baseballCapScale);
	fill(158,218,200);
	noStroke();
	arc(0,0,70,70,180,0);
	stroke(129,178,164);
	strokeWeight(9);
	noFill();
	arc(0,15,75,40,4.5*180/4,7*180/3.75);
	stroke(158,218,200);
	strokeWeight(4);
	line(0,-20,0,-40);
	pop();
}

function fedora()
{
	push();
	translate(fedoraX,fedoraY);
	scale(fedoraScale);
	fill(184,119,185);
	noStroke();
	ellipse(0,0,100,50);
	ellipse(-7,-20,45,50);
	ellipse(7,-20,45,50);
	stroke(247,125,158);
	strokeWeight(10);
	noFill();
	arc(0,-15,65,25,0,180)
	pop();
	push();
}

function tophat()
{
	push();
	translate(tophatX,tophatY);
	scale(tophatScale);
	fill(0);
	noStroke();
	rect(0,0,50,60);
	rect(-15,60,80,20);
	fill(184,119,185);
	rect(0,50,50,10);
	pop();
}

function beret()
{
	push();
	translate(beretX,beretY);
	scale(beretScale);
	fill(158,218,200);
	noStroke();
	rotate(3*180/3.2);
	arc(0,0,90,50,-.1,4.1*180/4);
	stroke(158,218,200);
	strokeWeight(3);
	line(0,10,0,30);
	pop();
}

function partyhat() 
{
	noStroke();
	push();
		translate(partyhatX, partyhatY);
		scale(partyhatScale);
		fill('#FFF56D');
		triangle(697, 60.5, 760, 202, 633.5, 202); //Yellow Hat
		fill(pink);
		ellipse(697, 65, 22, 22); //Pink Poof
		fill(255);
		quad(676.5, 106, 709, 87, 715, 101, 665, 129);
		quad(648.5, 168.5, 726, 124, 732, 138, 638, 191.5);
		quad(670, 202, 742, 160.5, 747.5, 174, 699.5, 202);
	pop();
}

//ACCESSORIES
	
	function knife() {
		push();
			translate(knifeX,knifeY);
			rotate(45);
			scale(knifeScale);
			fill('#81B2A4');
			noStroke(0);
			triangle(-180,0,0,0,0,50);
			quad (-50,0,15,0,15,15,-50,15);
			fill ('#F77D9E');
			quad (5,0,180,0,180,30,5,30);
			fill(0);
			ellipse (60,15,5);
			ellipse (80,15,5);
			ellipse (100,15,5);
			ellipse (120,15,5);
			fill('#fff');
			ellipse (170,10,5);
		pop();
	 }

	function cat() {
		push();
			translate(catX,catY);
			scale(catScale);
		//Body & Ears
			fill('#5e5851');
			noStroke();
			ellipse(0,0,50);
			triangle(-30,-35,-25,0,0,-10)
			triangle(0,-10,25,0,30,-35);
			triangle(0,-25,-40,100,40,100);
		//Eyes
			fill('#ddbc75');
			stroke(0);
			ellipse(-10,-5,8);
			ellipse(10,-5,8);
			line(-10,-6,-10,-4);
			line(10,-6,10,-4);
		//Nose
			fill('#e2bcae');
			noStroke();
			triangle(-3,2,3,2,0,5);
			stroke('#fff');
			line(5,6,25,0);
			line(5,6,25,10);
			line(-5,6,-25,0);
			line(-5,6,-25,10);
		//Tail
			stroke('#5e5851');
			strokeWeight(6);
			line(20,90,40,30);
			line(40,30,35,20);
			line(35,20,40,15);
			line(40,15,42,0);
		pop();
	 }

	function butterfly() {
		push();
			translate(butterflyX,butterflyY);
			scale(butterflyScale);
			noStroke();
			fill('#B877B9')
			ellipse(-7,-5,18,10);
	     	ellipse(-4,2,15,8);
	     	ellipse(7,-5,20,10);
	      	ellipse(4,2,15,8);
	      	fill(0);
	      	ellipse(0,-2,4,17);
	      	stroke(0);
	      	strokeWeight(.5);
	      	line(0,-10,5,-15);
	      	line(0,-10,-5,-15);
     	pop();
	 }

	function money() {
	 	push();
     		translate(moneyX,moneyY);
     		scale(moneyScale);
	     	fill('#81B2A4');
	     	noStroke();
	     	rect(0,0,30,50);
	     	fill('#99D4C2');
	     	ellipse(15,25,25);
	     	fill(0);
	     	textSize(20);
	     	textAlign(CENTER);
	     	text('$',15,32);
	     	translate(40,0);
	     	rotate(180/4.5);
	     	fill('#81B2A4');
	     	noStroke();
	     	rect(0,0,30,50);
	     	fill('#99D4C2');
	     	ellipse(15,25,25);
	     	fill(0);
	     	textSize(20);
		    textAlign(CENTER);
	     	text('$',15,32);
     	pop();
	 }

	function purse() {
		push();
     		translate(purseX,purseY);
     		scale(purseScale);
     		fill('#EFC238');
     		noStroke();
     		quad(-30,0,30,0,40,40,-40,40);
     		noFill();
     		stroke('#EFC238');
     		strokeWeight(9);
     		arc(0,0,30,40,PI,0);
     		noStroke();
     		fill('#C680C7');
     		ellipse(-29,15,20);
     		fill('#B877B9');
     		ellipse(-20,8,20);
     	pop();
 	 }

	function mug() {
		noStroke();
	 	push();
			translate(mugX, mugY);
			scale(mugScale);
			noFill();
			stroke('#F79F9C'); //Dark Pink
			strokeWeight(4);
			push(); //Handle
				translate(601.5, 374);
				rotate(-315);
				ellipse(0, 0, 19.5, 34);
			pop();
			noStroke();
			fill('#F9B8B5');
			rect(555.5, 356.6, 52, 31); //Mug Body
			ellipse(581.51, 382.82, 52.54, 37.82); //Mug Base
			fill('#F79F9C') //Dark Pink
			ellipse(581, 357, 47, 30.5); //Inside of Mug
			fill('#7A5D46') //Brown
			ellipse(582, 364, 41.5, 19); //Coffee
			noFill();
			stroke('#D1D3D4') //Blue-grey
			strokeWeight(4);
			ellipse(581.5, 357, 49.2, 33.6); //Rim
	 }

//SCREEN 1 (title screen)
function screen1() //diamonds, stars, button, and text
{
background(backcolor);

//Diamonds Draw
drawdiamonds();
rot += rotAdd;

	if (rot <= 210)
	{
		rotAdd = 25;
	}
	if (rot >= 235)
	{
		rotAdd = -25;
	}

//Stars Draw
drawstars();

	rot2 += rotAdd2;

	if (rot2 <= 210) {
		rotAdd2 = 25 }

	if (rot2 >= 235) {
		rotAdd2 = -25 }

//Pink Button Draw

	noStroke();
	fill(darkpink);
	rect(258, 282, 383, 135, 35); //Shadow Button
	fill(pink);
	rect(rectx, recty, 383, 135, 35);

	if (click) {
		backredraw();
		//Move button and text
		//while(rectx > 258 && recty < 282 && textx >= 302 && texty <= 366 && rectx > 258 && recty < 282){
		rectx -= 0.65
		recty += 0.65
		textx -= 0.65
		texty += 0.65
		//}
	}

//Text Draw
	fill(pink);
	stroke(pink);
	strokeWeight(3);
	textSize(55);
	textFont('Verdana');
	push();
		translate(135, 242);
		rotate(-10);
		text('d r e s s', 0, 0);
	pop();

	text('u p', 397.5, 202)

	push();
		translate(530, 203);
		rotate(10);
		text('g a m e', 0, 0);
	pop();

	fill('#FEEED9');
	stroke('#FEEED9');
	strokeWeight(3);
	text('S T A R T !', textx, texty)


}

//SCREEN 2 (game)
function screen2() //dog, hats, accessories
{
	frameRate(60);
//Squares (left to right) Draw
	square(62, 76); //Row 1
	square(158, 76);
	square(301, 76);
	square(397, 76);

	square(62, 241); //Row 2
	square(158, 241);
	square(301, 241);
	square(397, 241);

	square(62, 406); //Row 3
	square(158, 406);
	square(301, 406);
	square(397, 406);

//Text Draw
	fill(pink);
	stroke(pink);
	strokeWeight(1);
	textSize(25);
	textFont('Verdana');
	push();
		translate(46.14, 164.12-6);
		rotate(-90);
		text('h a t s', 0, 0);
	pop();

	push();
		translate(285.14, 327.11-19);
		rotate(-90);
		text('a c c e s s o r i e s', 0, 0);
	pop();

//Dog Draw
	partyhat();

	dog();

	drawRight();

//Hat

	cowboyHat();

	baseballCap();

	fedora();

	tophat();

	beret();

//Accessories

	knife();

	cat();

	butterfly();

	money();

	purse();

	mug();

}


function draw()
{
	//screen2();
	screen1();
	if (textx <= 300) {
		backredraw();
		background(backcolor);
		screen2();
   		if (press) 
   		{
      		moveArm();
   		}
		okay = true
	}

}

function mouseClicked()
{
//VARIABLES
	var cowboybox = (mouseX<150 && mouseX>50 && mouseY<130 && mouseY>50);
	var baseballbox = (mouseX<250 && mouseX>180 && mouseY<140 && mouseY>50);
	var fedorabox = (mouseX<150 && mouseX>50 && mouseY<300 && mouseY>250);
	var tophatbox = (mouseX<250 && mouseX>150 && mouseY<300 && mouseY>250);
	var beretbox = (mouseX<150 && mouseX>50 && mouseY<450 && mouseY>400);
	var partyhatbox = (mouseX<250 && mouseX>150 && mouseY<450 && mouseY>400);
	var knifebox = (mouseX<350 && mouseX>300 && mouseY<130 && mouseY>50);
	var catbox = (mouseX<450 && mouseX>400 && mouseY<130 && mouseY>50);
	var butterflybox = (mouseX<350 && mouseX>300 && mouseY<290 && mouseY>200);
	var moneybox = (mouseX<450 && mouseX>400 && mouseY<290 && mouseY>200);
	var pursebox = (mouseX<350 && mouseX>300 && mouseY>400 && mouseY<450);
	var mugbox = (mouseX<450 && mouseX>400 && mouseY>400 && mouseY<450);
	var colchange = (mouseX>540 && mouseX<859 && mouseY>148 && mouseY<488)

	var allaccess = (knifebox || catbox || butterflybox || moneybox || pursebox || mugbox || colchange);

	var allhats = (cowboybox || baseballbox || fedorabox || tophatbox || beretbox || partyhatbox || colchange);

//Screen Change Button
	if (mouseX > 258 && mouseX < 651 && mouseY > 282 && mouseY < 427){
		click = true
	}

if (okay){
//Cowboy Hat
	if (mouseX<150 && mouseX>50 && mouseY<130 && mouseY>50)
	{	
		CowboyHatx=638;
		CowboyHaty=90;
		CowboyHatScale=2;
	}
	else if (allaccess)
	{

	}
	else{
		background(backcolor);
		CowboyHatx=75;
		CowboyHaty=85;
		CowboyHatScale=.6;
	}


//Baseball Cap
	if (mouseX<250 && mouseX>180 && mouseY<140 && mouseY>50)
	{
		baseballCapX=700;
		baseballCapY=190;
		baseballCapScale=2;
	}
	else if (allaccess)
	{

	}
	else{
		background(backcolor);
		baseballCapX = 190;
		baseballCapY = 120;
		baseballCapScale = .8;
	}

//Fedora
	if (mouseX<150 && mouseX>50 && mouseY<300 && mouseY>250)
	{
		fedoraX=700;
		fedoraY=190;
		fedoraScale=2;
	}
	else if (allaccess)
	{

	}
	else{
		background(backcolor);
		fedoraX = 93;
		fedoraY = 275;
		fedoraScale = .58;
	}

//Top Hat
	if (mouseX<250 && mouseX>150 && mouseY<300 && mouseY>250)
	{
		tophatX=660;
		tophatY=65;
		tophatScale=1.5;
	}
	else if (allaccess)
	{

	}
	else{
		background(backcolor);
		tophatX = 175;
		tophatY = 248;
		tophatScale = .6;
	}

//Beret
	if (mouseX<150 && mouseX>50 && mouseY<450 && mouseY>400)
	{
		beretX=670;
		beretY=180;
		beretScale=1.5;
	}
	else if (allaccess)
	{

	}
	else{
		background(backcolor);
		beretX = 93;
		beretY = 438;
		beretScale = .6;		
	}

//Party Hat
	if (mouseX<250 && mouseX>150 && mouseY<450 && mouseY>400 )
	{
		partyhatX = 0;
		partyhatY = 0;
		partyhatScale = 1;
	}
	else if (allaccess)
	{

	}
	else{
		background(backcolor);
		partyhatX = -20;
		partyhatY = 400;
		partyhatScale = .3;
	}

//Knife
	if (mouseX<350 && mouseX>300 && mouseY<130 && mouseY>50)
	{
		knifeX=550;
		knifeY=300;
		knifeScale=.7;
	}
	else if (allhats)
	{

	}
	else{
		background(backcolor);
		knifeX = 330;
		knifeY = 105;
		knifeScale = .18;		
	}

//Cat
	if (mouseX<450 && mouseX>400 && mouseY<130 && mouseY>50)
	{
		catX=800;
		catY=390;
		catScale=.8;
	}
	else if (allhats)
	{

	}
	else{
		background(backcolor);
		catX = 425;
		catY = 95;
		catScale = .4;
	}

//Butterfly
	if (mouseX<350 && mouseX>300 && mouseY<290 && mouseY>200)
	{
		butterflyX=600;
		butterflyY=373;
		butterflyScale=1.5;
	}
	else if (allhats)
	{

	}
	else{
		background(backcolor);
		butterflyX = 332;
		butterflyY = 275;
		butterflyScale=1.5;
	}

//Money
	if (mouseX<450 && mouseX>400 && mouseY<290 && mouseY>200)
	{
		moneyX=775;
		moneyY=370;
		moneyScale=1;
	}
	else if (allhats)
	{

	}
	else{
		background(backcolor);
		moneyX=405;
		moneyY=252;
		moneyScale=.8;
	}

//Purse
	if (mouseX<350 && mouseX>300 && mouseY>400 && mouseY<450)
	{
		purseX=610;
		purseY=385;
		purseScale=1;
	}
	else if (allhats)
	{

	}
	else{
		background(backcolor);
		purseX=332;
		purseY=426;
		purseScale=.7;
	}

//Mug
	if (mouseX<450 && mouseX>400 && mouseY>400 && mouseY<450)
	{
		mugX=0;
		mugY=0;
		mugScale=1;
	}
	else if (allhats)
	{

	}
	else{
		background(backcolor);
		mugX = -40;
		mugY = 140;
		mugScale = .8;
	}

// Dog color
	if (mouseX>540 && mouseX<859 && mouseY>148 && mouseY<488) {
		if (i < numColors){
			i++;
		}
		else {
			i = 0;
		}
	}

}


}
function mousePressed() 
   {

      if (mouseX > 700 && mouseX < 800 && mouseY > 280 && mouseY < 410)
      {
		press = true
	}
   }

   function moveArm()
   {
 
      if (armR < -45) 
      {
         armDown = false;
      } 
      if (armR > 20) 
      {
         armDown = true;
      }
      if (armDown == true) 
      {
         armR -= 3;
      } 
      else 
      {
         armR += 3;
      }
}


function backredraw()
{
	frameRate(60) //Speed Up Animation
	background(backcolor);

	rot = 210; //Stop Rotating Diamonds
	drawdiamonds();

	rot2 = 210; //Stop Rotating Stars
	drawstars();

	noStroke();
	fill(darkpink); //Redraw Shadow
	rect(258, 282, 383, 135, 35); 
	fill(pink); //Redraw Button
	rect(rectx, recty, 383, 135, 35);
}

