let pessoa = {
              nome:"Josi",
              idade: 14
}

let pessoa2 = '{"nome":"Nicolas","idade":12}';

console.log(pessoa);
console.log(pessoa2);

let pessoa1 = JSON.stringify(pessoa);
let pessoaS2 = JSON.parse(pessoa2);

console.log(pessoa1);
console.log(pessoaS2);