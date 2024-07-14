import { conectaApi } from "./conectaApi.js";
import { deletarProduto } from "./deletarProdutos.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(nome, preco, imagem, id) {
    const produto = document.createElement("ul");
    produto.className = "produtos__card";
    produto.innerHTML =` 
    <li class="produtos__img"><img id="img__size" src="${imagem}" alt="card 1"></li>
    <li class="produtos__title">
        <h4>${nome}</h4>
    </li>
    <li class="produtos__subtitle">
        <p>${preco}</p>
        <img class="produtos__trash" name="${id}" src="./assets/icon_trash.png">
    </li>
    `

    return produto;
}

async function listaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.nome, elemento.preco, elemento.imagem, elemento.id)))
            
    } catch {
        lista.innerHTML = '<h2 class="mensagem__titulo">Não foi possível carregar a lista de produtos</h2>'
    }
}


await listaProdutos();

const trashBtns = document.querySelectorAll(".produtos__trash");

if (trashBtns.length) {
    trashBtns.forEach(trash => {
        trash.addEventListener("click", evento => deletarProduto(evento, trash.name));
    });
}
