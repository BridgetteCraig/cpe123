var rotFish;

function setup(){
    createCanvas(400, 400);
    noLoop();
}

function draw(){
    background(210, 234, 242);

    for (var i=0; i < 4; i++){
        drawFish(random(20, 200), random(20, 200), random(0, 2*PI), random(0.25, 0.8));
    }

    for (var i=0; i < 4; i++){
        drawFish(random(200, 380), random(20, 200), random(0, 2*PI), random(0.25, 0.8));
    }

    for (var i=0; i < 4; i++){
        drawFish(random(20, 200), random(200, 380), random(0, 2*PI), random(0.25, 0.8));
    }

    for (var i=0; i < 4; i++){
        drawFish(random(200, 380), random(200, 380), random(0, 2*PI), random(0.25, 0.8));
    }

}

function drawFish(xFish, yFish, rot, sc){

    push();

        translate(xFish, yFish);
        rotate(rot);
        scale(sc);

        fill(random(50, 250), random(50, 250), random(50, 250));
        noStroke();

        // fish body
        ellipse(28, -0.5, 140, 80);

        // top fins
        triangle(-8, -98, 30, -75, -8, -53);
        triangle(30, -75, 43, -9, -8, -53);

        // bottom fins
        triangle(30, 32, 30, 76, -8, 55);
        triangle(-8, 99, -8, 55, 30, 76);

        // tail
        triangle(-98, -56, -50, -39, -78, -9);
        triangle(-35, 3, -78, -9, -50, -39);
        triangle(-35, -3, -50, 39, -78, 9);
        triangle(-99, 56, -50, 39, -78, 9);

        // eye
        fill(0);
        ellipse(70, -8, 10, 10);

    pop();

}
