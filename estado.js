const prompt = require("prompt-sync");

const estados = [];

const lerIndice = () => {
  listarEstados();

  if (estados.length > 0) {
    const indice =
      prompt("Digite o indice do estado que você deseja atualizar: ") - 1;

    if (indice >= 0 && indice < estados.length) {
      return indice;
    } else {
      console.log("Indice inválido");
    }
  }
};

const validarEstados= (estado) => estado.nome != "" && estado.sigla.length == 2;

const modelo = () => {
  const nome = prompt("Digite o nome do estado: ");
  const sigla = prompt("Digite a sigla do estado: ").toUpperCase();

  if (validarEstados({ nome, sigla })) {
    return { nome, sigla };
  }

  console.log("Dados inválidos");
};

const criarEstados= () => {
  const estado = modelo();

  if (estado != undefined) {
    estados.push({ nome, sigla });

    console.log("Estadoscriado com sucesso");
  }
};

const listarEstados= () => {
  if (estados.length == 0) {
    console.log("Nenhum estado está cadastrado");
  } else {
    estados.forEach((estado, indice) => {
      console.log(indice + 1, estado);
    });
  }
};

const atualizarEstados= () => {
  const indice = lerIndice();

  if (indice != undefined) {
    const estado = modelo();

    if (estado != undefined) {
      estados[indice] = estado;

      console.log("Estadosatualizado com sucesso");
    }
  }
};

const removerEstados= () => {
  const indice = lerIndice();
  if (indice != undefined) {
    estados.splice(indice, 1);

    console.log("Estadosremovido com sucesso");
  }
};

module.exports = {
    criarEstados,
    listarEstados,
    atualizarEstados,
    removerEstados
}