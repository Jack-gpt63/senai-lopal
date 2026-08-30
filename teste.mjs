import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
const rl = createInterface({ input, output });
const preco_arma = 130;

async function iniciarCalculadora() {
    const resposta = await rl.question('Digite a quantidade de coisas: ');
    const quantidade = Number(resposta);
    if (isNaN(quantidade) || quantidade < 0) {
        console.log('❌ Por favor, digite uma quantidade válida!');
    } else {
        const valorTotal = quantidade * preco_arma;
        
        console.log(`\n💵 Preço unitário: R$ ${preco_arma.toFixed(2)}`);
        console.log(`📦 Quantidade: ${quantidade}`);
        console.log(`💰 Valor Total: R$ ${valorTotal.toFixed(2)}`);
    }
    rl.close();
}
iniciarCalculadora();
