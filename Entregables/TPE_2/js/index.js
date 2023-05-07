//--------------------------------------
// Cuerpor del proyecto
//--------------------------------------

let d =document;

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
let imagen = null;

let drawing=null;

let position = canvas.getBoundingClientRect();

canvas.addEventListener('mousedown', (e)=> {
  
  mouseDown=true;
  mouseUP=false;

  let x =e.clientX-position.left;
  let y =e.clientY-position.top;

  drawing=true;

  pen = new Pen (x,y,color,ctx,penWidth);
})

canvas.addEventListener('mouseup', (e)=> {
  mouseUP=true;
  mouseDown=false;
  pen=null;
})


canvas.addEventListener('mousemove', (e)=>{
  if (mouseDown && penClick){
    pen.moveTo(e.offsetX,e.offsetY);
    pen.draw();

  }
})

//--------------------------------------
// Comportamiento de los botones
//--------------------------------------

//--------------------------------------
// MENU SUPERIOR
//--------------------------------------

d.getElementById("pen").addEventListener("click", (e)=>{
  penClick=true;
  penWidth=5;
  color='black';

})

d.getElementById("eraser").addEventListener("click", (e)=>{
  penClick=true;
  penWidth=10;
  color="#B2BABB";
})

d.getElementById("save").addEventListener("click", (e)=>{
  let link = d.createElement('a');  //crea un elemento a
  link.download = "canvas.png";
  link.href = canvas.toDataURL();
  link.click();
})

d.getElementById("file").addEventListener("change", (e)=>{
  imagen = new Image();
  imagen.src = URL.createObjectURL(e.target.files[0]);

  imagen.onload = function() {
    ctx.drawImage(this,0,0,canvasWidth,canvasHeight);
  }
})

d.getElementById("clear").addEventListener("click", (e)=> {
  lastSelected = null;
  if (imagen!=null){
    URL.revokeObjectURL(imagen.src);
  }
  location.reload();
})


//--------------------------------------
// FILTROS
//--------------------------------------

d.getElementById("negativo").addEventListener("click",(e)=>{

  let lastSelected=negativo;

  let imageData = ctx.getImageData(0, 0,canvasWidth, canvasHeight);
  
  if (imageData==null){
    imageData = ctx.getImageData(0,0,canvasWidth,canvasHeight);
  }
  let filtro = new Negativo(canvas.width, canvas.height, ctx);
  ctx.putImageData(filtro.getImageData(), 0, 0);
  
});

d.getElementById("sepia").addEventListener("click",(e)=>{

  let lastSelected=sepia;

  let imageData = ctx.getImageData(0, 0,canvasWidth, canvasHeight);

  if (imageData==null){
    imageData = ctx.getImageData(0,0,canvasWidth,canvasHeight);
  }
  ctx.putImageData(imageData,0,0)

  let filtro = new Sepia(canvas.width, canvas.height, ctx);
  ctx.putImageData(filtro.getImageData(), 0, 0);
  
});

let lastSelected = null;
let int = d.querySelector("#inputBinary");
let intensidad = int.value;

int.addEventListener("change", ()=> {
  intensidad=int.value;
  if (lastSelected != null)
  lastSelected.click();
})

d.getElementById("binary").addEventListener("click", (e) => {

  lastSelected=Binarizacion;
  
  let imageData = ctx.getImageData(0, 0,canvasWidth, canvasHeight);

  if (imageData==null){
    imageData = ctx.getImageData(0,0,canvasWidth,canvasHeight);
  }

  ctx.putImageData(imageData, 0, 0);
  let filtro = new Binarizacion(canvas.width, canvas.height, ctx, intensidad);
  ctx.putImageData(filtro.getImageData(), 0, 0);

})


d.getElementById("saturation").addEventListener("click", (e)=>{
  lastSelected=Saturacion;

  let imageData = ctx.getImageData(0, 0,canvasWidth, canvasHeight);
  
  if (imageData == null)
    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  ctx.putImageData(imageData, 0, 0);
  let filtro = new Saturacion(canvas.width, canvas.height, ctx);
  ctx.putImageData(filtro.getImageData(), 0, 0);
})

if (lastSelected===Binarizacion) {
  d.getElementById("pBinary").style.visibility = "visible"; 
} else {
  bin ="hidden";
}




//--------------------------------------
// Entrada 
//--------------------------------------
function main() {
  ctx.fillStyle="#B2BABB";
  ctx.fillRect(0,0,canvasWidth,canvasHeight);
  
  
}
