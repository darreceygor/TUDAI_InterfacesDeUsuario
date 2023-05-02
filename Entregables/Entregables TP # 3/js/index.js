(function () {
  horas();
  minutos();
  segundos();
})();

function linearMap(value, min, max, newMin, newMax) {
  return newMin + ((newMax - newMin) * (value - min)) / (max - min);
}


function horas() {
  const currentHour = new Date().getHours() - 12;
  const angle = linearMap(currentHour, 0, 12, 0, 360);
  document.querySelector(".hora").style.transform = `rotate(${angle}deg)`;

}

function minutos() {
  const currentMinutes = new Date().getMinutes();
  const angle = linearMap(currentMinutes, 0, 60, 0, 360);
  document.querySelector(".minuto").style.transform = `rotate(${angle}deg)`;
}

function segundos() {
  const currentMinutes = new Date().getSeconds();
  const angle = linearMap(currentMinutes, 0, 60, 0, 360);
  document.querySelector(".segundo").style.transform = `rotate(${angle}deg)`;
}

(function () {
  setInterval(() => {
    horas();
    minutos();
    segundos();
  }, 1000);
})();


const $card = document.querySelector('.card');
let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2,
  }
  const distance = Math.sqrt(center.x**2 + center.y**2);  /*distancia entre el centro y el mouse*/
  
  $card.style.transform = `
    scale3d(1.1, 1.1, 1.1)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance)* 8}deg
    )
  `;
}

$card.addEventListener('mouseenter', () => {
  bounds = $card.getBoundingClientRect();
  document.addEventListener('mousemove', rotateToMouse);
});

$card.addEventListener('mouseleave', () => {
  document.removeEventListener('mousemove', rotateToMouse);
  $card.style.transform = '';
  $card.style.background = '';
});