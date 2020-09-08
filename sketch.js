var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityX=-5;
  fixedRect.velocityX=5;
}

function draw() {
  background("white");  

if(isTouching(movingRect,fixedRect)){
movingRect.shapeColor="black";
fixedRect.shapeColor="black";

}
else{
movingRect.shapeColor="green";
fixedRect.shapeColor="green";
}

  drawSprites();
}

