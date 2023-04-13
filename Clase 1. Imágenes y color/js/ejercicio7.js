/* 7. Cargar una Imagen desde disco o URL
      a) Dibujar la imagen dentro del canvas
*/

function ejercicio7() {
  var canvas = document.getElementById("canvas7");
  var ctx = canvas.getContext("2d");
    
  var img = new Image();

  img.src="/img/pngegg.png";

  img.onload = async ()=> {
    await ctx.drawImage(img,0,0); /*(imagen, x de comienzo, y de comienzo) */
    ctx.restore();
    //resolve(ctx);
    
    sepia(img,ctx);
  }
}


ejercicio7();

// b) Implementar una función que aplique el filtro de escala de grises 
//y muestre el resultado en el canvas. 


function filtros (img,ctx){
  const imageData = ctx.getImageData(0,0,img.width,img.height);

  for (let i = 0; i < imageData.data.length; i+=4) {
    const r = imageData.data[i];
    const g = imageData.data[i+1];
    const b = imageData.data[i+2];

    imageData.data[i] = (r+g+b)/3;
    imageData.data[i+1] = (r+g+b)/3;
    imageData.data[i+2] = (r+g+b)/3;
  }
  return ctx.putImageData(imageData,0,0);
  
}

function sepia(img,ctx) {
  const imageData = ctx.getImageData(0,0,img.width,img.height);

  let pixels = imageData.data;

  for (let i = 0; i < pixels.length; i+=4) {
    var luminosidad = .3 * pixels[i] + .6 * pixels[i + 1] + .1 * pixels[i + 2];
		  pixels[i] = Math.min(luminosidad + 40, 255); // rojo
		  pixels[i + 1] = Math.min(luminosidad + 15, 255); // verde	
		  pixels[i + 2] = luminosidad; // azul		
  }
  return ctx.putImageData(imageData,0,0);
}