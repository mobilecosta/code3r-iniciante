const autores = [
  {
    id: "j-k-rowling",
    nome: "J.K. Rowling",
    idade: 65,
  },
  {
    id: "j-r-r-tolkien",
    nome: "J.R.R. Tolkien",
    idade: 89,
  },
  {
    id: "george-r-r-martin",
    nome: "George R.R. Martin",
    idade: 73,
  },
];

console.log(autores[0].nome);
console.log(autores[1].nome);
console.log(autores[2].nome);
console.log(autores[3]?.nome);

const serieHarryPotter = {
  id: "harry-potter",
  titulo: "Harry Potter",
  descricao:
    "A série de livros Harry Potter, escrita por J.K. Rowling, segue a jornada de um jovem bruxo, Harry Potter, enquanto ele descobre seu lugar no mundo mágico e enfrenta desafios para derrotar o malvado bruxo Lord Voldemort. Ao longo de sete livros, Harry e seus amigos, Hermione Granger e Ron Weasley, exploram a magia, enfrentam perigos e aprendem sobre amizade, coragem e o poder da escolha em uma luta épica entre o bem e o mal.",
  livros: [
    {
      id: "harry-potter-e-a-pedra-filosofal",
      titulo: "Harry Potter e a Pedra Filosofal",
      ano: 1997,
    },
    {
      id: "harry-potter-e-a-camara-secreta",
      titulo: "Harry Potter e a Câmara Secreta",
      ano: 1998,
    },
    {
      id: "harry-potter-e-o-prisioneiro-de-azkaban",
      titulo: "Harry Potter e o Prisioneiro de Azkaban",
      ano: 1999,
    },
  ],
};

console.log(serieHarryPotter.livros[0]?.titulo);
