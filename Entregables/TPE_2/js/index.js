//--------------------------------------
// Cuerpor del proyecto
//--------------------------------------

let d = document;

let canvas = d.querySelector("#canvas");
let ctx = canvas.getContext('2d');

let canvasWidth = canvas.clientWidth;
let canvasHeight = canvas.clientHeight;


//--------------------------------------
// Comportamiento del mouse
//--------------------------------------

let mouseUP = true;
let mouseDown = false;

let color;


let penWidth;
let pen = null;
let penClick=false;

canvas.addEventListener('mousedown', (e)=> {
  mouseDown=true;
  mouseUP=false;

  pen = new Pen (e.layerX,e.layerY,color,ctx,penWidth);
})

canvas.addEventListener('mouseup', (e)=> {
  mouseUP=true;
  mouseDown=false;
  pen=null;
})


canvas.addEventListener('mousemove', (e)=>{
  if (mouseDown && penClick){
    pen.moveTo(e.layerX,e.layerY);
    pen.draw();

  }
})

//--------------------------------------
// Comportamiento de los botones
//--------------------------------------

d.getElementById("pen").addEventListener("click", (e)=>{
  penClick=true;
  penWidth=5;
  color='black;'
})

d.getElementById("eraser").addEventListener("click", (e)=>{
  penClick=true;
  penWidth=10;
  color='yellow';
})

d.getElementById("save").addEventListener("click", (e)=>{
  let link = d.createElement('a');  //crea un elemento a
  link.download = "canvas.png";
  link.href = canvas.toDataURL();
  link.click();
})



//--------------------------------------
// Entrada 
//--------------------------------------
function main() {
  ctx.fillStyle='yellow';
  ctx.fillRect(0,0,canvasWidth,canvasHeight);
  
  
}