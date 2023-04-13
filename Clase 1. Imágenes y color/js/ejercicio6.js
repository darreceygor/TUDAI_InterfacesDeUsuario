/* 6. Pintar un rectángulo en pantalla, utilizando tres o cuatro colores en un gradiente. 
Los tres colores deben ser armonías tonales. Puede ser en el eje X o Y.*/


function ejercicio6(){

  var canvas = document.getElementById("canvas6");
  var ctx = canvas.getContext("2d");

  var grd = ctx.createLinearGradient(0,0,200,100) /*x0,y0,x1,y1 */

  grd.addColorStop(0,"rgb(241, 196, 15)");
  grd.addColorStop(0.25,"rgb(243, 156, 18)");
  grd.addColorStop(0.5,"rgb(230, 126, 34)"); 
  grd.addColorStop(1,"rgb(211, 84, 0)");

  ctx.fillStyle=grd;
  ctx.fillRect(20,20,200,100);
}

ejercicio6();