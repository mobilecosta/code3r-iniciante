function saudacaoGenerica() {
  console.log("Bom dia");
  console.log("Boa tarde");
  console.log("Boa noite");
}

saudacaoGenerica();

function saudacao(nome = "Meu querido!", titulo = "Sr(a)") {
  console.log("Bom dia", titulo, nome);
  console.log("Boa tarde", titulo, nome);
  console.log("Boa noite", titulo, nome);
}

saudacao("Ana Rita");
saudacao("Guilherme", "Dr.");
saudacao("Rebeca");
