alert("Comando para mostrar um texto na tela, posso usar aspas duplas ou aspas simples, mas siga este padrão em todo codigo");
alert("Isto é um alerta para poder te alertar sobre um alertaque ira te alertar em seguida a esse alerto");
alert("ALERTA");

let chute;
let idade;
let nome;

console.log(prompt ("Digite seu nome"));

let entrada = prompt("Digite um número inteiro:");
let numero = parselnt(entrada);

if(Number.isInteger(numero)){
    console.log("Obrigado! Você digitou um inteiro");
}else {
    console.log("Por favor, digite um numero inteiro válido");
}