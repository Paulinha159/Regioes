const prompt = require("prompt-sync")();

const { cadastrarpais, atualizar, remover, listar } = require("./pais.js");
const { cadastrar, atualizar, remover, listar } = require("./estado.js");
const { cadastrar, atualizar, remover, listar } = require("./cidade.js");

while (true) {
  console.log(
    "O que deseja fazer?\n1 - cadastrar\n2 - Atualizar\n3 - Remover\n4 - Listar\n5 - Sair\n"
  );
  let opcao = Number(prompt());

  switch (opcao) {
    case 1:
      cadastrarpais();
      break;
    case 2:
      atualizar();
      break;
    case 3:
      remover();
      break;
    case 4:
      listar();
      break;
    case 5:
      process.exit();
      break;
    default:
      console.log("Opção inválida");
      break;
  }
}