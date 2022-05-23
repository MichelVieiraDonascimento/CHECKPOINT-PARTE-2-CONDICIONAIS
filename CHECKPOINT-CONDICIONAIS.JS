/*

1. Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor?

2. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um algoritimo que pergunte a 
idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&)

3. Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo

4. Faça um programa para a leitura de duas notas de um aluno.  
    A mensagem “Aprovado”, se a média alcançada for maior ou igual a 7;
    A mensagem “Aprovado com Distinção”, se a média for igual a 10;
    A mensagem “Reprovado” se a média for menor de do que 7;

*/

// EXERCICIO 1 

function maiordetres (a, b, c ) {
    if (a > b && a > c){
        return ("O número 1 é maior")
    }else if (b > a && b > c){
        return ("O número 2 é maior")
    }else {
        return ("O número 3 é maior")
    }

}
console.log (maiordetres (0, 10, 100))



// EXERCICIO 2

function doarsangue (idade){
    if (idade >= 18 && idade <=  67){
        return ("Pode doar sangue")
    }else {
        return ("Não pode doar sangue")
    }
}

console.log (doarsangue (81))



// EXERCICIO 3

function valor_positivo_negativo (valor) {
    if ( valor > 0) {
        return ("É positivo")
    }else {
        return ("É negativo")
    }
}

console.log (valor_positivo_negativo (-11))



// EXERCICIO 4

function resultado_nota (nota){
    if (nota == 10) {
        return ("Aprovado com Distinção")

    }else if ( nota >= 7){
        return ("Aprovado")

    }else {
        return ("Reprovado")
    } 
}

console.log (resultado_nota (2))