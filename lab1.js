var rotGrass;

function setup() {
	createCanvas(400, 400);
	rotGrass = (PI/4);
}


function draw() {
	background(45,163,198);

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

	// cow nose
	fill("#f66a59");
	noStroke();
	ellipse(210, 385, 240, 200);

	// snout
	fill(150,150,150);
	noStroke();
	triangle(50,50,50,50,50,50);


}
