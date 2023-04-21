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
