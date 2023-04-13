
//  2. Pintar una región rectangular de un color utilizando el Contexto de HTML5.


function contexto() {
  var canvas = document.getElementById("canvas2");
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = 'rgb(255, 0, 0)';
  ctx.fillRect(20, 20, 250, 150);
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(255, 127, 0, 0.5)';
  ctx.stroke();  
}

contexto();

//  3. Pintar una región rectangular de un color utilizando la estructura de ImageData.

function imgData() {
  var canvas = document.getElementById("canvas3");
  var ctx = canvas.getContext("2d");
  var id = ctx.createImageData(200,100);

  for (let i = 0; i < id.data.length; i+=4) {
    id.data[i+0]=255;
    id.data[i+1]=0;
    id.data[i+2]=0;
    id.data[i+3]=255;
  }
  ctx.putImageData(id,25,25);
}
imgData();



//  4. Especificar la función para pintar un cuadrado utilizando un gradiente de la siguiente forma:

function gradiente() {
  var canvas = document.getElementById("canvas4");
  var ctx = canvas.getContext("2d");
 
  var gradiente1=ctx.createLinearGradient(0,0,200,0);
  gradiente1.addColorStop(0,"rgb(0,0,0)");
  gradiente1.addColorStop(1,"rgb(255,0,0)");
  ctx.fillStyle=gradiente1;
  ctx.fillRect(0,0,200,200);
}

gradiente();