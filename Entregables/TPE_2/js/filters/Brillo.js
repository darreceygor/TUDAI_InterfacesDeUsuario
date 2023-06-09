class Brillo extends Filter{

  constructor(imageData,width, height, ctx, brillo) {
      super(width, height, ctx);
      this.imageData = imageData;
      this.brillo = brillo; 
  }

  drawRect() {

    for (let x = 0; x < this.width; x++) {
        for (let y = 0; y < this.height; y++) {
            // se incrementa el rgb segun la intensidad
            let r = this.getRed(this.imageData, x, y) + this.brillo;
            let g = this.getGreen(this.imageData, x, y) + this.brillo;
            let b = this.getBlue(this.imageData, x, y) + this.brillo;
            let a = 255;
            // se controla que ningun valor supere los 255
            if(r > 255)
                r = 255;
            else if(g > 255)
                g = 255;
            else if(b > 255)
                b= 255;
            this.setPixel(this.imageData, x, y, r, g, b, a);
        }
    }
    
    }
}