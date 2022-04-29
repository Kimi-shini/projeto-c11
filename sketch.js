var path,muleke, leftBoundary,rightBoundary;
var pathImg,mulekeImg;



function preload(){
pathImg = loadImage("path.png");
mulekeImg = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
path = createSprite(200,200,10,10);
path.addImage(pathImg)
path.velocityY = 4
path.scale = 1.2


//Criando menino que corre 
muleke = createSprite(180,340,30,30)
muleke.addAnimation("JakeRunning",mulekeImg)
muleke.scale = 0.08


// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800)
leftBoundary.visible = false


//Crie Boundary direito 
rightBoundary = createSprite(0,0,100,800)
rightBoundary.visible = false
}


function draw() {
background(0)
path.velocityY = 4

// Menino se movendo no eixo X com o mouse

muleke.x = World.mouseX

edges = createEdgeSprite()
muleke.collide(edges[3])
muleke.collide(leftBoundary)
muleke.collide(rightBoundary)

 //Reiniciar o fundo
if(path.y > 400) {
path.y = height/2


}  
 drawSprites();

 }




