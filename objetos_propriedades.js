//Objetos - Propriedades
//Pega Caracteres e elimina os espaços entre os nomes

let nome = {
  nomeTodo:
    "Pedro de Alcântara Francisco Antônio João Carlos Xavier de Paula Miguel Rafael Joaquim José Gonzaga Pascoal Cipriano Serafim de Bragança e Bourbon",
  nomeTodo2:
    " Isabel Cristina Leopoldina Augusta Michaela Gabriela Raphaela Gonzaga de Bragança e Bourbon",
  nomeTodo3:
    "Teresa Cristina Maria Giuseppa Gasparre Baltassarre Melchiore Gennara Rosalia Lucia Francesca d’Assisi Elisabetta Francesca di Padova Donata Bonosa Andrea d’Avelino Rita Liutgarda Geltruda Venancia Taddea Spiridione Rocca Matilde",
};

function pegarCaracteres() {
  for (const index of nome["nomeTodo"]) {
    if (index !== " ".valueOf()) {
      console.log("Caracteres tem o nome todo!");
    }
  }
}
pegarCaracteres();
