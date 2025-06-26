alert('Seja bem-vindo ao nosso jogo!');

// Gera um número secreto aleatório entre 1 e 10
let numeroSecreto = 5;
console.log(numeroSecreto); // (Para testes, pode remover depois)

// Variável para armazenar o chute do usuário
let primeiroNumero = prompt("Digite um número:");
let segundoNumero = prompt("Digite um número:");
let terceiroNumero = prompt("Digite um número:");
let quartoNumero = prompt("Digite um número:");
let media;
let mediaTotal;

media = primeiroNumero + segundoNumero + terceiroNumero + quartoNumero;
mediaTotal = media /4;

  if (mediaTotal == numeroSecreto) {
    alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} na tentativa.`);
  } else if (mediaTotal > numeroSecreto) {
    alert(`O número secreto é menor que ${mediaTotal}. Tente novamente.`);
  } else {
    alert(`O número secreto é maior que ${mediaTotal}. Tente novamente.`);
  }