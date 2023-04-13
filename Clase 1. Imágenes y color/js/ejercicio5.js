// 5. Pintar un rectángulo en pantalla, utilizando tres colores en un gradiente: 
// De negro a amarillo en la primera mitad del ancho del rectángulo, y de amarillo a rojo, en la segunda mitad. 
//Por otro lado, en Y el degradé se mantiene constante.

function ejercicio5() {
  var canvas = document.getElementById("canvas5");
  var ctx = canvas.getContext("2d");
 
  var gradiente1=ctx.createLinearGradient(0,0,200,0);
  gradiente1.addColorStop(0,"black");
  gradiente1.addColorStop(0.5,"yellow");
  gradiente1.addColorStop(1,"red");
  ctx.fillStyle=gradiente1;
  ctx.fillRect(0,0,200,100);
}

ejercicio5();