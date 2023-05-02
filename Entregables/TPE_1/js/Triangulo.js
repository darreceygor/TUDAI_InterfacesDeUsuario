class Triangulo extends Figura {
  constructor(x, y, w,h,ctx,estilo,){
    super(x, y, w,h,ctx,estilo,"Triangulo");
  }

  dibujarFigura(){
    ctx.beginPath();

    ctx.moveTo(this.x,this.y);
    ctx.lineTo(this.x,this.x+this.w);
    ctx.lineTo(this.x+this.w,this.x+this.w);
    ctx.fill();
 

  }
}