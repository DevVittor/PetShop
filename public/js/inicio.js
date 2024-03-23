let lista = [];
function adicionarProduto(botao){
    const produtoInput = botao.previousElementSibling;
    const produto = JSON.parse(produtoInput.value);
    lista.push(produto);
    console.log('Produto adicionado à lista:', lista);
}