// let nota = Number(prompt("Digite sua nota: "))

// if (nota >= 6) {
//     alert("Aprovado!")
//   // bloco de códigon-> true
// } else if (nota >= 4) {
//     alert("Recuperação!")
// } 
// else {
//     alert("Reprovado!")
// }

// let idade = Number(prompt("Qual é sua idade?"))

// if (idade <= 12) {
//     alert("Criança")
// } else if (idade <= 18) {
//     alert("Adolescente") 
// } else if (idade <= 60) {
//         alert("Adulto") 
// } else {
//     alert("Idoso")
// }
    

// let valor = Number(prompt("digite o valor do produto:"))

// if (valor <= 100) {
//     alert("Sem desconto")
// } else if (valor <= 299.99) {
//     alert("10% de desconto")
// } else if (valor <= 499.99) {
//     alert("20% de desconto")
// } else {
//     alert("30% de desconto")
// }

let valor = Number(prompt("Digite o valor do produto"))
let desconto = Number(prompt("Digite o percentual de desconto"))

if (desconto < 0 || desconto > 100) {
    alert("desconto inválido")
} else {
    let desconto_aplicado = desconto / 100
    let valor_total = valor - (valor * desconto_aplicado)
    
    alert("valor final:" + valor_total)
}