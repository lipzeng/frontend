// IMC

let pessoas = ["Asher", "Pedro", "Junior", "Carolina", "Joana"];
let altura = [1.75, 1.85, 1.73, 1.6, 1.67];
let sexo = ["m", "m", "m", "f", "f"];
let idade = [38, 37, 25, 35, 43];
let peso = [86.0, 90, 78, 69, 70];

function imc(n1, n2) {
  return n2 / (n1 * n1);
}

function verifica(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc < 18.6 && imc <= 24.9) {
    return "Peso normal";
  } else if (imc < 25 && imc <= 29.9) {
    return "Sobrepeso";
  } else if (imc < 30 && imc <=34.9) {
    return "Obesidade grau 1";
  } else if (imc < 35 && imc <= 39.9) {
    return "Obesidade grau 2";
  } else {
    return "Obesidade grau 3";
  }
}

for (let index in pessoas) {
  const n1 = altura[index];
  const n2 = peso[index];
  const v = imc(n1, n2);
  console.log(
    "Nome:",
    pessoas[index],
    "Idade:",
    idade[index],
    "Sexo:",
    sexo[index],
    "Altura:",
    altura[index],
    "IMC:",
    imc(n1.toFixed(), n2.toFixed()),
    verifica(v)
  );
}
