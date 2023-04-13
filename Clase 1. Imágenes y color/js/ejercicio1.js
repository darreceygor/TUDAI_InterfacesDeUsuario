/* Definir una matriz de 100 elementos x 100 elementos y completarla con
valores enteros random, y resuelva los siguientes incisos:
a) Escribir una función que retorne el valor máximo de toda la matriz
b) Escribir una función que retorne el valor máximo contenido en las filas pares y el valor mínimo
en las filas impares
c) Calcular el valor promedio de cada fila y guardarlos en un arreglo. */

let items=100;
let max=50;

let matriz =[];


function cargarMatriz(){
  for (let fi= 0; fi < items ; fi++) {
    matriz[fi]=[];
      for (let co = 0; co < items; co++) {
        matriz[fi][co] = Math.floor(Math.random() * max+1);
        
      }
  }  
}

cargarMatriz();
console.table(matriz);

/******** A ********* */

function maximoValor() {
  let max=-1;

  for (let fi= 0; fi < items ; fi++) {
      for (let co = 0; co < items; co++) {
        if (matriz[fi][co]>max) {
          max=matriz[fi][co];
        }
  
      }
  } 
  return max;
}

console.log("Maximo valor: "+ maximoValor());


/*******  B ******/

function paresYNones(){
  let max=-1;
  let min=100;
  let res="";

  for (let fi = 0; fi < items; fi++) {
    for (let co = 0; co < items; co++) {
      if (fi % 2 == 0 ){
        if (matriz[fi][co]>max) {
          max=matriz[fi][co];
        }
      } else {
        if (matriz[fi][co]<min) {
          min=matriz[fi][co];
        }        
      } 
    }
  }
  res = "MAYOR de Filas Pares: " + max + "\nMINIMO de Filas Impares: "+min;
  return res;
}

console.log(paresYNones());



/*c) Calcular el valor promedio de cada fila y guardarlos en un arreglo. */

function promedioPorFila(){
let promedio=[];
let s=0;

  for (let fi = 0; fi < items; fi++) {
    for (let co = 0; co < items; co++) {
      s+=matriz[fi][co]
    }
    promedio[fi]=s/items;
    s=0;
  }
  return promedio;
}

console.table(promedioPorFila());
