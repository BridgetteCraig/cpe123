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


//--------------------------------- right guy legs

	fill('#38230F') //brown
	stroke('#38230F')

	push(); //left thigh
		translate(369.02, 238.81)
		rotate(47.17)
		rect(0, 0, 26.781, 27.687, 5)
	pop();

	push(); //left side of calf
		translate(358.31, 277.45)
		rotate(360-12.62)
		ellipse(0, 0, 13.936, 48.21)
	pop();

	ellipse(367.54, 284.74, 8.26, 32.511) //right side of calf

	push(); //right leg
		translate(430.98, 282.23)
		rotate(360-339.33)
		ellipse(0, 0, 47.078, 19.334)
	pop();

//------------------------------ shorts


	fill('#4677AA') //blue shorts
	stroke('#4677AA')

	push(); //left leg
		translate(408.02, 208.07)
		rotate(54.65)
		rect(0, 0, 35.796, 54.065)
	pop();

	rect(406.17, 243.17, 32.5, 29.5) //right leg

	push(); //butt
		translate(426.55, 239.67)
		rotate(344.17)
		ellipse(0, 0, 22.893, 45.167)
	pop();

	stroke('#ffffff') //white
	strokeWeight(2)
	line(424, 221.17, 429.67, 272.67)

//------------------------------------ body

	fill('#38230F') //brown
	stroke('#38230F')

	quad(301.67, 138.33, 326, 136.81, 319.01, 155.47, 302.67, 152.33) //left forearm end
	ellipse(333.58, 146.92, 49.5, 21.167) //left forearm

	push() //left bicep
		translate(344.18, 136.59)
		rotate(-1.69)
		rect(0, 0, 39.833, 20.508, 8)
	pop();

	ellipse(396.42, 120.6, 31.5, 28.132) //head

	quad(384.67, 122.5, 404.5, 116, 439.83, 132.33, 379, 145.5) //neck

	ellipse(443.77, 149.58, 34.456, 33.167) //right shoulder

	quad(376.67, 153.83, 457.33, 144.33, 428.67, 221.17, 390.5, 221.17) //stomach

	quad(382.5, 142.83, 434.33, 130.75, 450.67, 146.92, 385.67, 166) //chest

	quad(433.5, 183.5, 458.64, 175.17, 463.17, 196.83, 433.5, 196.83) //right forearm

	push(); //right bicep
		translate(458.64, 161.53)
		rotate(327.04)
		ellipse(0, 0, 24.265, 66.194)
	pop();


	push(); //right elbow
		translate(466.46, 187.5)
		rotate(332.35)
		ellipse(0, 0, 24.719, 17.177)
	pop();

	fill('#E24225') //red
	stroke('#E24225')

//----------------------------------- right glove

	push(); //knuckles
		translate(409.18, 189.81)
		rotate(336.38)
		ellipse(0, 0, 17.168, 22.617)
	pop();

	push(); //hand
		translate(409, 185.38)
		rotate(350.93)
		rect(0, 0, 22.503, 15.554)
	pop();

	quad(422.63, 180.75, 440.63, 180, 441.38, 196.83, 432.36, 197.38) //wrist

	rect(415.38, 174.75, 13.5, 5.375, 5) //thumb

	ellipse(427.47, 180.56, 11.062, 9.625) //arc

//----------------------------------- left glove
//push();
	//translate(-300,-140)//large
	//scale(2.0)
	//translate(148,69) //small
	//scale(0.5)

		ellipse(284.17, 150.46, 30.5, 26.25) // left knuckles
		rect(280.75, 137.33, 26.427, 15.833) // hand

		push(); //thumb
			translate(298.65, 154.89)
			rotate(341.56)
			ellipse(0, 0, 16.76, 6.61)
		pop();

		fill('#ffffff') //white
		stroke('#ffffff')

		rect(288.667, 153.233, 5, 0.1, 0.2) //indent

//pop();

//----------------------------------- left shoe

	fill('#E24225') //red
	stroke('#E24225')

	rect(358.78, 296.93, 11.39, 14.575) //left ankle

	rect(340.67, 303, 22.74, 8.5, 5) //left foot

	rect(439.83, 300, 18.17, 8.3, 5) //right foot

	push(); //right ankle
		translate(451.4, 284)
		rotate(360-354.51)
		rect(0, 0, 9.13, 19.47)
	pop();

//--------------------------------- un boxer

	stroke('#66ADDB') //blue
	strokeWeight(3)
	noFill()

	rect(21, 16.5, 12, 26.167, 20) //u

	stroke('#ffffff')
	fill('#ffffff')

	rect(12, 10.5, 21.667, 13)

	stroke('#66ADDB') //blue
	strokeWeight(3)
	noFill()

	line(40, 42.33, 40, 26.15) //n
	line(40, 26.15, 51.67, 42.33)
	line(51.67, 42.33, 51.67, 26.15)

	strokeWeight(6.5)

	rect(40, 52.17, 18, 12.5, 1, 20, 20, 0) //b
	rect(40, 65.33, 18, 12.5, 0, 20, 20, 1)

	ellipse(79.5+2, 66, 26.667, 26.667) //o

	line(103.1+1, 53.08, 124.1+1, 77.75,) //x
	line(121.3+1, 53.08, 102.3+1, 77.75)

	line(137, 53.5, 137, 77.83) //e
	line(137, 53.5, 150.67, 53.5)
	line(137, 65.92, 145.67, 65.92)
	line(137, 77.88, 150.67, 77.88)

	rect(162+1, 33.5, 20, 46.167, 10) //u

	stroke('#ffffff')
	fill('#ffffff')

	rect(157, 28.5, 40, 20)

	stroke('#66ADDB') //blue
	strokeWeight(6.5)
	noFill()

	line(202-6, 53.5+1, 202-6, 77.83+1) //r
	rect(202-6, 53.5+1, 18, 12.5, 0, 20, 20, 0)
	line(202+3, 53.5+13.5, 202+12, 77.83+1)

	//------------------------------ un champion

	stroke('#66ADDB') //blue
	strokeWeight(3)
	noFill()

	rect(270, 16.5, 12, 26.167, 20) //u

	stroke('#ffffff')
	fill('#ffffff')

	rect(270, 10.5, 21.667, 13)

	stroke('#66ADDB') //blue
	strokeWeight(3)
	noFill()

	line(289, 42.33, 289, 26.15) //n
	line(40+249, 26.15, 51.67+249, 42.33)
	line(51.67+249, 42.33, 51.67+249, 26.15)

	strokeWeight(6.5)

	arc(283, 66, 26.667, 26.667, 50, 310) //c

	line(303, 53.08, 303, 77.75) //h
	line(303, 65.42, 318, 65.42)
	line(319, 53.08, 319, 77.75)

	line(331, 77.75, 339, 53.08) //a
	line(345, 53.08, 353, 77.75)
	line(340, 53.08, 342, 53.08)
	line(335, 69, 349, 69)

	line(364, 53.08, 364, 77.75) //m
	line(364, 53.08, 375, 69)
	line(375, 69, 386, 53.08)
	line(386, 53.08, 386, 77.75)

	line(399, 53.08, 399, 77.75) //p
	rect(399, 53.08, 15, 12, 1, 10, 10, 0)

	line(427-1, 53.08, 427-1, 77.75) //i

	ellipse(453-3, 66, 26.667, 26.667) //o

	line(479.3-5, 53.08, 479.3-5, 77.75) //n
	line(479.3-5, 53.08, 497-5, 77.75)
	line(497-5, 77.75, 497-5, 53.08)



pop();

}	