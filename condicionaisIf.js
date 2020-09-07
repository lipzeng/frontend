//Estudos - Condicionais if

var prova1 = 15;
var prova2 = 20;
var prova3 = 44;

var notas = (prova1 + prova2 + prova3) / 2;

var aprovacao = notas >= 60;
var recuperacao = notas <= 59 && notas >= 40;
var reprovacao = 39;

if (aprovacao > recuperacao) {
  console.log("aprovado com: ", notas);
} 
else if (recuperacao || reprovacao && recuperacao > reprovacao) {
  console.log("recuperacao com: ", notas);
} 
else {
  console.log("reprovado com: ", notas);
}
