var scaleCoat = 0.8;
var xCoat = 0;
var yCoat = 45;

// pink guy before fall
var xPink = 400;
var yPink = 24;
var scPink = 1.25;
var rotPink = 0;

// pink guy after fall
var xPinkFall = 200;
var yPinkFall = 545;
var scPinkFall = 1.25;
var rotPinkFall;

var xrg = 0;
var yrg = 0;
var xpg = 400
var ypg = 0
var scaleImage = 1.25
var headx = 680
var heady = -20

function setup() {
    createCanvas(1055, 420);

    angleMode(DEGREES);
    rotPink = 0;
}

function draw() {

    background(255);

    drawOvercoat(xCoat, yCoat, scaleCoat);

    // pink guy before fall
    drawPinkGuy(xPink, yPink, rotPink, scPink);

    if (xPink>200 && xPink<=400 && xrg < -100){
        xPink += 1;
    }

    if (yPink<505 && yPink>=24 && xrg<-100){
        yPink += 5;
    }

    if (rotPink > -95 && rotPink <= 0 && xrg < -100){
        rotPink -= 2;
    }
//-------------------------------------------------------------------RIGHT GUY
push();
    scale(scaleImage)
    translate(xpg-40, ypg)
    translate(xrg, yrg)

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

    pop();

    if (xrg>=-100 && xrg<=0)
    xrg -= 2

//---------------------------------------------------------HARIS CODE
push();
    translate(headx-40, heady)
    rotate(20)
    scale(1.5)


    noStroke()

    //face2

    fill(165,42,42)
    push()
    scale(0.4)
    scale(-1,1)
    translate(-400,0)

    ellipse(236,295,30,20)

    ellipse(288,295,86,85)
    ellipse(310,250,75,60)


    // neck2

    beginShape();
    curveVertex(328,325)
    curveVertex(328,325)
    curveVertex(325,294)
    curveVertex(350,292)
    curveVertex(350,317)
    curveVertex(350,317)
    endShape()


    fill(1)

    beginShape()
    curveVertex(327,223)
    curveVertex(334,225)
    curveVertex(350,240)
    curveVertex(358,250)
    curveVertex(357,275)
    curveVertex(357,285)
    curveVertex(350,293)
    curveVertex(333,315)
    curveVertex(320,345)
    curveVertex(238,400)
    curveVertex(225,400)
    curveVertex(220,375)
    curveVertex(222,359)
    curveVertex(225,350)
    curveVertex(235,338)
    curveVertex(250,328)
    curveVertex(255,325)
    curveVertex(255,322)
    curveVertex(250,318)
    curveVertex(240,313)
    curveVertex(245,305)
    curveVertex(250,305)
    curveVertex(260,305)
    curveVertex(265,306)
    curveVertex(275,310)
    curveVertex(286,309)
    curveVertex(293,300)
    curveVertex(297,275)
    curveVertex(300,245)
    curveVertex(325,230)
    curveVertex(328,225)
    curveVertex(328,225)

    endShape()

    //face2

    fill(165,42,42)

    beginShape()
    curveVertex(246,330)
    curveVertex(254,327)
    curveVertex(257,322)
    curveVertex(250,317)
    curveVertex(246,315)
    curveVertex(249,326)
    curveVertex(249,326)
    endShape()

    beginShape()
    curveVertex(250,275)
    curveVertex(253,272)
    curveVertex(253,263)
    curveVertex(250,259)
    curveVertex(245,255)
    curveVertex(248,250)
    curveVertex(250,235)
    curveVertex(260,225)
    curveVertex(275,215)
    curveVertex(283,209)
    curveVertex(300,206)
    curveVertex(313,215)
    curveVertex(325,222)
    curveVertex(327,225)
    curveVertex(325,228)
    curveVertex(285,250)
    curveVertex(285,275)
    curveVertex(248,304)
    curveVertex(240,300)
    curveVertex(230,290)
    curveVertex(232,289)
    curveVertex(234,288)
    curveVertex(232,287)
    curveVertex(230,286)
    curveVertex(250,277)
    endShape()

     // eyebrow

    fill(10)
    beginShape()
    curveVertex(245,258)
    curveVertex(245,258)
    curveVertex(244,254)
    curveVertex(250,256)
    curveVertex(260,258)
    curveVertex(268,259)
    curveVertex(270,262)
    curveVertex(267,261)
    curveVertex(260,260)
    curveVertex(252,259)
    curveVertex(252,259)
    endShape()

    pop()

pop()

if (xrg <-100.05 && headx > 235)
    headx -= 15

if (xrg <-100.05 && heady < 10)
    heady += 1


pop();

}

function drawOvercoat(x, y, sc) {
    push();

        translate(x, y);
        scale(sc);

        angleMode(DEGREES);

        // overcoat
        fill(64, 49, 123);
        noStroke();

        // coat ellipses
        ellipse(221, 214, 90, 56);
        ellipse(183, 247, 74, 59);
        ellipse(262, 253, 74, 59);
        ellipse(270, 254, 72, 56);
        ellipse(260, 224, 17, 39);
        ellipse(182, 221, 20, 31);
        ellipse(155, 258, 71, 56);
        ellipse(126, 285, 20, 29);
        ellipse(125, 316, 21, 69);
        ellipse(127, 360, 18, 24);
        ellipse(139, 388, 18, 36);
        ellipse(143, 401, 18, 30);
        ellipse(145, 458, 14, 132);
        ellipse(293, 286, 32, 36);
        ellipse(295, 292, 32, 34);
        ellipse(291, 337, 39, 39);
        ellipse(285, 406, 39, 85);
        ellipse(286, 456, 25, 153);

        // coat rectangles
        rect(298, 255, 8, 32);
        rect(118, 337, 8, 23);
        rect(119, 258, 9, 23);
        rect(129, 241, 158, 137);
        rect(145, 373, 141, 130);

        // rotated coat rectangles
        push();
            translate(121, 369);
            rotate(-28.31999976145);
            rect(0, 0, 18, 29);
        pop();

        push();
            translate(279, 296);
            rotate(-357.699998031);
            rect(0, 0, 32, 36);
        pop();

        push();
            translate(271, 338);
            rotate(-0.1071309004284);
            rect(0, 0, 39, 57);
        pop();

        // shirt
        fill(255);
        triangle(221, 236, 232, 247, 236, 239);
        ellipse(224, 207, 37, 36);

        push();
            translate(234, 220);
            rotate(-351.6600001405);
            ellipse(0, 0, 16, 49);
        pop();

        push();
            translate(220, 221);
            rotate(-30.000012857);
            ellipse(0, 0, 17, 49);
        pop();

        push();
            translate(216, 215);
            rotate(-30.000012857);
            ellipse(0, 0, 17, 33);
        pop();

        // coat buttons
        fill(52, 13, 23);
        ellipse(251, 382, 7, 7);
        ellipse(253, 425, 7, 7);

        // draw head without function
        push();

            translate(225, 174);
            rotate(0);
            scale(1);

            fill(245, 53, 111);
            noStroke();
            ellipse(0, 0, 49, 49);

            rect(-20, 1, 30, 29);

            // ear
            push();
                translate(-20, 12);
                rotate(343.775);
                ellipse(0, 0, 10, 18);
            pop();

            // jaw
            push();
                translate(-1, 31);
                rotate(-343.775);
                ellipse(0, 0, 38, 23);
            pop();

            // font of face
            push();
                translate(5, 0);
                rotate(-346.98324);
                rect(0, 0, 20, 32);
            pop();

            // hair
            fill(74, 20, 20);
            ellipse(10,-3, 31, 22);
            ellipse(-9, 0, 4, 4);
            ellipse(-16, 10, 4, 4);
            ellipse(-20, 2, 9, 14);
            rect(-18, 3, 4, 7);

            // hair rotated ellipses
            push();
                translate(10, -10);
                rotate(-317.7898952);
                ellipse(0, 0, 34, 22);
            pop();

            push();
                translate(-6, -13);
                rotate(-21.5890497);
                ellipse(0, 0, 35, 22);
            pop();

            push();
                translate(-19, -3);
                rotate(-352.9998705);
                ellipse(0, 0, 11, 23);
            pop();

            push();
                translate(-23, 6);
                rotate(-54.999994924);
                rect(0, 0, 13, 10);
            pop();

            // hair part
            fill(245, 53, 111);
            triangle(-6, 3, -11, -12, -3, 3);

            // ear 2
            push();
                translate(-22, 9);
                rotate(-9.000021046);
                ellipse(0, 0, 7, 11);
            pop();

        pop();

    pop();

}

function drawPinkGuy(x, y, rot, sc) {

    push();

        translate(x+45, y-10);
        rotate(rot);
        scale(sc);

        noStroke();
        angleMode(DEGREES);

        //-----------------------------blue glove

        fill('#4677B1'); //blue glove
        stroke('#4677B1');

        push(); //left glove
            translate(160.75, 138.575);
            rotate(37.26);
            rect(0, 0, 21.917, 30.625, 20);
        pop();

        fill('#ffffff'); //white
        stroke('#ffffff');
        push(); //white space in left glove
            translate(154.72, 156.98);
            rect(0, 0, 12.731, 0.375, 0.5);
        pop();

        fill('#4677B1'); //blue glove
        stroke('#4677B1');

        quad(179.37, 165.26, 200.93, 170.83, 184, 183.27, 180.76, 180.27); //bottom of glove

        push(); //top of glove
            translate(195.34, 156.95);
            rotate(68.86);
            ellipse(0, 0, 29.85, 23.45);
        pop();


        fill('#ffffff'); //white
        stroke('#ffffff');
        push(); //white space in right glove
            translate(180.91, 155);
            rotate(18.7);
            rect(0, 0, 10.375, 8, 0.5);
        pop();

        fill('#4677B1'); //blue glove
        stroke('#4677B1');
        push(); //thumb of glove
            translate(181.9, 154.58);
            rotate(18.7);
            rect(0, 0, 8, 11.375, 3);
        pop();

        push(); //middle of glove
            translate(185, 163.21);
            rotate(30);
            rect(0, 0, 5.375, 8.209);
        pop();



        //------------------------------ legs

        fill('#F27179'); //pink
        stroke('#F27179');

        push(); //bottom left of left leg
            translate(70.97, 279.16);
            rotate(25.56);
            rect(0, 0, 8.505, 27.625, 20);
        pop();

        push(); //top left of left leg
            translate(91.18, 265.7);
            rotate(54.15);
            rect(0, 0, 14.6, 30.8, 20);
        pop();

        push(); //bottom right of left leg
            translate(94.167, 275.381);
            rotate(56.13);
            rect(0, 0, 10.614, 37.843, 20);
        pop();

        push(); //top right of left leg
            translate(95.91, 269.27);
            rotate(25.56);
            rect(0, 0, 8.505, 17.349, 20);
        pop();


        ellipse(143.58, 283.12, 12.58, 30.667); //bottom left of right leg

        push(); //top right of right leg
            translate(149.16, 245);
            rotate(45);
            rect(0, 0, 16.33, 23.693);
        pop();

        push(); //bottom right of right leg
            translate(151.87, 279.39);
            rotate(21.11);
            ellipse(0, 0, 11, 47.829);
        pop();

        ellipse(149.33, 270.42, 10.667, 10.7); //middle of right leg


        //------------------------------ shorts

        fill('#38230F'); //brown for shorts
        stroke('#38230F');

        push(); //right shorts
            translate(109.98, 208.32);
            rotate(41.25);
            rect(0, 0, 55.796, 34.689, 1);
        pop();

        push(); //bottom left shorts
            translate(78.07, 245.28);
            rotate(2.1);
            rect(0, 0, 33.936, 29.847, 1);
        pop();

        //top left shorts
        quad(82.73-1.5, 212.84, 115-1, 214, 110, 250, 78.25, 251.65);

        stroke('#BF5C46');
        strokeWeight(2);
        line(90.3, 213.667, 87.667, 275.667);

        //----------------------------- pink Guy

        fill('#F27179'); //pink
        stroke('#F27179');

        ellipse(142.25, 159.8, 40.94, 40.94); //shoulder

        push(); //bicep
            translate(130.99, 175.97);
            rotate(330);
            rect(0, 0, 30.69, 60.55, 20);
        pop();

        quad(167, 191, 180, 177, 188, 180.27, 181.5, 211.83); //forearm

        ellipse(126.81, 182.15, 22.3, 22.3); //top ab

        push(); //stomach
            translate(85.98, 173.86);
            rotate(6.27);
            rect(0, 0, 40, 40);
        pop();

        ellipse(116.47, 194.42, 22.3, 22.3); //bottom ab

        push(); //back
            translate(118.5, 156.98);
            rotate(42.71);
            ellipse(0, 0, 44.1, 83.73);
        pop();

        push(); //neck
            translate(152.55, 108.5);
            rotate(59);
            rect(0, 0, 25.128, 41.852);
        pop();


        //--------------------------------hair

        fill('#3C210E'); //hair brown
        noStroke();

        //----------------------------- shoes

        stroke('#38230F'); //brown for shoes

        rect(55.75, 305, 31, 11, 20); //left shoe
        quad(60.49, 301, 75.03, 302.58, 69, 308, 56.75, 309); //left ankle

        rect(137.562, 299.375-2, 31, 11-2, 20); //right shoe
        quad(137.56, 294.19-2, 153.06, 294.5-2, 153.44, 301.31-2, 138.1, 304.79-2); //right ankle

    pop();


}
