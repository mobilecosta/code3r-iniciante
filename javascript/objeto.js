const autor = {
  id: "j-k-rowling",
  nome: "J. K. Rowling",
  idade: 65,
  imagem:
    "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/04/GettyImages-950041970-e1712065084538.jpg",
  biografia: "...",
};

console.log(autor.id);
console.log(autor.imagem);
console.log(autor["nome"]);

let livro = {
  id: "harry-potter-e-a-pedra-filosofal",
  nome: "Harry Potter e a Pedra Filosofal",
  autor: autor,
  ano: 1997,
  ordem: 1,
  imagem: "https://m.media-amazon.com/images/I/81pB+joKL4L._SL1500_.jpg",
};

console.log(livro.nome);
console.log(livro.autor.nome);
