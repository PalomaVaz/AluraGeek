import { conectaApi } from "./conectaApi.js";

export async function deletarProduto(evento, id) {
    console.log(id);
    evento.preventDefault();

    try {
        await conectaApi.deletaProduto(id);
    } catch (e) {
        alert(e);
    }
}


 
