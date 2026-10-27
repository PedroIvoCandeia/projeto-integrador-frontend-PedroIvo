
/*
Tema: Cardápio Sabor & Arte.
Entrada: preço mínimo e comandos do usuário.
Processamento: classificar os preços e calcular o resumo.
Saída: relatório no console.

Pseudocódigo:
1. Criar os itens do cardápio.
2. Pedir um preço mínimo.
3. Validar o valor digitado.
4. Classificar os itens por preço.
5. Identificar a categoria com switch.
6. Somar os preços e encontrar o mais caro.
7. Repetir comandos até digitar sair.
8. Mostrar os resultados.

Teste de mesa:
Item                  Preço   Classificação
Filé à Parmegiana     39.90   Caro
Frango Grelhado       29.90   Médio
Espaguete à Bolonhesa 32.90   Caro
*/

const cardapio = [
    { nome: "Filé à Parmegiana", preco: 39.90, categoria: "prato" },
    { nome: "Frango Grelhado", preco: 29.90, categoria: "prato" },
    { nome: "Espaguete à Bolonhesa", preco: 32.90, categoria: "prato" },
    { nome: "Suco Natural", preco: 8.00, categoria: "bebida" },
    { nome: "Refrigerante", preco: 6.00, categoria: "bebida" },
    { nome: "Pudim", preco: 12.90, categoria: "sobremesa" },
    { nome: "Petit Gateau", preco: 18.90, categoria: "sobremesa" }
];

const entrada = prompt("Digite o preço mínimo (0 a 100):");

if (entrada === null) {
    console.log("Operação cancelada.");
} else if (entrada.trim() === "") {
    console.log("Digite um valor.");
} else {
    const minimo = Number(entrada);

    if (Number.isNaN(minimo)) {
        console.log("Digite um número válido.");
    } else if (minimo < 0 || minimo > 100) {
        console.log("O preço deve estar entre 0 e 100.");
    } else {
        let soma = 0;
        let maiorPreco = cardapio[0];
        let quantidade = 0;
        const relatorio = [];

        for (const item of cardapio) {
            let classificacao;

            if (item.preco <= 10) {
                classificacao = "Barato";
            } else if (item.preco <= 30) {
                classificacao = "Médio";
            } else {
                classificacao = "Caro";
            }

            let tipo;

            switch (item.categoria) {
                case "prato":
                    tipo = "Prato principal";
                    break;
                case "bebida":
                    tipo = "Bebida";
                    break;
                case "sobremesa":
                    tipo = "Sobremesa";
                    break;
                default:
                    tipo = "Outra categoria";
                    break;
            }

            soma += item.preco;

            if (item.preco > maiorPreco.preco) {
                maiorPreco = item;
            }

            if (item.preco >= minimo) {
                quantidade++;
            }

            relatorio.push({
                nome: item.nome,
                preco: item.preco,
                classificacao: classificacao,
                categoria: tipo
            });

            console.log(`${item.nome}: ${classificacao} - ${tipo}`);
        }

        console.table(relatorio);

        console.log(`Itens acima do preço mínimo: ${quantidade}`);
        console.log(`Soma dos preços: R$ ${soma.toFixed(2)}`);
        console.log(`Item mais caro: ${maiorPreco.nome}`);

        let comando = "";

        while (comando !== "sair") {
            const resposta = prompt(
                'Digite "continuar" ou "sair":'
            );

            if (resposta === null) {
                comando = "sair";
            } else {
                comando = resposta.trim().toLowerCase();

                if (comando === "continuar") {
                    console.log("Confira os preços na tabela.");
                } else if (comando !== "sair") {
                    console.log("Comando inválido.");
                }
            }
        }

        console.log("Análise finalizada.");
    }
}
