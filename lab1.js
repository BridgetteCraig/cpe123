var rotGrass;

function setup() {
	createCanvas(400, 400);
	rotGrass = (PI/4);
}


function draw() {
	background(45,163,198);

	noStroke();

	// grass rectangle
	push();
		rotate(PI/12);
		fill(97,175,58);
		noStroke();
		rect(0,190,550,200);
	pop();

	// sky horizon
	push();
		rotate(PI/12);
		fill(97,196,226);
		noStroke();
		rect(0,40,550,150);
	pop();

	// ears
	push();
		fill(13, 35, 97);
		translate(60, 166);
		rotate(-5.75959);
		ellipse(0, 0, 135, 62);
	pop();

	push();
		fill(13, 35, 97);
		translate(343, 196);
		rotate(-0.30787608);
		ellipse(0, 0, 125, 50);
	pop();

	//face
	push();
		fill(13, 35, 97);
		translate(235, 195);
		rotate(-6.01143754);
		rect(0, 0, 47, 115);
	pop();

	push();
		fill(13, 35, 97);
		translate(228, 241);
		rotate(-0.25324727);
		rect(0, 0, 47, 112);
	pop();

	push();
		fill(13, 35, 97);
		translate(123, 204);
		rotate(-0.25324727);
		rect(0, 0, 61, 112);
	pop();

	push();
		fill(13, 35, 97);
		translate(135, 243);
		rotate(-6.04966025);
		rect(0, 0, 47, 112);
	pop();


	fill(13, 35, 97);
	ellipse(200, 211, 167, 144);

	push();
		fill(255);
		translate(178, 205);
		rotate(-6.04966025);
		rect(0, 0, 47, 112);
	pop();

	push();
		fill(255);
		translate(178, 197);
		rotate(-0.25324727);
		rect(0, 0, 47, 112);
	pop();

	fill(255);
	ellipse(198, 189, 92, 99);

	// eyes
	ellipse(120, 207, 22, 21);
	ellipse(277, 216, 13, 21);

	fill(20);
	ellipse(118, 207, 15, 21);
	ellipse(278, 216, 10, 19);

	// cow nose
	fill("#f66a59");
	noStroke();
	ellipse(210, 385, 240, 200);

	// snout
	fill(150,150,150);
	noStroke();
	triangle(50,50,50,50,50,50);

	// nostrils
	fill(20);
	ellipse(169, 341, 33, 53);
	ellipse(296, 344, 15, 46);


}
