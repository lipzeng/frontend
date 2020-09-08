function conversor(n1, n2) {
  var litro = n1;
  var tipo = n2; // passar o valor de densidade para n2

  var densidade = new Array((oleo = 920), (agua = 1000), (gasolina = 680));

  var calc = n1 * densidade[0]; // não precisar passar parametro por aqui

  console.log(calc);
  return conversor;
}

conversor(20, 1); // pegar a posição do array
