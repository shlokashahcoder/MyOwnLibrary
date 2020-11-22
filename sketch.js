var fixedRect, movingRect;
var rect1

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1=createSprite(200,200,50,80);
  rect1.shapeColor="green"
  rect1.debug=true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  myOwnFunction(rect1,movingRect);
  myOwnFunction(movingRect,fixedRect);

  drawSprites();
}
function myOwnFunction(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    object2.shapeColor="red";
     object1.shapeColor="red";
      
  }
else {
    object2.shapeColor="green";
    object1.shapeColor="green";
  }
}
