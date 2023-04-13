const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const file_input = document.getElementById('file_input');
file_input.addEventListener('change', () => {
    const img = new Image();
    //img.src = "./logo.png";
    img.src = URL.createObjectURL(file_input.files[0]);
    img.onload = () => {
        // Dibujar la imagen en el canvas
        ctx.drawImage(img, 0, 0);

        // Obtener los datos de los píxeles de la imagen
        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        const data = imageData.data;

        // Mostrar la imagen filtrada en el canvas
        ctx.putImageData(imageData, 0, 0);
    };

});