let d=document;

const canvas = d.getElementById("canvas");
const ctx=canvas.getContext('2d');

const CANVAS_WIDTH=canvas.width=600;
const CANVAS_HEIGHT=canvas.height=600;

const playerImage=new Image();
playerImage.src = '../img/armadura.png';  // sprite del player

const spriteWidth = 85;   //alto de player en sprite
const spriteHeight = 139; //ancho del player en sprite

let frameX=0; // navega horizontal en el sprite
let frameY=0; // navega vertical en el sprite
let gameFrame=0;
const STAGGER_FRAMES=8;



function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  
  let position = Math.floor(gameFrame/STAGGER_FRAMES) % 6;

  //ctx.drawImage(imagen,sourceX,sourceY, sourceWidth, sourceHeight,
  //                   destinationX,destinationY, destinationWidth, destinationHeight );

  frameX=spriteWidth*position;
  
  ctx.drawImage(playerImage,frameX,frameY*spriteHeight,spriteWidth,spriteHeight, 0,0, spriteWidth, spriteHeight);

  if (gameFrame % STAGGER_FRAMES ==0) {
    if(frameX<2) frameX++;
    else frameX=0;    
  }

  gameFrame++;
  requestAnimationFrame(animate);
  
}

animate();