//Escreva um código que leia dois números inteiros e calcule o resultado da divisão do primeiro número pelo segundo.

let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));

alert("O resultado da divisão é: " + (numero1 / numero2));

// Crie um código que leia o nome de um aluno e as suas quatro notas. O programa deve calcular e exibir a média das notas, junto com a mensagem: "A média do aluno [nome] é: [média]".

let nomeAluno = prompt("Digite o nome do aluno:");
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));
let nota4 = parseFloat(prompt("Digite a quarta nota:"));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

alert(`A média do aluno ${nomeAluno} é: ${media}`);

// Desenvolva um programa que leia a distância percorrida por um veículo em quilômetros e a quantidade de combustível consumido em litros. O programa deve calcular a eficiência do veículo, ou seja, quantos quilômetros ele percorre por litro de combustível. O resultado deve ser exibido no formato: "Este veículo percorre X km por litro de combustível."

let distancia = parseFloat(prompt("Digite a distância percorrida em quilômetros:"));
let combustivel = parseFloat(prompt("Digite a quantidade de combustível consumido em litros:"));

let eficienciaVeiculo = distancia / combustivel;

alert(`Este veículo percorre ${eficienciaVeiculo} km por litro de combustível.`);

// Elabore um código que leia um número real e calcule a raiz quadrada desse número. O programa deve mostrar o valor da raiz quadrada no formato: "A raiz quadrada de X é: Y", onde X é o número e Y é o resultado da raiz quadrada.

let numeroReal = parseFloat(prompt("Digite um número real:"));
let raizQuadrada = Math.sqrt(numeroReal);

alert(`A raiz quadrada de ${numeroReal} é: ${raizQuadrada}`);

// Crie um programa que leia o nome de uma pessoa, sua idade e o seu peso. O programa deve exibir a mensagem: "Olá, [nome]! Você tem [idade] anos e pesa [peso] kg."

let nome = prompt("Digite seu nome:");
let idade = parseInt(prompt("Digite sua idade:"));
let peso = parseFloat(prompt("Digite seu peso em kg:"));

alert(`Olá, ${nome}! Você tem ${idade} anos e pesa ${peso} kg.`);