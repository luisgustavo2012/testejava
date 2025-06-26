alert('Seja bem-vindo ao nosso jogo!');

// Gera um número secreto aleatório entre 1 e 10
let numeroSecreto = 5; // Você pode usar Math.floor(Math.random() * 10) + 1
console.log(numeroSecreto); // (Para testes, pode remover depois)

// Variável para armazenar os chutes do usuário
let primeiroNumero = Number(prompt("Digite o primeiro número:"));
let segundoNumero = Number(prompt("Digite o segundo número:"));
let terceiroNumero = Number(prompt("Digite o terceiro número:"));
let quartoNumero = Number(prompt("Digite o quarto número:"));

// Cálculo da média
let media = primeiroNumero + segundoNumero + terceiroNumero + quartoNumero;
let mediaTotal = media / 4;

// Verificação do resultado
if (mediaTotal == numeroSecreto) {
  alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com a média.`);
} else if (mediaTotal > numeroSecreto) {
  alert(`O número secreto é menor que a média ${mediaTotal}. Tente novamente.`);
} else {
  alert(`O número secreto é maior que a média ${mediaTotal}. Tente novamente.`);
}