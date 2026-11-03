
// Elementos do site
const botoesAdicionar = document.querySelectorAll(".adicionar");
const listaCarrinho = document.getElementById("lista-carrinho");
const valorTotal = document.getElementById("valor-total");
const botaoLimpar = document.getElementById("limpar-carrinho");

const pesquisa = document.getElementById("pesquisa");
const categoria = document.getElementById("categoria");
const produtos = document.querySelectorAll(".produto");
const semResultados = document.getElementById("sem-resultados");

// Guarda os produtos escolhidos
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Adicionar produto ao carrinho
botoesAdicionar.forEach((botao) => {
    botao.addEventListener("click", () => {

        const nome = botao.dataset.nome;
        const preco = Number(botao.dataset.preco);

        const produtoExistente = carrinho.find(
            (item) => item.nome === nome
        );

        if (produtoExistente) {
            produtoExistente.quantidade++;
        } else {
            carrinho.push({
                nome: nome,
                preco: preco,
                quantidade: 1
            });
        }

        salvarCarrinho();
        mostrarCarrinho();
    });
});

// Salvar no navegador
function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// Mostrar os produtos escolhidos
function mostrarCarrinho() {

    listaCarrinho.innerHTML = "";

    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = "<p>Seu carrinho está vazio.</p>";
    }

    let total = 0;

    carrinho.forEach((item, indice) => {

        const subtotal = item.preco * item.quantidade;
        total += subtotal;

        const produto = document.createElement("div");
        produto.classList.add("item-carrinho");

        const nome = document.createElement("span");
        nome.textContent = item.nome;

        const preco = document.createElement("span");
        preco.textContent = subtotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        const controles = document.createElement("div");
        controles.classList.add("controles-carrinho");

        const diminuir = document.createElement("button");
        diminuir.textContent = "-";
        diminuir.setAttribute("aria-label", "Diminuir quantidade");

        diminuir.addEventListener("click", () => {
            item.quantidade--;

            if (item.quantidade <= 0) {
                carrinho.splice(indice, 1);
            }

            salvarCarrinho();
            mostrarCarrinho();
        });

        const quantidade = document.createElement("span");
        quantidade.textContent = item.quantidade;

        const aumentar = document.createElement("button");
        aumentar.textContent = "+";
        aumentar.setAttribute("aria-label", "Aumentar quantidade");

        aumentar.addEventListener("click", () => {
            item.quantidade++;
            salvarCarrinho();
            mostrarCarrinho();
        });

        controles.append(diminuir, quantidade, aumentar);

        produto.append(nome, preco, controles);

        listaCarrinho.appendChild(produto);
    });

    valorTotal.textContent = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

// Limpar o carrinho
botaoLimpar.addEventListener("click", () => {
    carrinho = [];
    salvarCarrinho();
    mostrarCarrinho();
});

// Pesquisar e filtrar produtos
function filtrarProdutos() {

    const texto = pesquisa.value.toLowerCase();
    const categoriaEscolhida = categoria.value;

    let encontrados = 0;

    produtos.forEach((produto) => {

        const nome = produto.querySelector("h3").textContent.toLowerCase();
        const descricao = produto.querySelector(".produto-info p").textContent.toLowerCase();
        const categoriaProduto = produto.dataset.categoria;

        const combinaTexto =
            nome.includes(texto) || descricao.includes(texto);

        const combinaCategoria =
            categoriaEscolhida === "todos" ||
            categoriaProduto === categoriaEscolhida;

        if (combinaTexto && combinaCategoria) {
            produto.hidden = false;
            encontrados++;
        } else {
            produto.hidden = true;
        }
    });

    semResultados.hidden = encontrados !== 0;
}

pesquisa.addEventListener("input", filtrarProdutos);
categoria.addEventListener("change", filtrarProdutos);

// Mostrar o carrinho quando abrir o site
mostrarCarrinho();

