//Estudos - Condicionais if

var prova1 = 15;
var prova2 = 50;
var prova3 = 53;

var notas = (prova1 + prova2 + prova3) / 2;

var aprovacao = notas >= 60;
var recuperacao = notas <= 59 && notas >= 40;
var reprovacao = notas <= 39; // passei para boolean

if (aprovacao > recuperacao) {
  console.log("aprovado com: ", notas);
} else if (recuperacao > reprovacao) { // agora não preciso do ||
  console.log("recuperacao com: ", notas);
} else {
  console.log("reprovado com: ", notas);
}
