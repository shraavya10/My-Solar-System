var sun;
var mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;
var canvas;
function setup() {
 canvas= createCanvas(800,400);
  
  sun = createSprite(380, 230, 50, 50);
  sun.shapeColor="yellow";  
  
  mercury = createSprite(400, 100, 50, 50);
  mercury.shapeColor="orange";

  venus = createSprite(300, 130, 50, 50);
  venus.shapeColor="red";

  earth = createSprite(260, 200, 50, 50);
   earth.shapeColor="green";

  mars = createSprite(260, 280, 50, 50);
 mars.shapeColor="brown";

  jupiter = createSprite(300, 360, 50, 50);
  jupiter.shapeColor="grey";

  saturn = createSprite(430, 360, 50, 50);
  saturn.shapeColor="white";

  
  uranus = createSprite(500, 270, 50, 50);
  uranus.shapeColor="lightblue";

  neptune = createSprite(500, 150, 50, 50);
  neptune.shapeColor="blue";

 
  mercury.velocityX=2;
  mercury.velocityY=-3;

  venus.velocityX=3;
  venus.velocityY=-3;

  earth.velocityX=-2.5;
  earth.velocityY=2.5;

  mars.velocityX=2;
  mars.velocityY=-2.5;

  jupiter.velocityX=-1.5;
  jupiter.velocityY=1;

  saturn.velocityX=1;
  saturn.velocityY=-1.5;

  uranus.velocityX=2;
  uranus.velocityY=1;

  neptune.velocityX=2;
  neptune.velocityY=-1;
 
}

function draw() {
  background(0,0,80);
 // sun.fill(color(255,205,0));
  //bounceOff(mercury,venus,earth,mars,jupiter,saturn,uranus,neptune);
  bounceOff(mercury);
  bounceOff(venus);
  bounceOff(earth);
  bounceOff(mars);
  bounceOff(jupiter);
  bounceOff(saturn);
  bounceOff(uranus);
  bounceOff(neptune);


 
 collide(mercury);
 collide(uranus);
 collide(neptune);
 collide(jupiter);
 collide(earth);
 collide(mars);
 collide(saturn)
collide(venus);

  drawSprites();
}


function bounceOff(object){
  if ((object.x > 800) || (object.x < 0)) {
    object.velocityX = object.velocityX *(-1);
  }
  if (object.y > 400 || object.y < 0) {
    // We're reducing velocity ever so slightly 
    // when it hits the b <ottom of the window
    object.velocityY= object.velocityY * (-1); 
    
}
}



function collide(object){
if(object.isTouching(sun)){
  object.destroy();
}

}






