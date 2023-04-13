class Rectangulo extends Figura {
  constructor(x, y, w,h,ctx,estilo){
    super(x, y, w,h,ctx,estilo,"Rectangulo");
  }

  dibujarFigura(){
    this.ctx.fillStyle=this.estilo;
    this.ctx.fillRect(this.x,this.y,this.w,this.h);
    //this.ctx.fill();
  }
}