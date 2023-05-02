class Circulo extends Figura {
  constructor(x, y, w,h,ctx,estilo,radio){
    super(x, y, w,h,ctx,estilo,"Circulo");
    this.radio=radio;
  }

  dibujarFigura(){
    this.ctx.fillStyle = this.estilo;
    this.ctx.arc(this.x,this.y,this.radio,0,Math.PI*2);
    this.ctx.stroke();
    this.ctx.fill();
  }
}