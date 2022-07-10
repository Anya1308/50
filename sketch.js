var player, playerAnimation
var background, backgroundImg

var barrier, barrierImg
var movingTrain, movingTrainImg
var stationaryTrain, stationaryTrainImg

var coins, coinsImg
var power, powerImg
var restart, restartImg


function preload(){
  backgroundImg = loadImage("assets/tracks.jpg")
  playerAnimation = loadAnimation("assets/Jake1.png","assets/Jake2.png","assets/jake3.png","assets/jake4.png","assets/jake5.png")
  barrierImg = loadImage("assets/barriers.jpg")
  movingTrainImg = loadImage("assets/train.png")
  stationaryTrainImg = loadImage("assets/train.png")
  coinsImg = loadImage("assets/coin.png")
  powerImg = loadImage("assets/power.png")
  restartImg = loadImage("assets/restart.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight)

  player = createSprite(windowWidth/2, windowHeight-100,30,30)
  player.addAnimation("playerAnimation",playerAnimation)
  player.scale = 1.5

  

}

function draw() {
  background(backgroundImg);
  
  spawnBarriers()
  drawSprites()
}

function spawnBarriers()  {
  if (frameCount%60 === 0)  {
    barrier = createSprite(windowWidth/3 - 20, windowHeight/4, 50, 50)
    barrier.addImage(barrierImg)
    barrier.scale = 0.5
  } 
}

