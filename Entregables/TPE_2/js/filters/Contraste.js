class Contraste extends Filter {

  constructor(width, height, ctx, contraste) {
      super(width, height, ctx);
      this.contraste = contraste; 
  }


  drawRect() {
  
    let pixels = this.imageData.data
    let numPixels = canvasWidth*canvasHeight;

  let factor = ( 259 * ( contraste + 255 ) ) / ( 255 * ( 259 - contraste ) );

    for ( var i = 0; i < numPixels; i++ ) {
      var r = pixels[ i * 4 ];
      var g = pixels[ i * 4 + 1 ];
      var b = pixels[ i * 4 + 2 ];

      pixels[ i * 4 ] = factor * ( r - 128 ) + 128;
      pixels[ i * 4 + 1 ] = factor * ( g - 128 ) + 128;
      pixels[ i * 4 + 2 ] = factor * ( b - 128 ) + 128;
  }
  }

  }
