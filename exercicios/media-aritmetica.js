// Autor: Vanildo Junior
let nota_1 =  parseFloat(prompt("Digite a primeira nota: "));
let nota_2 =  parseFloat(prompt("Digite a segunda nota: "));
let nota_3 =  parseFloat(prompt("Digite a terceira nota: "));
let nota_4 =  parseFloat(prompt("Digite a quarta nota: "));

let media = (nota_1 + nota_2 + nota_3 + nota_4) / 4;

let media_aprovacao = 7;

if (media >= media_aprovacao) {
    alert(`Parabéns! Você foi APROVADO com a média: ${media}`);
} else {
    alert(`Você foi REPROVADO com a média: ${media}`);
}