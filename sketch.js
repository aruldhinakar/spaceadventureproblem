var spaceship
var bgsprite
var laserbeam
var gamestate = "play"



function preload(){
bgimg = loadImage("spacebg.jpeg")
shipimg = loadImage("ship.png")
lbimg = loadImage("laser beam.jpeg")
gmimg = loadImage("meteor.png")

}





function setup(){
createCanvas(windowWidth,windowHeight)
 bgsprite = createSprite(width/2,height/2,windowWidth*2,windowHeight)
bgsprite.addImage("bgpic",bgimg)
 spaceship = createSprite(width/2,height-300)
spaceship.addImage("ss",shipimg)
spaceship.scale = 0.3
meteorGroup = new Group()


//console.log(windowWidth)
//console.log(windowHeight)


}

function draw(){
background("black")
if (gameState === "play"){
    if(keyDown("RIGHT")&& spaceship.x<1400){
        spaceship.x = spaceship.x+5
       
        }
if(keyDown("LEFT")&& spaceship.x>450){
spaceship.x = spaceship.x-5
       
}
spawnLaser()
spawnMeteor()
if(meteorGroup.isTouching(spaceship)){
    gameState = "end"
}
}
else if(gameState === "end"){



}
 
bgsprite.velocityY = 3
if(bgsprite.y>height-486){
bgsprite.y = height - 586
}


drawSprites()
}
function spawnLaser(){
if(keyDown("SPACE")){
laserbeam = createSprite(width/2,height - 350)
laserbeam.addImage("lb",lbimg)
laserbeam.scale = 0.7 
laserbeam.velocityY = -7
laserbeam.x = spaceship.x
}


}
function spawnMeteor(){
    if(frameCount%120 === 0){
    meteor = createSprite(random(400,1000),-height)
    meteor.addImage("mt",gmimg)
    meteor.scale = random(0,1.2)
    meteor.velocityY = 7
    spaceship.depth = meteor.depth
    spaceship.depth +=1
    meteorGroup.add(meteor)
    }
}