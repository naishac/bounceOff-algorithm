var fixedRect, movingRect;
var apple, banana;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  apple = createSprite(400,300,50,100);
  apple.shapeColor = "green";
  banana = createSprite(200,300,50,100);
  banana.shapeColor = "green";


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  apple.velocityX = -4;
  banana.velocityX = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect, fixedRect);
  bounceOff(apple,banana);
  drawSprites();
}

