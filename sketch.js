var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 100, 30);
  
  thickness=random(22,83);
  wall=createSprite(1000,200,thickness,200);
  wall.shapeColor= color(80,80,80)
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
  
  console.log(wall.width)
}

function draw() {
  background("black"); 
if (hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage =0.5* weight* speed* speed/(thickness*thickness*thickness);

  if (damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }
  if (damage<10)
  {
    wall.shapeColor(0,255,0);
  }
}
text ("Speed of bullet:"+speed,100,50);
text ("Thickness of wall:"+thickness,100,70)

  drawSprites();
}

function hasCollided(lbullet,lwall)
{
   bulletRightEdge= lbullet.x+lbullet.width;
   wallLeftEdge= lwall.x;
   if(bulletRightEdge>=wallLeftEdge)
   {
     return true
   }
   return false;
}