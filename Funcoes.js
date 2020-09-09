//Estudos Funções

function conversor(n1, n2) {
  let litro = n1;
  let tipo = n2; 

  let densidade = [920, 1000, 680];

  let calc = n1 * densidade[tipo]; // formula litros p/ kg

  console.log(calc);

  return;
}

conversor(20, 2); // quantidade por litros e densidade para conversão
