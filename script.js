/*
import x from "readline-sync";

let colecao_empresas = [
    {id: 1, nome: "Microsoft"},
    {id: 2, nome: "Apple"},
    {id: 3, nome: "Alphabet"},
    {id: 4, nome: "Facebook"}
];

console.log("\n1 - Microsoft")
console.log("2 - Apple")
console.log("3 - Alphabet")
console.log("4 - Facebook")

let empresa = x.question ("\nDigite o id da empresa que deseja: ");

console.log("\nVocê escolheu a empresa: "+colecao_empresas[empresa-1].colecao_empresas)
*/

//import entradadeDados from "readline-sync"

/*
//ex01
let valor_produto = 500

let total_parcelas = entradadeDados.question("\n Vc quer parcelar em quantas vezes? ") 


for ( let contador = 1; contador <= total_parcelas; contador++) {
    let valor_parcela = valor_produto/ contador;
    console.log("O numero de parcelas: " + contador + " - Valor da parcela: R$ " + valor_parcela.toFixed(2));

}


//ex02
let numero = entradadeDados.question("Digite um numero:  ")
let contador = 0;

console.log("Tabuada de multiplicacao - numero " + numero)

while (contador <= 10) {
    let resul = numero * contador;
    console.log(numero + "x" + contador + "=" + resul)
    contador++

} 

//ex03
let capital_emprestado =  entradadeDados.question("Valor: ");
let taxa_juros = 0.02; // 2%

let contador = 1;
let parcelas_totais = 5;

while ( contador <= parcelas_totais ) {

    let numero_parcela = contador;
    let juros_emprestimo = capital_emprestado * taxa_juros * numero_parcela;
    console.log("A taxa de juros no período de " + numero_parcela + " mes(es) é de R$" + juros_emprestimo + ",00");
    contador++;

} */

//Para que o loop while funcione corretamente é necessário usar um contador que deve ser incrementado dentro do bloco

//ex04 
let numeros = [10, 8, 7, 3, 20, 57, 34] 

let totalImpares = 0;
let totalPares = 0; 

let contador = 0;

while (contador < numeros.length){

    if (numeros[contador] %2 == 0){
        totalPares++;
    }
    else {
        totalImpares++;
    }

    contador++;
}

console.log("O total de pares e: " + totalPares);
console.log("O total de impares e: " + totalImpares)