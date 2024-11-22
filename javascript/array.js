// Array ->     0    1    2    3    4    5    6
const notas = [7.9, 8.3, 9.2, 10];

console.log(notas[0]);
console.log(notas[1]);
console.log(notas[2]);
console.log(notas[3]);

notas.push(8.1);

console.log(notas[4]);
console.log(notas[5]);

notas[0] = 9.9;
console.log(notas[0]);

console.log(notas);
console.log(notas.length);
