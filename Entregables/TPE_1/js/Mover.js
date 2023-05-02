
canvas.onmousedown = function (event) {
  for (let i = 0; i < objetos.length; i++) {
    if ((objetos[i].x < event.clientX && (objetos[i].w+objetos[i].x > event.clientX))
      && (objetos[i].y < event.clientY && (objetos[i].w+objetos[i].y > event.clientY))){
      objActual = objetos[i];
      console.log(objActual)
    break;    
    }
}
}

canvas.onmousemove = function (event){
  if (objActual!=null) {
    objActual.x=event.clientX;
    objActual.y=event.clientY;

  } 
  actualizar();
}

canvas.onmouseup = function (event) {
  objActual=null;
}