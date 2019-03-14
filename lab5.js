var max_theta;

function setup()
{
   createCanvas(400, 400);
   background(0);
   fill(255);
   noStroke();

   max_theta = 0;
}

function draw()
{
   var x, y, theta, radius, green, blue, width;

   green = 240;
   blue = 0;
   radius = 150;
   width = 10;

   for (theta = 0; theta < max_theta; theta += 2*PI/300)
   {
      x = 200 + radius * cos((2/5)*theta) * cos(theta);
      y = 200 + radius * cos((2/5)*theta) * sin(theta);

      fill(0, green, blue);
      ellipse(x, y, width);

      green -= .05;
      blue += .05;

      var curveDir = radius * cos((2/5)*theta) * cos(theta);

      if(curveDir > 0){
          width += .05;
      }

      if(curveDir < 0){
          width -= .05;
      }
   }

   max_theta += 2*PI/300;
}
