// Obtener el elemento canvas del DOM
const canvas = document.getElementById("canvas");

// Obtener el contexto Canvas 2D
const ctx = canvas.getContext("2d");

// Definir la posición y el tamaño del cuadrado
const x = 50;
const y = 50;
const size = 100;

// Crear un gradiente lineal de arriba hacia abajo
/**
 * Se crea un gradiente lineal que va desde la posición superior izquierda 
 * hasta la posición inferior izquierda del cuadrado utilizando el método 
 * createLinearGradient. Se agregan dos puntos de parada de color al 
 * gradiente: el primer punto en el 0% de la longitud del gradiente se 
 * establece en gris (128, 128, 128) y el segundo punto en el 100% de la 
 * longitud del gradiente se establece en blanco (255, 255, 255).
 */

//Cambiar orientacion y direccion segun suma en eje
const gradient = ctx.createLinearGradient(x, y, x, y + size );
gradient.addColorStop(0, "rgb(0,0,0)"); // NegrO
gradient.addColorStop(.73, "rgb(28,255,0)"); // 
gradient.addColorStop(1, "rgb(255,255,255)"); // Blanco

// Establecer el gradiente como el relleno del contexto Canvas
ctx.fillStyle = gradient;

// Dibujar el cuadrado con el gradiente
ctx.fillRect(x, y, size, size);