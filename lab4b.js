var xLot = 80;
var yLot = 100;
var dx;
var dy;

function setup(){
    createCanvas(400, 400);
    dx = width/5;
    dy = height/4;
    noLoop();
}

function draw(){

    background(255);

    drawHouse(xLot, yLot);

    for(var i=0; i<4; i++){
        drawHouse(xLot, yLot);
        drawHouse(xLot, yLot+dy);
        drawHouse(xLot, yLot+dy*2);
        xLot += dx;
    }

}

function drawHouse(xHouse, yHouse){

    push();

        translate(xHouse, yHouse);

        var houseColor = color(random(100, 220), random(100, 220), random(100, 220));
        var roofColor = color(random(50, 120), random(50, 120), random(50, 120));

        noStroke();

        // main house rectangle
        fill(houseColor);
        rect(-14, -9, 28, 40);

        // roof
        fill(roofColor);
        quad(-12, -24, 14, -24, 17, -9, -17, -9);

        //chimney
        fill(houseColor);
        rect(-9, -31, 4, 7);

        // door frame
        fill(250);
        rect(2, 13, 8, 18);

        // door
        fill(roofColor);
        rect(3, 14, 6, 17);

        // windows
        drawWindow(-6, 2);
        drawWindow(6, 2);
        drawWindow(-6, 18);

        drawTree(-28, 31);

    pop();

}

function drawWindow(xWin, yWin){

    push();

        translate(xWin, yWin);

        // window frame
        fill(250);
        noStroke();
        rect(-3.5, -5, 7, 10);

        // little squares
        fill(50);
        rect(-2.5, -4, 2, 2);
        rect(-2.5, -1, 2, 2);
        rect(-2.5, 2, 2, 2);
        rect(0.5, -4, 2, 2);
        rect(0.5, -1, 2, 2);
        rect(0.5, 2, 2, 2);

    pop();

}

function drawTree(xTree, yTree){

    push();

        translate(xTree, yTree);

        // trunk
        fill(137, 102, 85);
        rect(-1, -15, 2, 15);

        // leaves
        noStroke();
        fill(117, 143, 73);
        push();
            translate(0, -18);
            scale(random(0.75, 1.5));
            ellipse(0, 0, 11, 17);
        pop();

    pop();

}
