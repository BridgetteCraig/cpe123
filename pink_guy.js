var scaleImage = 1.25


function setup() {
	createCanvas(655, 420); //scale 1.25, 500, 332, 625,
}


function draw() {
	background('white');
	noStroke();

	angleMode(DEGREES)

push();
	scale(scaleImage)

	//-----------------------------blue glove
	
	fill('#4677B1') //blue glove
	stroke('#4677B1')

	push(); //left glove
		translate(160.75, 138.575)
		rotate(37.26)
		rect(0, 0, 21.917, 30.625, 20)
	pop();

	fill('#ffffff') //white
	stroke('#ffffff')
	push(); //white space in left glove
		translate(154.72, 156.98)
		rect(0, 0, 12.731, 0.375, 0.5)
	pop();

//push();
	//translate(-180, -180) //large
	//scale(2)
	//translate(90, 90) //small
	//scale(.5)		

	fill('#4677B1') //blue glove
	stroke('#4677B1')

	quad(179.37, 165.26, 200.93, 170.83, 184, 183.27, 180.76, 180.27) //bottom of glove

	push(); //top of glove
		translate(195.34, 156.95)
		rotate(68.86)
		ellipse(0, 0, 29.85, 23.45)
	pop();


	fill('#ffffff') //white
	stroke('#ffffff')
	push(); //white space in right glove
		translate(180.91, 155)
		rotate(18.7)
		rect(0, 0, 10.375, 8, 0.5)
	pop();

	fill('#4677B1') //blue glove
	stroke('#4677B1')
	push(); //thumb of glove
		translate(181.9, 154.58)
		rotate(18.7)
		rect(0, 0, 8, 11.375, 3)
	pop();

	push(); //middle of glove
		translate(185, 163.21)
		rotate(30)
		rect(0, 0, 5.375, 8.209)
	pop();


//pop();



	//------------------------------ legs

	fill('#F27179'); //pink
	stroke('#F27179')
	
	push(); //bottom left of left leg
		translate(70.97, 279.16)
		rotate(25.56)
		rect(0, 0, 8.505, 27.625, 20)
	pop();

	push(); //top left of left leg
		translate(91.18, 265.7)
		rotate(54.15)
		rect(0, 0, 14.6, 30.8, 20)
	pop();

	push(); //bottom right of left leg
		translate(94.167, 275.381)
		rotate(56.13)
		rect(0, 0, 10.614, 37.843, 20)
	pop();
	
	push(); //top right of left leg
		translate(95.91, 269.27)
		rotate(25.56)
		rect(0, 0, 8.505, 17.349, 20)
	pop();


	ellipse(143.58, 283.12, 12.58, 30.667) //bottom left of right leg

	push(); //top right of right leg
		translate(149.16, 245)
		rotate(45)
		rect(0, 0, 16.33, 23.693)
	pop();

	push(); //bottom right of right leg
		translate(151.87, 279.39)
		rotate(21.11)
		ellipse(0, 0, 11, 47.829)
	pop();

	ellipse(149.33, 270.42, 10.667, 10.7) //middle of right leg


	//------------------------------ shorts

	fill('#38230F') //brown for shorts
	stroke('#38230F')

	push(); //right shorts
		translate(109.98, 208.32)
		rotate(41.25)
		rect(0, 0, 55.796, 34.689, 1)
	pop();

	push(); //bottom left shorts
		translate(78.07, 245.28)
		rotate(2.1)
		rect(0, 0, 33.936, 29.847, 1)
	pop();

	//top left shorts
	quad(82.73-1.5, 212.84, 115-1, 214, 110, 250, 78.25, 251.65)

	stroke('#BF5C46')
	strokeWeight(2)
	line(90.3, 213.667, 87.667, 275.667)

	//----------------------------- pink Guy

	fill('#F27179'); //pink
	stroke('#F27179')

	ellipse(142.25, 159.8, 40.94, 40.94) //shoulder

	push(); //bicep
		translate(130.99, 175.97)
		rotate(330)
		rect(0, 0, 30.69, 60.55, 20)
	pop();

	quad(167, 191, 180, 177, 188, 180.27, 181.5, 211.83) //forearm

	ellipse(126.81, 182.15, 22.3, 22.3) //top ab

	push(); //stomach
		translate(85.98, 173.86)
		rotate(6.27)
		rect(0, 0, 40, 40)
	pop();
	
	ellipse(116.47, 194.42, 22.3, 22.3) //bottom ab

	push(); //back
		translate(118.5, 156.98)
		rotate(42.71)
		ellipse(0, 0, 44.1, 83.73)
	pop();

	push(); //neck
		translate(152.55, 108.5)
		rotate(59)
		rect(0, 0, 25.128, 41.852)
	pop();
	
	push(); //chin
		translate(158.43, 122.85)
		rotate(40.27)
		rect(0, 0, 14.243, 14.411, 5)
	pop();

	triangle(172.17, 124, 173, 136.17, 165.5, 134.76) //nose

	ellipse(171.11, 120.45, 13.902, 20.902) //forehead

	ellipse(163.55, 122.19, 21.307, 21.307) //face


//--------------------------------hair

	fill('#3C210E') //hair brown
	noStroke()
	push()
		translate(166.72, 118.8)
		rotate(340)
		arc(0, 0, 24.071, 28.091, 230, 54)
	pop();

	push(); //bottom hair
		translate(157.77, 111.99)
		rotate(68)
		ellipse(0, 0, 14.096, 20.599)
	pop();

	ellipse(162, 109, 20, 10.2) //crown hair

	triangle(167.25, 109.89+5, 156.75, 114.17+3, 161.55, 117.41+3)


	//----------------------------- shoes
	
	stroke('#38230F') //brown for shoes

	rect(55.75, 305, 31, 11, 20) //left shoe
	quad(60.49, 301, 75.03, 302.58, 69, 308, 56.75, 309) //left ankle

	rect(137.562, 299.375-2, 31, 11-2, 20) //right shoe
	quad(137.56, 294.19-2, 153.06, 294.5-2, 153.44, 301.31-2, 138.1, 304.79-2) //right ankle



pop();

}	