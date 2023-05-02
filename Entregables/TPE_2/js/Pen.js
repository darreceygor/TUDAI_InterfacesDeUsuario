//--------------------------------------
// Clase para lapiz
//--------------------------------------

class Pen {
  constructor(posX, posY, fill, ctx, sty){

    this.antX=posX;
    this.antY=posY;
    this.posX=posX;
    this.posY=posY;
    this.fill=fill;
    this.ctx=ctx;
    this.sty=sty;
  }


  moveTo(posX, posY){
    /* siempre que se mueva a una  posicion nueva,
     la posicion actual pasa a ser posicion anterior */
    this.antX=this.posX; // anterior es igual a actual
    this.antY=this.posY;
    this.posX=posX; // actual es igual a nueva pos
    this.posY=posY;
  }
 
  draw(){
    this.ctx.beginPath();
    this.ctx.strokeStyle=this.fill;
    this.ctx.lineWidth=this.sty;
    this.ctx.lineCap='round';
    this.ctx.moveTo(this.antX, this.antY);
    this.ctx.lineTo(this.posX, this.posY);
    this.ctx.stroke();
    this.ctx.closePath();
  }
}