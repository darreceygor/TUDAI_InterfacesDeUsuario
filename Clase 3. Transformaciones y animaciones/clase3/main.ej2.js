// Obtener el elemento canvas del HTML
const mi_canvas = document.getElementById('mi_canvas');

// Obtener el contexto 2D del canvas
const ctx = mi_canvas.getContext('2d');

// Dibujar un rectángulo de ancho 200 y altura 100 en la posición (50, 50)
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 200, 100);