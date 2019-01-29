var scaleHead = .65;
var xHead = 225;
var yHead = 174;
var rotHead = 0;

function setup() {
    createCanvas(400, 500);
    background(255);
}

function draw() {
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
        rotate(-0.49427724);
        rect(0, 0, 18, 29);
    pop();

    push();
        translate(279, 296);
        rotate(-6.2430427);
        rect(0, 0, 32, 36);
    pop();

    push();
        translate(271, 338);
        rotate(-6.13814845);
        rect(0, 0, 39, 57);
    pop();

    // shirt
    fill(255);
    triangle(221, 236, 232, 247, 236, 239);
    ellipse(224, 207, 37, 36);

    push();
        translate(234, 220);
        rotate(-6.13762485);
        ellipse(0, 0, 16, 49);
    pop();

    push();
        translate(220, 221);
        rotate(-0.523599);
        ellipse(0, 0, 17, 49);
    pop();

    push();
        translate(216, 215);
        rotate(-0.523599);
        ellipse(0, 0, 17, 33);
    pop();

    // coat buttons
    fill(52, 13, 23);
    ellipse(251, 382, 7, 7);
    ellipse(253, 425, 7, 7);

    // text
    fill(245, 53, 111);
    textSize(60);
    textAlign(CENTER);
    textStyle(BOLD);
    text('OVERCOAT', 200, 100);

    // draw head using function
    drawHead(xHead, yHead, rotHead, scaleHead);
}

function drawHead(x, y, rot, sc) {
    push();
        translate(x, y);
        rotate(rot);
        scale(sc);

        fill(245, 53, 111);
        noStroke();
        ellipse(0, 0, 49, 49);

        rect(-20, 1, 30, 29);

        // ear
        push();
            translate(-20, 12);
            rotate(6);
            ellipse(0, 0, 10, 18);
        pop();

        // jaw
        push();
            translate(-1, 31);
            rotate(-6);
            ellipse(0, 0, 38, 23);
        pop();

        // font of face
        push();
            translate(5, 0);
            rotate(-6.056);
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
            rotate(-5.54648);
            ellipse(0, 0, 34, 22);
        pop();

        push();
            translate(-6, -13);
            rotate(-0.3768);
            ellipse(0, 0, 35, 22);
        pop();

        push();
            translate(-19, -3);
            rotate(-6.16101);
            ellipse(0, 0, 11, 23);
        pop();

        push();
            translate(-23, 6);
            rotate(-0.959931);
            rect(0, 0, 13, 10);
        pop();

        // hair part
        fill(245, 53, 111);
        triangle(-6, 3, -11, -12, -3, 3);

        // ear 2
        push();
            translate(-22, 9);
            rotate(-0.15708);
            ellipse(0, 0, 7, 11);
        pop();
}
