//IMC

let pessoas = ["Asher", "Pedro", "Junior", "Lais", "Lais2"];
let sexo = ["m", "m", "m", "f", "f"];
let idade = [38, 37, 25, 33, 33];
let altura = [1.78, 1.85, 1.7, 1.57, 1.57];
let peso = [86, 90, 78, 61, 73];

function imc(n1, n2) {
  const resultado = n2 / (n1 * n1);
  return resultado.toPrecision(3); //precisei passar toPrecision com valor 3?
}

function verifica(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc > 18.6 && imc < 24.9) {
    return "Peso normal";
  } else if (imc > 25 && imc < 29.9) {
    return "Sobrepeso";
  } else if (imc > 30 && imc < 34.9) {
    return "Obesidade grau 1";
  } else if (imc > 35 && imc < 39.9) {
    return "Obesidade grau 2";
  } else {
    return "Obesidade grau 3";
  }
}

for (let index in pessoas) {
  const n1 = altura[index];
  const n2 = peso[index];
  const n3 = imc(n1.toPrecision(), n2.toPrecision()); //precisei mudar de toFixed para toPrecision
  console.log(
    "Nome:",
    pessoas[index],
    "Idade:",
    idade[index],
    "Sexo:",
    sexo[index],
    "Altura:",
    altura[index],
    "Peso:",
    peso[index],
    "IMC:",
    imc(n1.toPrecision(), n2.toPrecision()), //precisei mudar de toFixed para toPrecision
    verifica(n3)
  );
}
