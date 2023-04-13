var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

let objetos=[];

let objActual=null;

const CANT_FIG = 5;


function dibujarCanvas (){
  canvas.width=1024;
  canvas.height=576;
  this.ctx.fillStyle="lightgrey";
  this.ctx.fillRect(0,0,canvas.width,canvas.height);

}

function main (){



  dibujarCanvas();


  figuras();
 
  


  actualizar();
  console.table(objetos)

}

function actualizar() {
  dibujarCanvas();
  for (let i = 0; i < objetos.length; i++) {
    objetos[i].dibujarFigura();
    
  }
}

//Implementar funcionalidad para verificar si un punto se encuentra dentro de una figura. 
//Usar la posición del mouse como punto a verificar. 
//Agregar los métodos correspondientes al diseño del ejercicio anterior.

  canvas.addEventListener("click", function (event) {
  let x=event.offsetX;
  let y=event.offsetY;

  console.log(x,y);
  
})

function figuras(){
  
  
  
  let rc=new Rectangulo(posX(),posY(),100,75,ctx,randomRGBA());
  let crc=new Circulo(posX(),posY(),50,50,ctx,randomRGBA(),15);
  let tr = new Triangulo(posX(),posY(),100,75,ctx,randomRGBA());

  objetos.push(rc);
  objetos.push(crc);
  objetos.push(tr);
}

function posX() {
  var x= Math.round(Math.random() * canvas.width);
  return x;
}

function posY() {
  var y = Math.round(Math.random() * canvas.height);
  return y;
}

function randomRGBA() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  let a = 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}