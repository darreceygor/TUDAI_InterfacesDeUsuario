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

//INPUT para seleccionar ancho de lapiz y pincel
let pb = d.querySelector('#inputPB');
let wth = pb.value;

pb.addEventListener("change", ()=> {
  wth=d.getElementById('pb').innerHTML=document.getElementById('inputPB').value;
  wth;
  console.log(wth);
})

//INPUT para seleccionar color de lapiz y pincel
let inClr = d.getElementById('inputColor');
let selectedColor = inClr.value;

inClr.addEventListener("input", ()=>{
  selectedColor = inClr.value;
})

//LAPIZ
d.getElementById("pen").addEventListener("click", (e)=>{
  penClick=true;
  penWidth=wth;
  color= selectedColor;
  d.body.style.cursor='.iconPen';
})


//PINCEL
d.getElementById("brush").addEventListener("click", (e)=>{
  penClick=true;
  penWidth=wth*2;
  color= selectedColor;
  d.body.style.cursor='.iconPen';
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
//-------------------------------------------
// 3.1- NEGATIVO
//-------------------------------------------

d.getElementById("negativo").addEventListener("click",(e)=>{

  let lastSelected=negativo;

  let imageData = ctx.getImageData(0, 0,canvasWidth, canvasHeight);
  
  if (imageData==null){
    imageData = ctx.getImageData(0,0,canvasWidth,canvasHeight);
  }
  let filtro = new Negativo(canvas.width, canvas.height, ctx);
  ctx.putImageData(filtro.getImageData(), 0, 0);
  
});

//-------------------------------------------
// 3.2 - SEPIA
//-------------------------------------------

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


//-------------------------------------------
// 3.3 - BINARIZACION
//-------------------------------------------

let lastSelected = null;
let int = d.querySelector("#inputBinary");
let intensidad = int.value;

int.addEventListener("change", ()=> {
  intensidad=d.getElementById('bin').innerHTML=document.getElementById('inputBinary').value;
  intensidad;
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

//-------------------------------------------
// 3.4 - BRILLO
//-------------------------------------------

let br = d.querySelector("#inputBright");
let brillo = br.value;

br.addEventListener("change", ()=> {
  brillo=d.getElementById('brgh').innerHTML=document.getElementById('inputBright').value;
  brillo;
})


d.getElementById("brightness").addEventListener("click", (e) => {

  lastSelected=Brillo;
  
  let imageData = ctx.getImageData(0, 0,canvasWidth, canvasHeight);

  if (imageData==null){
    imageData = ctx.getImageData(0,0,canvasWidth,canvasHeight);
  }
  console.log(brillo);
  ctx.putImageData(imageData, 0, 0);
  let filtro = new Brillo(imageData,canvas.width, canvas.height, ctx, Math.round(brillo / 1));
  ctx.putImageData(filtro.getImageData(), 0, 0);

})


//-------------------------------------------
// 8.1 - SATURACION
//-------------------------------------------

let st = d.querySelector("#inputSaturation");
let sat = st.value;

st.addEventListener("change", ()=> {
  sat=d.getElementById('sat').innerHTML=document.getElementById('inputSaturation').value;
  sat;
})

d.getElementById("saturation").addEventListener("click", (e)=>{

 


  
  let imageData = ctx.getImageData(0, 0,canvasWidth, canvasHeight);
  
  if (imageData == null)
    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  

  let saturation = 2;

  let redLuminance = 0.3086; // constant to determine luminance of red. Similarly, for green and blue
  let greenLuminance = 0.6094;
  let blueLuminance = 0.0820;

  let az = (1 - saturation) * redLuminance + saturation;
  let bz = (1 - saturation) * greenLuminance;
  let cz = (1 - saturation) * blueLuminance;
  let dz = (1 - saturation) * redLuminance;
  let ez = (1 - saturation) * greenLuminance + saturation;
  let fz = (1 - saturation) * blueLuminance;
  let gz = (1 - saturation)*redLuminance;
  let hz = (1 - saturation)*greenLuminance;
  let iz = (1 - saturation)*blueLuminance + saturation;


  // canvas.context.drawImage(imageObj, 0,0);
  
  let pixels = imageData.data;

  for(let i = 0; i < pixels.length; i += 4) {
      let red = pixels[i]; // Extract original red color [0 to 255]. Similarly for green and blue below
      let green = pixels[i + 1];
      let blue = pixels[i + 2];

      let saturatedRed = (az*red + bz*green + cz*blue);
      let saturatedGreen = (dz*red + ez*green + fz*blue);
      let saturateddBlue = (gz*red + hz*green + iz*blue);

      pixels[i] = saturatedRed;
      pixels[i + 1] = saturatedGreen;
      pixels[i + 2] = saturateddBlue;
  }

  ctx.putImageData(imageData, 0, 0);

});

//-------------------------------------------
// 8.2 - BLUR
//-------------------------------------------

let bl = d.querySelector("#inputBlur");
let blur = bl.value;

bl.addEventListener("change", ()=> {
  blur=d.getElementById('blu').innerHTML=document.getElementById('inputBlur').value;
  blur;
})


d.getElementById("blur").addEventListener("click", (e)=>{
  lastSelected=blur;

  let w=canvasWidth;
  let h=canvasHeight;

  let x=w/2;
  let y=h/2;



  let imageData = ctx.getImageData(0, 0,w, h);
  
  if (imageData == null){
    imageData = ctx.getImageData(0, 0, w, h);
  }
  
        blur = Math.floor(blur);
              let startX = (x - blur <= 0) ? 0 : x - blur;
              let startY = (y - blur <= 0) ? 0 :y - blur;
              let endX   = (x + blur >= imageData.width -1) ? imageData.width  : x + blur;
              let endY   = (y + blur >= imageData.height-1) ? imageData.height : y + blur;
              // Los pixeles afectados para poder calcular el promedio de los colores es igual a un área
              // con forma de cuadrado. Por tanto, para calcular el área del cuadrado es igual a uno de sus lados
              // elevado al cuadrado. Los lados del cuadrado se pueden calcular como el radio del blur por dos, 
              // los n pixeles que se toman hacia la derecha y la izquierda en el eje horizontal, más
              // el mismo pixel sobre el que se está calculando el blur.
              let total = (blur * 2 + 1)*(blur * 2 + 1)
              let r = 0;
              let g = 0;
              let b = 0;
              for (let y = startY; y <= endY; y++) {
                  for (let x = startX; x <= endX; x++) {
                      let index = (x + y * imageData.width) * 4;
                      r += imageData.data[index + 0] / total;
                      g += imageData.data[index + 1] / total;
                      b += imageData.data[index + 2] / total;
                  }
              }
        return [r, g, b];
        
              ctx.putImageData(imageData, 0, 0);

      });



//--------------------------------------
// Entrada 
//--------------------------------------
function main() {
  ctx.fillStyle="#B2BABB";
  ctx.fillRect(0,0,canvasWidth,canvasHeight);
  
  
}
