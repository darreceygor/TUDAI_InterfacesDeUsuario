// Obtener el elemento canvas y el contexto 2D
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Crear una imagen de ejemplo
const img = new Image();
img.src = 'logo.png';
img.onload = () => {
  // Dibujar la imagen en el canvas
  ctx.drawImage(img, 0, 0);

  // Obtener los datos de píxeles de la imagen
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  // Definir las coordenadas del rectángulo
  const x = 50;
  const y = 50;
  const width = 100;
  const height = 100;

  // Definir el color a aplicar en el rectángulo (rojo, verde, azul, opacidad)
  const color = [255, 0, 0, 255]; // Rojo opaco

  // Iterar sobre los píxeles dentro del rectángulo
  for (let i = y; i < y + height; i++) {
    for (let j = x; j < x + width; j++) {
      // Calcular el índice del píxel dentro del array de datos
      const index = (i * canvas.width + j) * 4;

      // Asignar el color al píxel
      imageData.data[index] = color[0]; // rojo
      imageData.data[index + 1] = color[1]; // verde
      imageData.data[index + 2] = color[2]; // azul
      imageData.data[index + 3] = color[3]; // opacidad
    }
  }

  // Actualizar la imagen en el canvas con los datos modificados
  ctx.putImageData(imageData, 0, 0);
};