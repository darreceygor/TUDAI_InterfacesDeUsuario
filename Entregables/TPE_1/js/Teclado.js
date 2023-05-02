let obj=null;

document.addEventListener("keydown", (e)=>{
switch (e.code) {
  case "KeyC": elegirForma("Circulo");
    break;
  case "KeyR":elegirForma("Rectangulo");
    break;
  case "KeyT":elegirForma("Triangulo");
    break;
  case "KeyD":{
    obj=null;
    actualizar();
    break;
  }

}

})

function elegirForma(forma) {
  for (let i = 0; i < objetos.length; i++) {
    if (objetos[i].forma==forma){
      obj=objetos[i];
      teclas(obj);
      break;
    }
  }  
}


function teclas(obj) {
  console.log(obj);
  document.addEventListener("keydown", (e)=>{
    switch (e.code) {
      case "ArrowUp":{
        obj.y--;
        actualizar();
      }
      break;
      case "ArrowDown":{
        obj.y++;
        actualizar();
      }        
        break;
      case "ArrowLeft":{
          obj.x--;
          actualizar();
        }
        break;
      case "ArrowRight":{
          obj.x++;
          actualizar();
        }        
          break;
    
      default:
        break;
    };
  })

  }

