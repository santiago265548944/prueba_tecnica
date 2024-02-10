// Funciones para obtener medias
function getMediaA(lista) {
   if (lista.length === 0) return 0;
   const sumatoria = lista.reduce((total, num) => total + num, 0);
   return sumatoria / lista.length;
}

function getMediaB(lista) {
   if (lista.length === 0) return 0;
   const sumaReciprocos = lista.reduce((total, num) => total + 1 / num, 0);
   return lista.length / sumaReciprocos;
}

function getMediaC(lista) {
   const sortedList = lista.sort((a, b) => a - b);
   const middleIndex = Math.floor(lista.length / 2);

   if (lista.length % 2 === 0) {
      return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
   } else {
      return sortedList[middleIndex];
   }
}

// Funciones para dibujar escaleras
function getStaircaseA(n) {
   let staircase = '';
   for (let i = 1; i <= n; i++) {
      staircase += ' '.repeat(n - i) + '#'.repeat(i) + '\n';
   }
   return staircase;
}

function getStaircaseB(n) {
   let staircase = '';
   for (let i = 1; i <= n; i++) {
      staircase += '#'.repeat(i) + ' '.repeat(n - i) + '\n';
   }
   return staircase;
}

function getStaircaseC(n) {
   let staircase = '';
   for (let i = 1; i <= n; i++) {
      staircase += ' '.repeat(n - i) + '#'.repeat(i) + ' '.repeat(n) + '#'.repeat(i) + '\n';
   }
   return staircase;
}

// Funciones para interactuar con la interfaz
function calcularMedias() {
   const numerosInput = document.getElementById('numeros').value;
   const numerosArray = numerosInput.split(',').map((num) => parseFloat(num));

   const mediaA = getMediaA(numerosArray);
   const mediaB = getMediaB(numerosArray);
   const mediaC = getMediaC(numerosArray);

   const resultadosMediasDiv = document.getElementById('resultadosMedias');
   resultadosMediasDiv.innerHTML = `
        <p>Media A (Aritmética): ${mediaA}</p>
        <p>Media B (Armónica): ${mediaB}</p>
        <p>Media C (Mediana): ${mediaC}</p>
    `;
}

function dibujarEscaleras() {
   const tamanioEscalera = document.getElementById('tamanioEscalera').value;
   const resultadosEscalerasDiv = document.getElementById('resultadosEscaleras');

   const escaleraA = getStaircaseA(tamanioEscalera);
   const escaleraB = getStaircaseB(tamanioEscalera);
   const escaleraC = getStaircaseC(tamanioEscalera);

   resultadosEscalerasDiv.innerHTML = `
        <p>Escalera Agente A:</p>
        <pre>${escaleraA}</pre>
        <p>Escalera Agente B:</p>
        <pre>${escaleraB}</pre>
        <p>Escalera Agente C:</p>
        <pre>${escaleraC}</pre>
    `;
}
