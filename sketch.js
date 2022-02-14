var desert , ground
var paddle , stick
var camel , player
var base
var gameover,over
var again,restart
var score = 0
var play
var gameState = play
var END=0
function preload(){
ground=loadImage("desert.jpg")
stick=loadImage("log.png")
player=loadImage("camel.jpg")
over=loadImage("over clip.png")
restart=loadImage("restart.jpg")
}

function setup() {
 createCanvas(600,600)
 var desert = createSprite(300,300,600,600)
desert.addImage(ground)
//desert.velocityX=-1
var camel = createSprite(50,350)
camel.addImage(player)
camel.scale=0.05
var base = createSprite(300,580,600,10)
base.visible=false
var gameover = createSprite(300,300)
gameover.scale=0.5
gameover.addImage(over)
gameover.visible=false
var again = createSprite(300,200)
again.scale=0.5
again.addImage(restart)
again.visible=false
paddleg=new Group()
}

function draw() {
  if (gameState===play){
    spawnpaddle();
     //camel.collided(base)
    //    gameState=END
    desert.velocityX=-1
    if(desert.x<0){
        desert.x=desert.width/2
    }
    score=score+Math.round(getFrameRate()/60)
  }

  else if (gameState===END){
       again.visible=true
        gameover=true
        desert.velocityX=0
        spawnpaddle.setVelocityXEach(0)
        if(mousePressedOver(again)){
            reset()
        }
        
        
  }
  paddleg.setLifetimeEach(-1)

 drawSprites();
 text("score:"+score,500,100)

}


function spawnpaddle(){
    if(frameCount%60===0){
        var paddle = createSprite(240,300)
        paddle.y = Math.round(random(350,500))
        paddle.addImage(stick)
       paddle.scale=0.1
        paddle.velocityX=-3
     paddleg.add(paddle)
    }
}
function reset(){
    gameState=play
    again.visible=false
    gameover.visible=false
    score=0
}
