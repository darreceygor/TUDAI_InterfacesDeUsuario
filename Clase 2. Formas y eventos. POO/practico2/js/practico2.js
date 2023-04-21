/*1. Diseñar e implementar una solución para:
a. Dibujar figuras de diferente tamaño en posiciones al azar del canvas. Las figuras pueden ser círculos, rectángulos, etc.
b. Dibujar las figuras con diferentes patrones (color sólido, gradientes e imágenes)
c. Dibujar una imagen dentro de una figura. Ajustar el tamaño de la imagen a la forma que se está dibujando*/

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let objetos = [];

function main() {
  dibujarCanvas(ctx);
}


function dibujarCanvas(ctx) {

  ctx.fillStyle = 'rgb(255, 0, 0)';
  ctx.fillRect(20, 20, 250, 150);
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(255, 127, 0, 0.5)';
  ctx.stroke();  
}


  
